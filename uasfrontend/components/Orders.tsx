"use client";
import Link from "next/link";
import { money } from "@/lib/shop";
import { useStore } from "./StoreProvider";
import { AccountNav } from "./Account";
import { Summary } from "./Cart";
export default function Orders({
  id,
  success = false,
}: {
  id?: string;
  success?: boolean;
}) {
  const { ready, orders } = useStore();
  if (!ready) return <p role="status">Memuat pesanan…</p>;
  if (id === undefined && !success)
    return (
      <div className="account-layout">
        <AccountNav />
        <div>
          {orders.length ? (
            orders.map((order) => (
              <article
                className="panel"
                style={{ marginBottom: 20 }}
                key={order.id}
              >
                <div className="section-top">
                  <div>
                    <span className="eyebrow">
                      {new Date(order.date).toLocaleDateString("id-ID")}
                    </span>
                    <h3>{order.id}</h3>
                  </div>
                  <span className="status-pill">{order.status}</span>
                </div>
                <p>
                  {order.items.reduce((sum, i) => sum + i.qty, 0)} item ·{" "}
                  {money(order.total)}
                </p>
                <Link className="text-link" href={"/orders/" + order.id}>
                  Detail pesanan ↗
                </Link>
              </article>
            ))
          ) : (
            <div className="empty">
              <h2>YOUR STORY STARTS HERE.</h2>
              <p>Pesanan demo untuk sesi ini akan muncul setelah checkout.</p>
              <Link className="btn acid" href="/shop">
                Jelajahi produk ↗
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  const order = orders.find((o) => o.id === id);
  if (!order)
    return (
      <div className="empty">
        <h2>PESANAN TIDAK DITEMUKAN.</h2>
        <p>Pilih pesanan yang sudah dibuat pada sesi browser ini.</p>
        <Link href="/orders" className="btn">
          Lihat pesanan demo ↗
        </Link>
      </div>
    );
  if (success)
    return (
      <div className="narrow" style={{ textAlign: "center" }}>
        <div className="success-mark">✓</div>
        <span className="eyebrow">YOU’RE PART OF THE CLUB</span>
        <h1>
          GOOD CHOICE.
          <br />
          GREAT ENERGY.
        </h1>
        <p style={{ margin: "24px 0" }}>
          Pesanan demo <strong>{order.id}</strong> berhasil dibuat.
          <br />
          Terima kasih, {order.customer.name}!
        </p>
        <div className="panel">
          <Summary {...order} />
          <p className="form-note">
            Tidak ada uang ditagih, email dikirim, atau barang dikirimkan.
            Pesanan tersimpan dan dapat dibuka kembali pada sesi ini.
          </p>
        </div>
        <Link className="btn acid" href={"/orders/" + order.id}>
          LIHAT PESANAN ↗
        </Link>
        <Link className="btn outline" href="/shop">
          Lanjut belanja
        </Link>
      </div>
    );
  return (
    <>
      <div className="notice">
        Pesanan simulasi. Status ini tidak terhubung dengan kurir atau
        pembayaran sungguhan.
      </div>
      <div className="section-top">
        <div>
          <span className="eyebrow">
            {new Date(order.date).toLocaleDateString("id-ID")}
          </span>
          <h2>{order.id}</h2>
        </div>
        <span className="status-pill">{order.status}</span>
      </div>
      <div className="cart-layout">
        <div>
          <div className="panel">
            <h3>Item pesanan</h3>
            {order.items.map((i, n) => (
              <article className="cart-row" key={n}>
                <img src={"/images/" + i.image + ".png"} alt={i.name} />
                <div>
                  <h3>{i.name}</h3>
                  <p>
                    Ukuran {i.size} · {i.qty} item
                  </p>
                </div>
                <span className="price">{money(i.price * i.qty)}</span>
              </article>
            ))}
          </div>
          <ol className="timeline">
            <li>
              <strong>Pesanan demo dibuat</strong>
              <br />
              Data pesanan berhasil disimpan.
            </li>
            <li>
              <strong>Simulasi dikonfirmasi</strong>
              <br />
              Tidak ada tahap pengiriman nyata.
            </li>
          </ol>
        </div>
        <aside className="stack">
          <div className="panel">
            <h3>Alamat demo</h3>
            <p>
              {order.customer.name}
              <br />
              {order.customer.address}
              <br />
              {order.customer.city}, {order.customer.postal}
              <br />
              {order.customer.phone}
            </p>
          </div>
          <div className="panel">
            <h3>Ringkasan pembayaran</h3>
            <p>
              Metode: {order.payment} (demo)
              <br />
              Pengiriman: {order.shipping === "express" ? "Ekspres" : "Reguler"}
            </p>
            <Summary {...order} />
          </div>
        </aside>
      </div>
    </>
  );
}