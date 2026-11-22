import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="container section empty">
      <span className="eyebrow">404 / LOST SIGNAL</span>
      <h1>HALAMAN TIDAK DITEMUKAN.</h1>
      <p>Yuk kembali menemukan frekuensi kamu.</p>
      <Link className="btn acid" href="/shop">
        Kembali ke katalog ↗
      </Link>
    </main>
  );
}
