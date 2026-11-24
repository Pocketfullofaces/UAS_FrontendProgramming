import Link from "next/link";
import Catalog from "@/components/Catalog";
export const metadata = { title: "Katalog Kaos" };
export default function Page() {
    return (
    <main id="main">
    <div className="container content-bottom">
        <div className="page-head">
        <div className="breadcrumb">
            <Link href="/"> Home </Link> / Say It With A Tee.{" "}
        </div>
        <span className="eyebrow"> THE SHOP / TEES </span>
        <h1> SAY IT WITH A TEE. </h1>
        <p> Graphic tees dengan potongan santai dan cerita yang berbeda. </p>
        </div>

        <Catalog mode="tees" />
    </div>
    </main>
);
}
