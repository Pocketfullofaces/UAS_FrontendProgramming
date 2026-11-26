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

            <div className="info-grid section">
            <article className="panel">
                <div className="number">01</div>
                <h3>Lebar dada</h3>
                <p>
                Ukur dari ketiak kiri ke ketiak kanan saat pakaian dibentangkan.
                </p>
            </article>
            <article className="panel">
                <div className="number">02</div>
                <h3>Panjang badan</h3>
                <p>Ukur dari titik tertinggi bahu hingga ujung bawah pakaian.</p>
            </article>
            <article className="panel">
                <div className="number">03</div>
                <h3>Panjang lengan</h3>
                <p>
                Ukur dari sambungan bahu sampai ujung lengan, tanpa menarik kain.
                </p>
            </article>
            </div>
            <div className="panel">
            <h3>Aksesori / one size</h3>
            <p>
                Tote: 38 x 42 cm, panjang handle 60 cm. Cap: lingkar kepala 54–60 cm
                dengan strap yang dapat disesuaikan.
            </p>
            </div>
        </div>
        </main>
    );
}
