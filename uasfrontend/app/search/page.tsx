import Link from "next/link";
import Catalog from "@/components/Catalog";
export const metadata = { title: "Pencarian" };
export default async function Page({
    searchParams,
}: {
    searchParams: Promise<{ q?: string; collection?: string }>;
}) {
    const params = await searchParams;
    const query = params.q || "";
    return (
        <main id="main">
        <div className="container content-bottom">
            <div className="page-head">
            <div className="breadcrumb">
                <Link href="/">Home</Link> / Find Your Frequency.{" "}
            </div>
            <span className="eyebrow">SEARCH</span>
            <h1>FIND YOUR FREQUENCY.</h1>
            <p>
                Sudah punya sesuatu dalam pikiran? Coba “tee”, “olive”, atau
                “hoodie”.
            </p>
            </div>

            <Catalog mode="search" query={query} />
        </div>
        </main>
    );
}
