import Link from "next/link";
import Account from "@/components/Account";
export const metadata = { title: "Profil Saya" };
export default function Page() {
  return (
    <main id="main">
      <div className="container content-bottom">
        <div className="page-head">
          <div className="breadcrumb">
            <Link href="/"> Home </Link> / Your Own Little Corner.{" "}
          </div>
          <span className="eyebrow"> MY ACCOUNT </span>
          <h1> YOUR OWN LITTLE CORNER. </h1>
          <p> Kelola nama dan email profil demo kamu di sini. </p>
        </div>
        <Account />
      </div>
    </main>
  );
}