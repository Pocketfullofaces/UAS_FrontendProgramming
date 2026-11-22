"use client";
import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/lib/types";
import { money } from "@/lib/shop";
import { useStore } from "./StoreProvider";

export function ProductCard({ product: p }: { product: Product }) {
const { wishlist, toggle, ready, busy } = useStore();
const liked = wishlist.includes(p.id);
return (
    <article className="product-card">
    <Link className="product-image" href={"/product/" + p.id}>
        <img
        src={"/images/" + p.image + ".png"}
        alt={p.name + " warna " + p.color}
        loading="lazy"
        width={480}
        height={540}
        />
        <span className="product-badge">{p.tag}</span>
    </Link>
    <button
        className="heart"
        disabled={!ready || busy}
        onClick={() => toggle(p.id)}
        aria-label={`${liked ? "Hapus" : "Simpan"} ${p.name} ${liked ? "dari" : "ke"} wishlist`}
        aria-pressed={liked}
    >
        {liked ? "♥" : "♡"}
    </button>
    <div className="product-meta">
        <div>
        <h3>
            <Link href={"/product/" + p.id}>{p.name}</Link>
        </h3>
        <p>
            {p.label} · {p.color}
        </p>
        </div>
        <span className="price">{money(p.price)}</span>
    </div>
    <div className="swatches" aria-hidden="true">
        <i />
        <i />
        <i />
    </div>
    </article>
);
}
export function ProductGrid({ products }: { products?: Product[] }) {
const store = useStore();
const rows = products ?? store.products.slice(0, 4);
return (
    <div className="product-grid">
    {rows.length ? (
        rows.map((p) => <ProductCard key={p.id} product={p} />)
    ) : (
        <div className="empty">
        <h2>BELUM KETEMU.</h2>
        <p>Coba kata kunci atau kategori lainnya.</p>
        <Link className="btn outline" href="/shop">
            Lihat semua produk ↗
        </Link>
        </div>
    )}
    </div>
);
}
export default function Catalog({
mode = "shop",
query = "",
collection = "after-hours",
}: {
mode?: string;
query?: string;
collection?: string;
}) {
const store = useStore();
const [category, setCategory] = useState(
    ["tees", "hoodies", "accessories"].includes(mode) ? mode : "all",
);
  const [sort, setSort] = useState("featured");
  const [search, setSearch] = useState(query);
  const [selected, setSelected] = useState(
    ["after-hours", "good-noise", "off-duty"].includes(collection)
      ? collection
      : "after-hours",
  );
  let list = store.products.filter(
    (p) =>
      (category === "all" || p.category === category) &&
      (mode !== "new-arrivals" || p.fresh) &&
      (mode !== "wishlist" || store.wishlist.includes(p.id)) &&
      (mode !== "collections" || p.collection === selected) &&
      (mode !== "search" ||
        `${p.name} ${p.category} ${p.color} ${p.label}`
          .toLowerCase()
          .includes(search.trim().toLowerCase())),
  );
  if (sort === "low") list = list.sort((a, b) => a.price - b.price);
  if (sort === "high") list = list.sort((a, b) => b.price - a.price);
  if (sort === "az") list = list.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <>
      {mode === "search" && (
        <form
          className="search-form"
          onSubmit={(e) => {
            e.preventDefault();
            window.history.replaceState(
              null,
              "",
              "/search?q=" + encodeURIComponent(search),
            );
          }}
        >
          <label className="sr-only" htmlFor="search-input">
            Cari produk
          </label>
          <input
            id="search-input"
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari produk, kategori, atau warna…"
          />
          <button className="btn">Cari ↗</button>
        </form>
      )}
      {mode === "collections" && (
        <>
          <div className="tabs">
            {["after-hours", "good-noise", "off-duty"].map((c) => (
              <button
                key={c}
                className="btn outline"
                aria-pressed={selected === c}
                onClick={() => setSelected(c)}
              >
                {c.replaceAll("-", " ").toUpperCase()}
              </button>
            ))}
          </div>
          <h2 style={{ margin: "24px 0" }}>
            {selected.replaceAll("-", " ").toUpperCase()}
          </h2>
        </>
      )}
      <div className="toolbar">
        <p role="status">
          {mode === "wishlist" && !store.ready
            ? "Memuat wishlist…"
            : `${list.length} produk${mode === "wishlist" ? " disimpan" : mode === "new-arrivals" ? " baru" : ""}`}
        </p>
        <div className="filter-group">
          {mode === "shop" && (
            <>
              <label className="sr-only" htmlFor="category">
                Kategori produk
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="all">Semua kategori</option>
                <option value="tees">Kaos</option>
                <option value="hoodies">Hoodie</option>
                <option value="accessories">Aksesori</option>
              </select>
            </>
          )}
          <label className="sr-only" htmlFor="sort">
            Urutan produk
          </label>
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="featured">Pilihan kami</option>
            <option value="low">Harga terendah</option>
            <option value="high">Harga tertinggi</option>
            <option value="az">Nama A-Z</option>
          </select>
        </div>
      </div>
      <ProductGrid products={list} />
    </>
  );
}
