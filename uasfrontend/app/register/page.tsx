import Link from "next/link";
import DemoForm from "@/components/DemoForm";
export const metadata = { title: "Daftar Profil Demo" };
export default function Page() {
  return (
    <main id="main">
      <div className="container content-bottom">
        <div className="narrow">
          <div className="page-head">
            <div className="breadcrumb">
              <Link href="/"> Home </Link> / Join The Frequency.{" "}
            </div>
            <span className="eyebrow"> CREATE A DEMO PROFILE </span>
            <h1> JOIN THE FREQUENCY. </h1>
            <p> Satu profil sederhana untuk mencoba pengalaman akun. </p>
          </div>
          <div className="panel">
            <div className="notice">
              {" "}
              Gunakan nama dan email contoh. Satu profil demo terhubung dengan
              sesi browser ini, tanpa kata sandi.{" "}
            </div>
            <DemoForm kind="register" className="stack">
              <div className="field">
                <label htmlFor="name"> Nama </label>
                <input
                  id="name"
                  className="form-control"
                  name="name"
                  type="text"
                  required
                  maxLength={60}
                  autoComplete="name"
                  placeholder="Nama contoh"
                />
              </div>
              <div className="field">
                <label htmlFor="email"> Email contoh </label>
                <input
                  id="email"
                  className="form-control"
                  name="email"
                  type="email"
                  required
                  maxLength={120}
                  autoComplete="email"
                  placeholder="contoh@kampus.test"
                />
              </div>
              <label className="check">
                <input type="checkbox" required />
                <span>
                  {" "}
                  Saya memahami bahwa profil ini adalah simulasi dan terhubung
                  dengan sesi browser ini.{" "}
                </span>
              </label>
              <button className="btn acid full" type="submit">
                {" "}
                BUAT PROFIL DEMO ↗{" "}
              </button>
            </DemoForm>
            <div className="link-row">
              <span> Sudah punya profil? </span>
              <Link href="/login"> Masuk ↗ </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}