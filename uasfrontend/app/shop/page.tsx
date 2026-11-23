import Link from "next/link";
import Catalog from "@/components/Catalog";
export const metadata = { title: "Semua Produk" };
export default function Page() {
  return (
    <main id="main">
      <div className="container content-bottom">
        <div className="page-head">
          <div className="breadcrumb">
            <Link href="/"> Home </Link> / The Good Stuff.{" "}
          </div>
          <span className="eyebrow"> THE SHOP / ALL PRODUCTS </span>
          <h1> THE GOOD STUFF. </h1>
          <p>
            {" "}
            Semua favorit dalam satu tempat. Cari sesuatu yang paling kamu.{" "}
          </p>
        </div>

        <Catalog mode="shop" />
      </div>
    </main>
  );
}
