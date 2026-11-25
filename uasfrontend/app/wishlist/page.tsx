import Link from "next/link";
import Catalog from "@/components/Catalog";
export const metadata = { title: "Wishlist" };
export default function Page() {
  return (
    <main id="main">
      <div className="container content-bottom">
        <div className="page-head">
          <div className="breadcrumb">
            <Link href="/">Home</Link> / On Your Radar.{" "}
          </div>
          <span className="eyebrow">YOUR WISHLIST</span>
          <h1>ON YOUR RADAR.</h1>
          <p>
            Simpan dulu. Temukan lagi nanti. Favoritmu tersimpan di browser ini.
          </p>
        </div>

        <Catalog mode="wishlist" />
      </div>
    </main>
  );
}
