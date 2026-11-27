import Link from "next/link";
export const metadata = { title: "Informasi Pembayaran" };
export default function Page() {
  return (
    <main id="main">
      <div className="container content-bottom">
        <div className="page-head">
          <div className="breadcrumb">
            <Link href="/"> Home </Link> / Keep It Simple.{" "}
          </div>
          <span className="eyebrow"> PAYMENT GUIDE </span>
          <h1> KEEP IT SIMPLE. </h1>
          <p> Kenali pilihan pembayaran yang digunakan pada demo checkout. </p>
        </div>
        <div className="notice">
          {" "}
          Jangan melakukan transfer. Website ini tidak menyediakan rekening
          tujuan, memproses uang, atau meminta data kartu dan PIN.{" "}
        </div>
        <div className="two-col">
          <article className="panel">
            <span className="eyebrow"> OPTION 01 </span>
            <h2> TRANSFER BANK. </h2>
            <p>
              {" "}
              Pilih “Transfer bank” di checkout untuk menyimpan preferensi
              metode pembayaran pada pesanan demo.{" "}
            </p>
            <p>
              {" "}
              Status akan menjadi “Dikonfirmasi (demo)” setelah formulir
              berhasil divalidasi. Tidak diperlukan bukti transfer.{" "}
            </p>
          </article>
          <article className="panel">
            <span className="eyebrow"> OPTION 02 </span>
            <h2> E-WALLET. </h2>
            <p>
              {" "}
              Pilih “E-wallet” untuk mencoba skenario pembayaran dompet digital
              dalam alur belanja.{" "}
            </p>
            <p>
              {" "}
              Demo tidak membuka aplikasi pembayaran, membuat QRIS, atau
              mengurangi saldo.{" "}
            </p>
          </article>
        </div>
        <div className="section article">
          <h2> APA YANG MASUK KE TOTAL? </h2>
          <p>
            {" "}
            Total dihitung dari harga setiap produk dikali jumlahnya, kemudian
            ditambah ongkir. Harga adalah harga final dalam skenario proyek dan
            tidak ada biaya admin tambahan.{" "}
          </p>
          <div className="panel" style={{ margin: "25px 0" }}>
            <h3> Contoh perhitungan </h3>
            <p>
              {" "}
              After Hours Tee Rp189.000 × 2 = Rp378.000 <br /> Ongkir reguler =
              Rp18.000 <br />
              <strong> Total demo = Rp396.000 </strong>
            </p>
          </div>
          <Link href="/cart" className="btn acid">
            {" "}
            CEK BAG KAMU ↗{" "}
          </Link>
        </div>
      </div>
    </main>
  );
}