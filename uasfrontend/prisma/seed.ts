import { prisma } from "../lib/db";
import { PRODUCTS } from "../lib/products";

try {
  for (const [position, product] of PRODUCTS.entries()) {
    await prisma.product.upsert({
      where: { id: product.id },
      update: {},
      create: { ...product, position },
    });
  }
  console.log(
    `Seed selesai: ${PRODUCTS.length} produk tersedia. Produk yang sudah ada tidak ditimpa.`,
  );
} finally {
  await prisma.$disconnect();
}