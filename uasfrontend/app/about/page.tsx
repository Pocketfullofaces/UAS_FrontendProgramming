import Link from "next/link";
export const metadata = { title: "Tentang Kami" };
export default function Page() {
  return (
    <main id="main">
      <div className="container content-bottom">
        <div className="page-head">
          <div className="breadcrumb">
            <Link href="/"> Home </Link> / A Little Off. In A Good Way.{" "}
          </div>
          <span className="eyebrow"> OUR STORY </span>
          <h1> A LITTLE OFF. IN A GOOD WAY. </h1>
          <p>
            {" "}
            OFFBEAT adalah konsep label streetwear independen yang dibuat oleh
            lima mahasiswa untuk proyek Front-End.{" "}
          </p>
        </div>
        <div className="big-quote">
          {" "}
          WEAR WHAT FEELS RIGHT. <br /> BE WHO YOU ALREADY ARE.{" "}
        </div>
        <div className="section two-col">
          <div>
            <span className="eyebrow"> WHY WE EXIST </span>
            <h2>
              {" "}
              PAKAIAN SEHARI-HARI. <br /> CARA PANDANG SENDIRI.{" "}
            </h2>
          </div>
          <div>
            <p>
              {" "}
              Kami memulai OFFBEAT dari satu ide: pakaian bisa terasa nyaman
              sekaligus menunjukkan karakter. Kami memadukan grafis orisinal,
              warna earth tone, dan aksen acid green.{" "}
            </p>
            <p>
              {" "}
              Website ini mengambil inspirasi dari cara toko streetwear
              menyajikan produk dan koleksi, termasuk Cool Shirtz. Nama brand,
              naskah, dan ilustrasi OFFBEAT dibuat untuk proyek ini.{" "}
            </p>
          </div>
        </div>
        <span className="eyebrow"> FIVE PEOPLE. ONE FREQUENCY. </span>
        <h2> MEET THE CREW. </h2>
        <div className="team-grid">
          <article className="team-card">
            <b> Deco </b>
            <p>
              {" "}
              Brand &amp; editorial <br /> 5 halaman{" "}
            </p>
          </article>
          <article className="team-card">
            <b> David </b>
            <p>
              {" "}
              Katalog &amp; produk <br /> 5 halaman{" "}
            </p>
          </article>
          <article className="team-card">
            <b> Juan </b>
            <p>
              {" "}
              Discovery &amp; bantuan <br /> 5 halaman{" "}
            </p>
          </article>
          <article className="team-card">
            <b> Kelvandi </b>
            <p>
              {" "}
              Alur belanja <br /> 5 halaman{" "}
            </p>
          </article>
          <article className="team-card">
            <b> Delfino Ferari </b>
            <p>
              {" "}
              Akun &amp; pesanan <br /> 5 halaman{" "}
            </p>
          </article>
        </div>
        <div className="notice" style={{ marginTop: "30px" }}>
          {" "}
          Proyek pembelajaran HTML, CSS, dan JavaScript murni. Akun, formulir,
          pengiriman, serta transaksi merupakan simulasi dan tidak menggunakan
          layanan backend.{" "}
        </div>
      </div>
    </main>
  );
}
