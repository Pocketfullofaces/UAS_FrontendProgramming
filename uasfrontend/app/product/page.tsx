import { redirect } from "next/navigation";
export default async function Page({
    searchParams,
}: {
    searchParams: Promise<{ id?: string }>;
}) {
    const { id } = await searchParams;
    redirect("/product/" + encodeURIComponent(id || "after-hours"));
}
