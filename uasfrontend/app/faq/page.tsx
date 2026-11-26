import Link from "next/link";
import Faq from "@/components/Faq";
export const metadata = { title: "FAQ" };
export default function Page() {
  return (
    <main id="main">
      <div className="container content-bottom">
        <div className="page-head">
          <div className="breadcrumb">
            <Link href="/">Home</Link> / Good Questions. Clear Answers.{" "}
          </div>
          <span className="eyebrow">FAQ / HELP DESK</span>
          <h1>GOOD QUESTIONS. CLEAR ANSWERS.</h1>
          <p>
            Semua yang perlu kamu tahu tentang produk, pesanan, dan cara kerja
            demo.
          </p>
        </div>
      </div>
    </main>
  );
}
