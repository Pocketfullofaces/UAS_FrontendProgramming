import Link from "next/link";
import SizeChart from "@/components/SizeChart";
export const metadata = { title: "Panduan Ukuran" };
export default function Page() {
    return (
        <main id="main">
        <div className="container content-bottom">
            <div className="page-head">
            <div className="breadcrumb">
                <Link href="/">Home</Link> / Find Your Fit.{" "}
            </div>
            <span className="eyebrow"> SIZE GUIDE </span>
            <h1>FIND YOUR FIT.</h1>
            <p>
                Ukur pakaian favoritmu di permukaan datar, lalu bandingkan dengan
                panduan di bawah.
            </p>
            </div>
            <div className="notice">
            {" "}
            Ukuran adalah spesifikasi desain untuk demo. Toleransi jahitan ±2 cm.
            Lebar dada diukur mendatar, bukan lingkar dada.{" "}
            </div>
            <SizeChart />
            
        </div>
        </main>
    );
}
