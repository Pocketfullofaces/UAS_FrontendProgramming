import Link from "next/link";
import DemoForm from "@/components/DemoForm";
export const metadata = { title: "Hubungi Kami" };
export default function Page() {
    return (
        <main id="main">
        <div className="container content-bottom">
            <div className="page-head">
            <div className="breadcrumb">
                <Link href="/">Home</Link> / Let'S Talk.{" "}
            </div>
            <span className="eyebrow">CONTACT / SAY HELLO</span>
            <h1>LET'S TALK.</h1>
            <p>Punya pertanyaan atau ide? Kami siap mendengar.</p>
            </div>
            <div className="two-col">
            <div className="panel">
                <h2>DROP US A LINE.</h2>
                <DemoForm kind="contact" className="form-grid">
                <div className="field">
                    <label htmlFor="name">Nama kamu</label>
                    <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    maxLength={60}
                    autoComplete="name"
                    />
                </div>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={120}
                    autoComplete="email"
                    />
                </div>
                <div className="field wide">
                    <label htmlFor="topic">Topik</label>
                    <select id="topic" name="topic" required>
                    <option value="">Pilih topik</option>
                    <option>Produk dan ukuran</option>
                    <option>Pesanan demo</option>
                    <option>Kolaborasi</option>
                    <option>Pertanyaan lainnya</option>
                    </select>
                </div>
                <div className="field wide">
                    <label htmlFor="message">Pesan</label>
                    <textarea
                    id="message"
                    name="message"
                    required
                    minLength={10}
                    maxLength={1500}
                    placeholder="Ceritakan sedikit lebih detail…"
                    ></textarea>
                </div>
                <div className="field wide">
                    <button className="btn acid" type="submit">
                    KIRIM PESAN DEMO ↗
                    </button>
                </div>
                </DemoForm>
            </div>
            </div>
        </div>
        </main>
    );
}
