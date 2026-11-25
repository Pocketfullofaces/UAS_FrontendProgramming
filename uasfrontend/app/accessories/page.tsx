import Link from "next/link";
import Catalog from "@/components/Catalog";
export const metadata = { title: "Katalog Aksesori" };
export default function Page() {
    return (
        <main id="main">
        <div className="container content-bottom">
        <div className="page-head">
        <div className="breadcrumb">
            <Link href="/"> Home </Link> / Small Things. Big Energy.{" "}
        </div>
        <span className="eyebrow"> THE SHOP / ACCESSORIES </span>
        <h1> SMALL THINGS. BIG ENERGY. </h1>
        <p> Detail kecil yang bikin gaya sehari-hari terasa lengkap. </p>
        </div>
        <Catalog mode="accessories" />
    </div>
    </main>
);
}
