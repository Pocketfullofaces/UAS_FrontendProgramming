import { randomBytes, createHash } from "node:crypto";
import { cookies } from "next/headers";
import { prisma } from "./db";
import type { ShopState } from "./types";

export async function visitorSession() {
  const jar = await cookies();
  const token = jar.get("offbeat-session")?.value;
  if (token && /^[a-f0-9]{64}$/.test(token)) {
    const id = createHash("sha256").update(token).digest("hex");
    const visitor = await prisma.visitor.findUnique({ where: { id } });
    if (visitor && visitor.expiresAt > new Date()) return visitor;
  }
  const fresh = randomBytes(32).toString("hex");
  const expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
  const visitor = await prisma.visitor.create({
    data: {
      id: createHash("sha256").update(fresh).digest("hex"),
      expiresAt: expires,
    },
  });
  jar.set("offbeat-session", fresh, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.COOKIE_SECURE === "true",
    path: "/",
    expires,
  });
  return visitor;
}

export async function readState(id: string): Promise<ShopState> {
  const visitor = await prisma.visitor.findUniqueOrThrow({
    where: { id },
    include: {
      profile: true,
      cart: true,
      wishlist: true,
      orders: { orderBy: { createdAt: "desc" }, include: { items: true } },
    },
  });
  return {
    cart: visitor.cart.map((i) => ({
      id: i.productId,
      size: i.size,
      qty: i.qty,
    })),
    wishlist: visitor.wishlist.map((i) => i.productId),
    profile:
      visitor.profile && visitor.signedIn
        ? { name: visitor.profile.name, email: visitor.profile.email }
        : null,
    session: visitor.signedIn,
    orders: visitor.orders.map((o) => ({
      id: o.id,
      date: o.createdAt.toISOString(),
      customer: {
        name: o.name,
        email: o.email,
        phone: o.phone,
        address: o.address,
        city: o.city,
        postal: o.postal,
      },
      items: o.items.map((i) => ({
        id: i.productId,
        size: i.size,
        qty: i.qty,
        name: i.name,
        price: i.price,
        image: i.image,
      })),
      shipping: o.shipping,
      payment: o.payment,
      subtotal: o.subtotal,
      delivery: o.delivery,
      total: o.total,
      status: o.status,
    })),
  };
}