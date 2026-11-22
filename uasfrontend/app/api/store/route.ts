import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { visitorSession, readState } from "@/lib/server-session";
import { apiError, ApiError, requestBody } from "@/lib/api";

export const runtime = "nodejs";
const profile = z.object({
  name: z.string().trim().min(1).max(60),
  email: z
    .email()
    .max(120)
    .transform((v) => v.toLowerCase()),
});
const cart = z
  .array(
    z.object({
      id: z.string().min(1).max(80),
      size: z.string().min(1).max(20),
      qty: z.number().int().min(1).max(10),
    }),
  )
  .max(100);
const actions = z.discriminatedUnion("action", [
  z.object({ action: z.literal("cart"), value: cart }),
  z.object({
    action: z.literal("wishlist"),
    value: z.array(z.string().max(80)).max(100),
  }),
  z.object({
    action: z.literal("add"),
    id: z.string().max(80),
    size: z.string().max(20),
    qty: z.number().int().min(1).max(10),
  }),
  z.object({ action: z.literal("register"), value: profile }),
  z.object({ action: z.literal("profile"), value: profile }),
  z.object({
    action: z.literal("login"),
    email: z
      .email()
      .max(120)
      .transform((v) => v.toLowerCase()),
  }),
  z.object({ action: z.literal("logout") }),
]);
export async function GET() {
  try {
    const visitor = await visitorSession();
    return NextResponse.json(
      { state: await readState(visitor.id) },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (error) {
    return apiError(error);
  }
}
export async function PATCH(request: Request) {
  try {
    const data = actions.parse(await requestBody(request));
    const visitor = await visitorSession();
    const visitorId = visitor.id;
    await prisma.$transaction(async (tx) => {
      if (data.action === "cart") {
        const keys = new Set(data.value.map((i) => i.id + "|" + i.size));
        if (keys.size !== data.value.length)
          throw new ApiError("Item keranjang tidak boleh duplikat.");
        const products = await tx.product.findMany({
          where: { id: { in: data.value.map((i) => i.id) } },
        });
        for (const row of data.value) {
          const p = products.find((p) => p.id === row.id);
          if (!p || !Array.isArray(p.sizes) || !p.sizes.includes(row.size))
            throw new ApiError("Produk atau ukuran tidak tersedia.");
        }
        await tx.cartItem.deleteMany({ where: { visitorId } });
        if (data.value.length)
          await tx.cartItem.createMany({
            data: data.value.map((i) => ({
              visitorId,
              productId: i.id,
              size: i.size,
              qty: i.qty,
            })),
          });
      }
      if (data.action === "add") {
        const p = await tx.product.findUnique({ where: { id: data.id } });
        if (!p || !Array.isArray(p.sizes) || !p.sizes.includes(data.size))
          throw new ApiError("Produk atau ukuran tidak tersedia.");
        const where = {
          visitorId_productId_size: {
            visitorId,
            productId: data.id,
            size: data.size,
          },
        };
        const existing = await tx.cartItem.findUnique({ where });
        if ((existing?.qty || 0) + data.qty > 10)
          throw new ApiError("Maksimal 10 item per produk dan ukuran.");
        await tx.cartItem.upsert({
          where,
          create: {
            visitorId,
            productId: data.id,
            size: data.size,
            qty: data.qty,
          },
          update: { qty: { increment: data.qty } },
        });
      }
      if (data.action === "wishlist") {
        const ids = [...new Set(data.value)];
        const count = await tx.product.count({ where: { id: { in: ids } } });
        if (count !== ids.length) throw new ApiError("Produk tidak tersedia.");
        await tx.wishlistItem.deleteMany({ where: { visitorId } });
        if (ids.length)
          await tx.wishlistItem.createMany({
            data: ids.map((productId) => ({ visitorId, productId })),
          });
      }
      if (data.action === "register") {
        if (await tx.profile.findUnique({ where: { visitorId } }))
          throw new ApiError(
            "Sesi browser ini sudah memiliki profil demo. Silakan masuk.",
          );
        await tx.profile.create({ data: { visitorId, ...data.value } });
        await tx.visitor.update({
          where: { id: visitorId },
          data: { signedIn: true },
        });
      }
      if (data.action === "profile") {
        if (!visitor.signedIn)
          throw new ApiError("Masuk ke profil demo terlebih dahulu.", 401);
        await tx.profile.update({ where: { visitorId }, data: data.value });
      }
      if (data.action === "login") {
        const stored = await tx.profile.findUnique({ where: { visitorId } });
        if (!stored || stored.email !== data.email)
          throw new ApiError(
            "Profil demo tidak ditemukan pada sesi browser ini. Periksa email atau buat profil.",
          );
        await tx.visitor.update({
          where: { id: visitorId },
          data: { signedIn: true },
        });
      }
      if (data.action === "logout")
        await tx.visitor.update({
          where: { id: visitorId },
          data: { signedIn: false },
        });
    });
    return NextResponse.json({ state: await readState(visitorId) });
  } catch (error) {
    return apiError(error);
  }
}