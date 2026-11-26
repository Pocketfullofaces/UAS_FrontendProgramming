import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { visitorSession, readState } from "@/lib/server-session";
import { apiError, ApiError, requestBody } from "@/lib/api";

export const runtime = "nodejs";
const input = z.object({
  customer: z.object({
    name: z.string().trim().min(1).max(60),
    email: z.email().max(120),
    phone: z.string().regex(/^[0-9+() -]{8,20}$/),
    address: z.string().trim().min(10).max(200),
    city: z.string().trim().min(1).max(60),
    postal: z.string().regex(/^\d{5}$/),
  }),
  shipping: z.enum(["regular", "express"]),
  payment: z.enum(["Transfer bank", "E-wallet"]),
  consent: z.literal(true),
  requestKey: z.uuid(),
});
export async function POST(request: Request) {
  try {
    const data = input.parse(await requestBody(request));
    const visitor = await visitorSession();
    const visitorId = visitor.id;
    const order = await prisma.$transaction(async (tx) => {
      const existing = await tx.order.findUnique({
        where: {
          visitorId_requestKey: { visitorId, requestKey: data.requestKey },
        },
      });
      if (existing) return existing;
      const cart = await tx.cartItem.findMany({
        where: { visitorId },
        include: { product: true },
      });
      if (!cart.length) throw new ApiError("Keranjang masih kosong.");
      for (const row of cart)
        if (
          !Array.isArray(row.product.sizes) ||
          !row.product.sizes.includes(row.size) ||
          row.qty < 1 ||
          row.qty > 10
        )
          throw new ApiError("Periksa kembali produk dan jumlah di keranjang.");
      const subtotal = cart.reduce(
        (sum, i) => sum + i.product.price * i.qty,
        0,
      );
      const delivery =
        data.shipping === "express" ? 30000 : subtotal >= 500000 ? 0 : 18000;
      const created = await tx.order.create({
        data: {
          id: "OB-" + randomUUID().toUpperCase(),
          visitorId,
          requestKey: data.requestKey,
          ...data.customer,
          shipping: data.shipping,
          payment: data.payment,
          subtotal,
          delivery,
          total: subtotal + delivery,
          items: {
            create: cart.map((i) => ({
              productId: i.productId,
              size: i.size,
              qty: i.qty,
              name: i.product.name,
              price: i.product.price,
              image: i.product.image,
            })),
          },
        },
      });
      await tx.cartItem.deleteMany({ where: { visitorId } });
      return created;
    });
    return NextResponse.json(
      { orderId: order.id, state: await readState(visitorId) },
      { status: 201 },
    );
  } catch (error) {
    return apiError(error);
  }
}