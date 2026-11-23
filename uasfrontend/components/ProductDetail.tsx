"use client";
import Link from "next/link";
import { money } from "@/lib/shop";
import { useStore } from "./StoreProvider";
import { ProductGrid } from "./Catalog";
import type { Product } from "@/lib/types";
export default function ProductDetail({ product: p }: { product: Product }) {
  const { add, toggle, wishlist, ready, busy, products } = useStore();
  const liked = wishlist.includes(p.id);
  return (
    <main id="main" className="container content-bottom">
      <div className="page-head">
        <div className="breadcrumb">
          <Link href="/">Home</Link> / <Link href="/shop">Shop</Link> / {p.name}
        </div>
      </div>
      <div className="product-detail">
        <div className="product-detail-image">
          <img
            src={"/images/" + p.image + ".png"}
            alt={p.name + " warna " + p.color}
            width={480}
            height={540}
          />
        </div>
        <div className="product-info">
          <span className="eyebrow">{p.tag} / KOLEKSI OFFBEAT</span>
          <h1>{p.name.toUpperCase()}</h1>
          <div className="detail-price">{money(p.price)}</div>
          <p>{p.description}</p>
          <span className="detail-label">WARNA: {p.color}</span>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              add(p.id, String(data.get("size")), Number(data.get("qty")));
            }}
          >
            <fieldset className="sizes">
              <legend className="detail-label">PILIH UKURAN</legend>
              {p.sizes.map((size, i) => (
                <label className="size-option" key={size}>
                  <input
                    type="radio"
                    name="size"
                    value={size}
                    defaultChecked={i === 0}
                  />
                  <span>{size}</span>
                </label>
              ))}
            </fieldset>
            <Link className="text-link" href="/size-guide">
              Lihat panduan ukuran ↗
            </Link>
            <div className="buy-row">
              <label className="sr-only" htmlFor="qty">
                Jumlah
              </label>
              <input
                id="qty"
                name="qty"
                type="number"
                min={1}
                max={10}
                defaultValue={1}
                required
              />
              <button className="btn acid" disabled={!ready || busy}>
                TAMBAH KE KERANJANG
              </button>
            </div>
          </form>
          <button
            className="btn outline full"
            disabled={!ready || busy}
            onClick={() => toggle(p.id)}
            aria-pressed={liked}
          >
            {liked ? "Sudah disimpan ♥" : "Simpan ke wishlist ♡"}
          </button>
          <div className="detail-notes">
            <p>
              {p.material}
              <br />
              Ilustrasi produk merupakan mockup desain.
              <br />
              Gratis ongkir reguler untuk belanja mulai Rp500.000.
            </p>
          </div>
          <div className="accordions">
            <details>
              <summary>Detail produk dan perawatan</summary>
              <p>
                Cuci dengan air dingin, balik pakaian sebelum mencuci, hindari
                pemutih, dan jangan setrika langsung di atas grafis.{" "}
                {p.category === "accessories"
                  ? "Bersihkan noda aksesori dengan kain lembap."
                  : "Potongan santai; cek ukuran dalam sentimeter sebelum memilih."}
              </p>
            </details>
            <details>
              <summary>Pengiriman &amp; penukaran</summary>
              <p>
                Pengiriman reguler sekitar 3–5 hari kerja. Baca{" "}
                <Link href="/shipping">panduan pengiriman</Link> dan{" "}
                <Link href="/faq">syarat penukaran</Link>. Seluruh transaksi di
                proyek ini adalah simulasi.
              </p>
            </details>
          </div>
        </div>
      </div>
      <section className="section">
        <h2>YOU MIGHT ALSO LIKE.</h2>
        <ProductGrid
          products={products.filter((i) => i.id !== p.id).slice(0, 4)}
        />
      </section>
    </main>
  );
}
