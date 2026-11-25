import Link from "next/link";
import Catalog from "@/components/Catalog";
export const metadata = { title: "Produk Terbaru" };
export default function Page() {
  return (
    <main id="main">
      <div className="container content-bottom">
        <div className="page-head">
          <div className="breadcrumb">
            <Link href="/"> Home </Link> / Fresh Off The Press.{" "}
          </div>
          <span className="eyebrow"> NEW ARRIVALS / VOL. 01 </span>
          <h1> FRESH OFF THE PRESS. </h1>
          <p>
            {" "}
            Koleksi pertama, energi baru. Kenalan dengan rilisan terbaru dari
            OFFBEAT.{" "}
          </p>
        </div>
        <div className="notice">
          {" "}
          Drop 01: After Hours, Good Noise, dan Off Duty. Delapan desain
          orisinal, satu frekuensi bersama.{" "}
        </div>

        <Catalog mode="new-arrivals" />
      </div>
    </main>
  );
}
