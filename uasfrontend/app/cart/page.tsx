import Link from "next/link";
import Cart from "@/components/Cart";
export const metadata = { title: "Keranjang" };
export default function Page() {
  return (
    <main id="main">
      <div className="container content-bottom">
        <div className="page-head">
          <div className="breadcrumb">
            <Link href="/"> Home </Link> / The Good Bag.{" "}
          </div>
          <span className="eyebrow"> YOUR SHOPPING BAG </span>
          <h1> THE GOOD BAG. </h1>
          <p> Cek pilihanmu sebelum melanjutkan ke checkout. </p>
        </div>
        <Cart />
      </div>
    </main>
  );
}