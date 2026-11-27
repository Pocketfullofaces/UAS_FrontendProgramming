import Link from "next/link";
import Faq from "@/components/Faq";
export const metadata = { title: "FAQ" };
export default function Page() {
  return (
    <main id="main">
      <div className="container content-bottom">
        <div className="page-head">
          <div className="breadcrumb">
            <Link href="/">Home</Link> / Good Questions. Clear Answers.{" "}
          </div>
          <span className="eyebrow">FAQ / HELP DESK</span>
          <h1>GOOD QUESTIONS. CLEAR ANSWERS.</h1>
          <p>
            Semua yang perlu kamu tahu tentang produk, pesanan, dan cara kerja
            demo.
          </p>
        </div>

        <Faq
          items={[
            {
              question: "Apakah ini toko sungguhan?",
              answer:
                "OFFBEAT adalah proyek kuliah front-end. Seluruh produk dan transaksi adalah simulasi. Tidak ada pembayaran, email, atau pengiriman barang sungguhan.",
            },
            {
              question: "Bagaimana cara memesan?",
              answer:
                "Buka detail produk, pilih ukuran dan jumlah, tambahkan ke bag, lalu isi checkout dengan data contoh. Pesanan demo muncul di halaman Pesanan Saya.",
            },
            {
              question: "Bagaimana memilih ukuran yang pas?",
              answer:
                "Buka halaman Panduan Ukuran. Bandingkan ukuran dada, panjang badan, dan lengan dengan pakaian favoritmu. Kaos menggunakan potongan oversized.",
            },
            {
              question: "Berapa ongkos kirimnya?",
              answer:
                "Simulasi reguler Rp18.000 dan ekspres Rp30.000. Reguler gratis untuk subtotal minimal Rp500.000. Total diperbarui saat metode pengiriman dipilih.",
            },
            {
              question: "Apakah produk bisa ditukar?",
              answer:
                "Dalam konsep toko ini, penukaran ukuran diajukan maksimal 7 hari setelah barang diterima, dengan kondisi belum dipakai dan label utuh. Ini hanya kebijakan rancangan; proyek tidak memproses penukaran nyata.",
            },
            {
              question: "Apa metode pembayaran yang tersedia?",
              answer:
                "Checkout menyediakan pilihan transfer bank dan e-wallet sebagai simulasi. Kamu tidak perlu mentransfer uang atau memasukkan nomor rekening, PIN, maupun data kartu.",
            },
            {
              question: "Kenapa wishlist atau pesanan saya hilang?",
              answer:
                "Data tersimpan di server dan terhubung dengan cookie sesi browser selama 30 hari. Menghapus cookie, membuka mode privat, atau mengganti browser membuat sesi baru sehingga data sesi sebelumnya tidak terlihat.",
            },
            {
              question: "Apakah login menggunakan kata sandi?",
              answer:
                "Profil demo memakai nama dan email contoh tanpa kata sandi. Ini bukan sistem autentikasi produksi dan tidak cocok untuk data pribadi penting.",
            },
          ]}
        />
        <div className="panel" style={{ marginTop: "30px" }}>
          <h3>Belum menemukan jawaban?</h3>
          <p>Coba formulir bantuan kami untuk demonstrasi validasi pesan.</p>
          <Link
            href="/contact"
            className="text-link"
            style={{ display: "inline-block", marginTop: "15px" }}
          >
            Hubungi kami ↗
          </Link>
        </div>
      </div>
    </main>
  );
}
