"use client";
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main id="main" className="container section">
      <h1>ADA GANGGUAN.</h1>
      <p>Halaman belum berhasil dimuat.</p>
      <button className="btn acid" onClick={reset}>
        Coba lagi
      </button>
    </main>
  );
}
