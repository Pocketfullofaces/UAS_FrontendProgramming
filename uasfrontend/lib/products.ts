// ini buat data dari produk produknya

import type { Product } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: "after-hours",
    name: "After Hours Tee",
    category: "tees",
    label: "Oversized T-shirt", 
    price: 189000,
    image: "tee-night",
    color: "Washed black",
    tag: "BEST SELLER",
    fresh: true,
    description:
      "Buat ide-ide yang baru muncul setelah tengah malam. Kaos oversized dengan grafis orbit dan siluet santai.",
    material: "Cotton combed 24s, 100% katun",
    sizes: ["S", "M", "L", "XL"],
    collection: "after-hours",
  }]