import type { CartItem, Product } from "./types";
export const money = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
export function totals(
  cart: CartItem[],
  shipping: string,
  products: Product[],
) {
  const subtotal = cart.reduce(
    (sum, item) =>
      sum + (products.find((p) => p.id === item.id)?.price || 0) * item.qty,
    0,
  );
  const delivery = !subtotal
    ? 0
    : shipping === "express"
      ? 30000
      : subtotal >= 500000
        ? 0
        : 18000;
  return { subtotal, delivery, total: subtotal + delivery };
}
