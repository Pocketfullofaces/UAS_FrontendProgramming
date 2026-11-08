import Link from "next/link";
import DemoForm from "@/components/DemoForm";
export const metadata = { title: "Masuk Demo" };
export default function Page() {
  return (
    <main id="main">
      <div className="container content-bottom">
        <div className="narrow">
          <div className="page-head">
            <div className="breadcrumb">
              <Link href="/"> Home </Link> / Welcome Back.{" "}
            </div>
            <span className="eyebrow"> YOUR OFFBEAT ACCOUNT </span>
            <h1> WELCOME BACK. </h1>
            <p> Masuk ke profil demo yang sudah dibuat di browser ini. </p>
          </div>
          <div className="panel">
            <div className="notice">
              {" "}
              Demo tanpa kata sandi. Nama dan email disimpan secara lokal; tidak
              ada autentikasi server.{" "}
            </div>
            <DemoForm kind="login" className="stack">
              <div className="field">
                <label htmlFor="email"> Email profil demo </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength={120}
                  autoComplete="email"
                  placeholder="contoh@kampus.test"
                />
              </div>
              <button className="btn acid full" type="submit">
                {" "}
                MASUK KE DEMO ↗{" "}
              </button>
            </DemoForm>
            <div className="link-row">
              <span> Belum punya profil? </span>
              <Link href="/register"> Buat profil ↗ </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
