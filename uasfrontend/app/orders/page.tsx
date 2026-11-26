import Link from "next/link";
import Orders from "@/components/Orders";
export const metadata = { title: "Riwayat Pesanan" };
export default function Page() {
  return (
    <main id="main">
      <div className="container content-bottom">
        <div className="page-head">
          <div className="breadcrumb">
            <Link href="/"> Home </Link> / Your Good Choices.{" "}
          </div>
          <span className="eyebrow"> ORDER HISTORY </span>
          <h1> YOUR GOOD CHOICES. </h1>
          <p>
            {" "}
            Riwayat seluruh pesanan demo yang dibuat pada sesi ini, termasuk
            checkout tanpa profil.{" "}
          </p>
        </div>
        <div className="notice">
          {" "}
          Riwayat mengikuti sesi browser ini. Gunakan browser yang sama untuk
          melihat kembali pesanan. Profil demo belum menyediakan akses lintas
          perangkat.{" "}
        </div>
        <Orders />
      </div>
    </main>
  );
}