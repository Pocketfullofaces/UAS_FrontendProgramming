import Link from "next/link";
import Catalog from "@/components/Catalog";
export const metadata = { title: "Koleksi" };
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; collection?: string }>;
}) {
  const params = await searchParams;
  const collection = params.collection || "after-hours";
  return (
    <main id="main">
      <div className="container content-bottom">
        <div className="page-head">
          <div className="breadcrumb">
            <Link href="/"> Home </Link> / Three Moods. One You.{" "}
          </div>
          <span className="eyebrow"> THE COLLECTIONS </span>
          <h1> THREE MOODS. ONE YOU. </h1>
          <p>
            {" "}
            Setiap koleksi punya ceritanya sendiri. Pilih yang paling sesuai
            dengan harimu.{" "}
          </p>
        </div>
        <div className="info-grid">
          <article className="panel">
            <span className="eyebrow"> 01 / AFTER HOURS </span>
            <h2> IDE TANPA JAM. </h2>
            <p> Warna gelap dan orbit acid untuk malam yang penuh ide. </p>
          </article>
          <article className="panel">
            <span className="eyebrow"> 02 / GOOD NOISE </span>
            <h2> MAKE SOME NOISE. </h2>
            <p>
              {" "}
              Grafis ekspresif dan warna playful untuk cara pandang yang
              berbeda.{" "}
            </p>
          </article>
          <article className="panel">
            <span className="eyebrow"> 03 / OFF DUTY </span>
            <h2> TAKE IT EASY. </h2>
            <p>
              {" "}
              Earth tone dan potongan santai. Hari libur dalam bentuk
              pakaian.{" "}
            </p>
          </article>
        </div>

        <Catalog mode="collections" collection={collection} />
      </div>
    </main>
  );
}
