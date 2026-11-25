import { notFound } from "next/navigation";
import { getProduct } from "@/lib/server-products";
import ProductDetail from "@/components/ProductDetail";
export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const product = await getProduct(id);
    return {
    title: product?.name || "Produk tidak ditemukan",
    };
}
export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const product = await getProduct(id);
    if (!product) notFound();
    return <ProductDetail product={product} />;
}
