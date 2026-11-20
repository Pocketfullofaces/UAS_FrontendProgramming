import Link from "next/link";
import DemoForm from "./DemoForm";
export default function Footer() {
  return (
    <>
      <section className="newsletter">
        <div className="container newsletter-inner">
          <div>
            <span className="eyebrow">MASUK KE FREKUENSI KAMI</span>
            <h2>GOOD THINGS. NO SPAM.</h2>
            <p>Kabar koleksi baru dan cerita di baliknya.</p>
          </div>
          <DemoForm kind="newsletter" className="newsletter-form">
            <label htmlFor="newsletter-email" className="sr-only">
              Alamat email newsletter demo
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Alamat email kamu"
              maxLength={120}
              autoComplete="email"
            />
            <button
              className="btn"
              type="submit"
              aria-label="Daftar newsletter demo"
            >
              I'M IN ↗
            </button>
          </DemoForm>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link href="/" className="logo">
                OFFBEAT<sup>®</sup>
              </Link>
              <p>
                Wear your own frequency.
                <br />
                Streetwear untuk kamu yang punya cara sendiri.
              </p>
            </div>
            <div>
              <h3>THE GOOD STUFF</h3>
              <Link href="/shop">Semua produk</Link>
              <Link href="/tees">Graphic tees</Link>
              <Link href="/hoodies">Hoodies</Link>
              <Link href="/accessories">Accessories</Link>
              <Link href="/collections">Koleksi</Link>
            </div>
            <div>
              <h3>NEED A HAND?</h3>
              <Link href="/size-guide">Panduan ukuran</Link>
              <Link href="/shipping">Pengiriman</Link>
              <Link href="/payment">Pembayaran</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/contact">Hubungi kami</Link>
            </div>
            <div>
              <h3>OUR LITTLE WORLD</h3>
              <Link href="/about">Tentang OFFBEAT</Link>
              <Link href="/lookbook">Lookbook</Link>
              <Link href="/account">Akun saya</Link>
              <Link href="/orders">Pesanan saya</Link>
              <Link href="/wishlist">Wishlist</Link>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 OFFBEAT. A student-made independent label.</span>
            <span>Proyek kuliah · Transaksi &amp; akun merupakan simulasi</span>
            <span>MADE WITH GOOD ENERGY ✳</span>
          </div>
        </div>
      </footer>
    </>
  );
}
