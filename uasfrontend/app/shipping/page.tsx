import Link from "next/link";
export const metadata = { title: "Informasi Pengiriman" };
export default function Page() {
  return (
    <main id="main">
      <div className="container content-bottom">
        <div className="page-head">
          <div className="breadcrumb">
            <Link href="/"> Home </Link> / From Our World To Yours.{" "}
          </div>
          <span className="eyebrow"> SHIPPING GUIDE </span>
          <h1> FROM OUR WORLD TO YOURS. </h1>
          <p>
            {" "}
            Panduan estimasi dan ongkos pengiriman dalam konsep toko
            OFFBEAT.{" "}
          </p>
        </div>
        <div className="notice">
          {" "}
          Seluruh tarif dan estimasi berikut adalah data simulasi proyek. Tidak
          ada integrasi kurir atau pengiriman nyata.{" "}
        </div>
        <div className="info-grid">
          <article className="panel">
            <span className="eyebrow"> TAKE IT EASY </span>
            <h2> REGULER. </h2>
            <p>
              {" "}
              Rp18.000 per pesanan <br /> Estimasi 3–5 hari kerja. <br /> Cocok
              untuk belanja tanpa buru-buru.{" "}
            </p>
          </article>
          <article className="panel">
            <span className="eyebrow"> CAN'T WAIT </span>
            <h2> EKSPRES. </h2>
            <p>
              {" "}
              Rp30.000 per pesanan <br /> Estimasi 1–2 hari kerja. <br /> Biaya
              tetap, tanpa promo gratis ongkir.{" "}
            </p>
          </article>
          <article className="panel" style={{ background: "var(--acid)" }}>
            <span className="eyebrow"> A LITTLE EXTRA FROM US </span>
            <h2> FREE DELIVERY. </h2>
            <p>
              {" "}
              Gratis ongkir reguler untuk subtotal minimal Rp500.000. Otomatis
              dihitung saat checkout.{" "}
            </p>
          </article>
        </div>
        <article className="article">
          <h2> HOW IT WORKS. </h2>
          <ol>
            <li> Pilih produk dan tambahkan ke keranjang. </li>
            <li>
              {" "}
              Isi alamat contoh dan pilih reguler atau ekspres di checkout.{" "}
            </li>
            <li> Periksa total ongkir yang diperbarui otomatis. </li>
            <li>
              {" "}
              Buat pesanan demo dan lihat ringkasannya pada detail pesanan.{" "}
            </li>
          </ol>
          <h2> SEBELUM CHECKOUT. </h2>
          <p>
            {" "}
            Pastikan kode pos terdiri dari lima digit dan nomor telepon memakai
            format yang sesuai. Dalam toko sebenarnya, alamat yang lengkap
            membantu mencegah keterlambatan.{" "}
          </p>
          <p>
            <Link className="text-link" href="/faq">
              {" "}
              Pertanyaan lain? Baca FAQ ↗{" "}
            </Link>
          </p>
        </article>
      </div>
    </main>
  );
}