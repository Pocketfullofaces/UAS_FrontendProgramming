import Link from "next/link";
import { ProductGrid } from "@/components/Catalog";
export const metadata = { title: "Beranda" };
export default function Page() {
  return (
    <main id="main">
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <span className="eyebrow">
              {" "}
              INDEPENDENT STREETWEAR · VOL. 01 / 2026{" "}
            </span>
            <h1>
              {" "}
              A LITTLE WEIRD. <br /> A LOT <em> YOU. </em>
            </h1>
            <p>
              {" "}
              Untuk yang nggak harus sama. <br /> Everyday pieces, unexpected
              details. <br /> Temukan frekuensi kamu sendiri.{" "}
            </p>
            <Link className="btn acid" href="/new-arrivals">
              {" "}
              SHOP THE NEW DROP <span> ↗ </span>
            </Link>
            <div className="hero-bottom">
              {" "}
              DESIGNED FOR YOUR EVERYDAY, ANY WAY.{" "}
            </div>
          </div>
          <div
            className="hero-art"
            aria-label="Ilustrasi kaos After Hours dan Good Noise"
          >
            <img
              className="hero-shirt"
              src="/images/tee-night.png"
              alt="Kaos After Hours"
              width="480"
              height="540"
              fetchPriority="high"
            />
            <img
              className="hero-shirt second"
              src="/images/tee-cream.png"
              alt="Kaos Good Noise"
              width="480"
              height="540"
            />
            <div className="sticker">
              {" "}
              NEW DROP <b> VOL. 01 </b> GOOD ENERGY ONLY{" "}
            </div>
            <span className="art-caption">
              {" "}
              AFTER HOURS / GOOD NOISE — ORIGINAL GRAPHICS{" "}
            </span>
          </div>
        </div>
      </section>
      <div className="ticker">
        <div className="ticker-inner">
          <span> WEAR YOUR OWN FREQUENCY </span>
          <i> ✳ </i>
          <span> GOOD CLOTHES. GOOD ENERGY. </span>
          <i> ✳ </i>
          <span> NOT MADE TO BLEND IN </span>
          <i> ✳ </i>
          <span> WEAR YOUR OWN FREQUENCY </span>
        </div>
      </div>
      <section className="section container">
        <div className="section-top">
          <div>
            <span className="eyebrow"> THE CURRENT ROTATION </span>
            <h2> MEET YOUR NEW FAVORITES. </h2>
          </div>
          <Link className="text-link" href="/shop">
            {" "}
            SHOP ALL ↗{" "}
          </Link>
        </div>
        <ProductGrid />
      </section>
      <section className="container content-bottom">
        <div className="section-top">
          <div>
            <span className="eyebrow"> FIND YOUR EVERYDAY </span>
            <h2> PICK YOUR LANE. </h2>
          </div>
        </div>
        <div className="category-grid">
          <Link className="category-card" href="/tees">
            <img src="/images/tee-cream.png" alt="" loading="lazy" />
            <h3> GRAPHIC TEES </h3>
            <span> ↗ </span>
          </Link>
          <Link className="category-card" href="/hoodies">
            <img src="/images/hoodie-black.png" alt="" loading="lazy" />
            <h3> HOODIES </h3>
            <span> ↗ </span>
          </Link>
          <Link className="category-card" href="/accessories">
            <img src="/images/tote.png" alt="" loading="lazy" />
            <h3> THE EXTRAS </h3>
            <span> ↗ </span>
          </Link>
        </div>
      </section>
      <section className="container content-bottom">
        <div className="manifesto">
          <div>
            <span className="eyebrow"> A NOTE FROM OFFBEAT </span>
            <h2>
              {" "}
              LESS FITTING IN. <br /> MORE BEING YOU.{" "}
            </h2>
          </div>
          <div>
            <p>
              {" "}
              Kami percaya pakaian terbaik adalah yang bikin kamu merasa jadi
              diri sendiri. Grafis yang punya cerita, potongan yang nyaman, dan
              sedikit energi yang berbeda.{" "}
            </p>
            <Link className="text-link" href="/about">
              {" "}
              MEET THE LABEL ↗{" "}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
