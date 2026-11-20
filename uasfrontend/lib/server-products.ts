import { prisma } from "./db";
import type { Product } from "./types";

export async function getProducts(): Promise<Product[]> {
  const rows = await prisma.product.findMany({ orderBy: { position: "asc" } });
  return rows.map(({ sizes, position: _position, ...product }) => ({
    ...product,
    sizes: Array.isArray(sizes)
      ? sizes.filter((s): s is string => typeof s === "string")
      : [],
  }));
}

export async function getProduct(id: string) {
  const row = await prisma.product.findUnique({ where: { id } });
  if (!row) return null;
  const { sizes, position: _position, ...product } = row;
  return {
    ...product,
    sizes: Array.isArray(sizes)
      ? sizes.filter((s): s is string => typeof s === "string")
      : [],
  };
}
