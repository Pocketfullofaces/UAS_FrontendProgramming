import Link from "next/link";
import Checkout from "@/components/Checkout";
export const metadata = { title: "Checkout" };
export default function Page() {
  return (
    <main id="main">
      <div className="container content-bottom">
        <div className="page-head">
          <div className="breadcrumb">
            <Link href="/"> Home </Link> / Make It Yours.{" "}
          </div>
          <span className="eyebrow"> CHECKOUT / DEMO </span>
          <h1> MAKE IT YOURS. </h1>
          <p>
            {" "}
            Satu langkah lagi. Gunakan data contoh untuk mencoba checkout.{" "}
          </p>
        </div>
        <Checkout />
      </div>
    </main>
  );
}