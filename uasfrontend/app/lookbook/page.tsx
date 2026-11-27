import Link from "next/link";
export const metadata = { title: "Lookbook" };
export default function Page() {
  return (
    <main id="main">
      <div className="container content-bottom">
        <div className="page-head">
          <div className="breadcrumb">
            <Link href="/"> Home </Link> / Out Of The Ordinary.{" "}
          </div>
          <span className="eyebrow"> LOOKBOOK / VOLUME 01 </span>
          <h1> OUT OF THE ORDINARY. </h1>
          <p>
            {" "}
            Empat cara sederhana membawa OFFBEAT ke keseharianmu. Pakai idenya,
            buat versimu sendiri.{" "}
          </p>
        </div>
        <div className="look-banner">
          <div>
            <span className="eyebrow"> THE EVERYDAY EXPERIMENT </span>
            <h2> NO RULES. JUST GOOD FITS. </h2>
          </div>
          <span> ↗ VOL. 01 </span>
        </div>
        <div className="story-grid">
          <article className="story">
            <span className="eyebrow"> LOOK 01 / LATE NIGHT </span>
            <img
              src="/images/tee-night.png"
              alt="Ilustrasi styling AFTER THE CITY SLEEPS."
              loading="lazy"
            />
            <h2> AFTER THE CITY SLEEPS. </h2>
            <p>
              {" "}
              After Hours Tee + celana hitam + sneakers favorit. Sederhana,
              dengan grafis yang jadi pusat perhatian.{" "}
            </p>
            <Link className="text-link" href="/product?id=after-hours">
              {" "}
              SHOP THE PIECE ↗{" "}
            </Link>
          </article>
          <article className="story">
            <span className="eyebrow"> LOOK 02 / SLOW MORNING </span>
            <img
              src="/images/hoodie-olive.png"
              alt="Ilustrasi styling OFF THE CLOCK."
              loading="lazy"
            />
            <h2> OFF THE CLOCK. </h2>
            <p>
              {" "}
              Off Duty Hoodie dengan celana warna krem. Tambahkan tote untuk
              weekend tanpa terburu-buru.{" "}
            </p>
            <Link className="text-link" href="/product?id=off-duty">
              {" "}
              SHOP THE PIECE ↗{" "}
            </Link>
          </article>
          <article className="story">
            <span className="eyebrow"> LOOK 03 / LOUD IDEAS </span>
            <img
              src="/images/tee-purple.png"
              alt="Ilustrasi styling ON YOUR OWN FREQUENCY."
              loading="lazy"
            />
            <h2> ON YOUR OWN FREQUENCY. </h2>
            <p>
              {" "}
              Static Club Tee dan denim loose fit. Biarkan warna lilac memberi
              sedikit kejutan.{" "}
            </p>
            <Link className="text-link" href="/product?id=static-tee">
              {" "}
              SHOP THE PIECE ↗{" "}
            </Link>
          </article>
          <article className="story">
            <span className="eyebrow"> LOOK 04 / EVERYDAY ERRANDS </span>
            <img
              src="/images/tote.png"
              alt="Ilustrasi styling TAKE THE LONG WAY."
              loading="lazy"
            />
            <h2> TAKE THE LONG WAY. </h2>
            <p>
              {" "}
              Everyday Carry Tote untuk menemani kaos putih dan celana santai.
              Muat barang penting, tetap ringan.{" "}
            </p>
            <Link className="text-link" href="/product?id=daily-tote">
              {" "}
              SHOP THE PIECE ↗{" "}
            </Link>
          </article>
        </div>
        <p className="form-note">
          {" "}
          Lookbook berupa arahan styling dan ilustrasi mockup orisinal, bukan
          foto produk sungguhan.{" "}
        </p>
      </div>
    </main>
  );
}
