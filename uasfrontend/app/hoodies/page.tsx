import Link from "next/link";
import Catalog from "@/components/Catalog";
export const metadata = { title: "Katalog Hoodie" };
export default function Page() {
    return (
        <main id="main">
        <div className="container content-bottom">
        <div className="page-head">
        <div className="breadcrumb">
            <Link href="/"> Home </Link> / Your Comfort Zone.{" "}
        </div>
        <span className="eyebrow"> THE SHOP / HOODIES </span>
        <h1> YOUR COMFORT ZONE. </h1>
        <p> Heavyweight hoodies untuk malam dingin dan hari yang santai. </p>
        </div>

        <Catalog mode="hoodies" />
    </div>
    </main>
);
}
