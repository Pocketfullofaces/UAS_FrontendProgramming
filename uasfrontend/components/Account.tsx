"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useStore } from "./StoreProvider";
export function AccountNav() {
  const store = useStore();
  const router = useRouter();
  return (
    <nav className="account-nav" aria-label="Menu akun">
      <Link href="/account">Profil saya</Link>
      <Link href="/orders">Pesanan demo</Link>
      <Link href="/wishlist">Wishlist</Link>
      <button
        disabled={store.busy}
        onClick={async () => {
          if (await store.account("logout")) router.push("/login");
        }}
      >
        Keluar dari demo ↗
      </button>
    </nav>
  );
}
export default function Account() {
  const store = useStore();
  if (!store.ready) return <p role="status">Memuat profil…</p>;
  if (!store.profile || !store.session)
    return (
      <div className="empty">
        <h2>WELCOME TO YOUR CORNER.</h2>
        <p>Masuk ke profil demo untuk mengubah nama dan email kamu.</p>
        <Link className="btn acid" href="/login">
          Masuk ke demo ↗
        </Link>
        <Link className="btn outline" href="/register">
          Buat profil
        </Link>
      </div>
    );
  return (
    <div className="account-layout">
      <AccountNav />
      <div className="panel">
        <h2>HEY, {store.profile.name.toUpperCase()}.</h2>
        <p className="form-note">
          Profil demo ini terhubung dengan sesi browser kamu. Gunakan data
          contoh untuk demo kelas.
        </p>
        <form
          className="form-grid"
          onSubmit={async (e) => {
            e.preventDefault();
            const d = new FormData(e.currentTarget);
            const name = String(d.get("name")).trim();
            if (!name) return store.notify("Nama tidak boleh kosong.");
            if (
              await store.save("profile", {
                name,
                email: String(d.get("email")).trim().toLowerCase(),
              })
            )
              store.notify("Profil demo berhasil diperbarui.");
          }}
        >
          <div className="field">
            <label htmlFor="profile-name">Nama</label>
            <input
              className="form-control"
              id="profile-name"
              name="name"
              required
              maxLength={60}
              defaultValue={store.profile.name}
            />
          </div>
          <div className="field">
            <label htmlFor="profile-email">Email</label>
            <input
              className="form-control"
              id="profile-email"
              name="email"
              type="email"
              required
              maxLength={120}
              defaultValue={store.profile.email}
            />
          </div>
          <div className="field wide">
            <button className="btn" disabled={store.busy}>
              Simpan perubahan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}