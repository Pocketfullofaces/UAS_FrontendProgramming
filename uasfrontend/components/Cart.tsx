"use client";
import Link from "next/link";
import { money, totals } from "@/lib/shop";
import { useStore } from "./StoreProvider";
export function Summary({
  subtotal,
  delivery,
  total,
}: {
  subtotal: number;
  delivery: number;
  total: number;
}) {
  return (
    <>
      <div className="summary-line">
        <span>Subtotal</span>
        <span>{money(subtotal)}</span>
      </div>
      <div className="summary-line">
        <span>Pengiriman</span>
        <span>{delivery ? money(delivery) : "Gratis"}</span>
      </div>
      <div className="summary-line total">
        <span>Total</span>
        <span>{money(total)}</span>
      </div>
    </>
  );
}
export function EmptyBag() {
  return (
    <div className="empty">
      <h2>BAG KAMU MASIH KOSONG.</h2>
      <p>Waktunya menemukan sesuatu yang terasa kamu banget.</p>
      <Link className="btn acid" href="/shop">
        Explore the good stuff ↗
      </Link>
    </div>
  );
}
export default function Cart() {
  const { cart, save, ready, busy, products } = useStore();
  if (!ready) return <p role="status">Memuat keranjang…</p>;
  if (!cart.length) return <EmptyBag />;
  return (
    <div className="cart-layout">
      <div>
        {cart.map((item, index) => {
          const p = products.find((p) => p.id === item.id);
          if (!p) return null;
          return (
            <article className="cart-row" key={item.id + item.size}>
              <Link href={"/product/" + p.id}>
                <img src={"/images/" + p.image + ".png"} alt={p.name} />
              </Link>
              <div>
                <h3>
                  <Link href={"/product/" + p.id}>{p.name}</Link>
                </h3>
                <p>
                  {p.color} / {item.size}
                </p>
                <div className="quantity">
                  <button
                    aria-label={"Kurangi " + p.name}
                    disabled={busy || item.qty === 1}
                    onClick={() =>
                      save(
                        "cart",
                        cart.map((r, i) =>
                          i === index ? { ...r, qty: r.qty - 1 } : r,
                        ),
                      )
                    }
                  >
                    −
                  </button>
                  <span>{item.qty}</span>
                  <button
                    aria-label={"Tambah " + p.name}
                    disabled={busy || item.qty === 10}
                    onClick={() =>
                      save(
                        "cart",
                        cart.map((r, i) =>
                          i === index ? { ...r, qty: r.qty + 1 } : r,
                        ),
                      )
                    }
                  >
                    +
                  </button>
                </div>
              </div>
              <div>
                <span className="price">{money(p.price * item.qty)}</span>
                <button
                  className="remove"
                  disabled={busy}
                  aria-label={"Hapus " + p.name}
                  onClick={() =>
                    save(
                      "cart",
                      cart.filter((_, i) => i !== index),
                    )
                  }
                >
                  Hapus
                </button>
              </div>
            </article>
          );
        })}
        <p className="form-note">
          Maksimal 10 item untuk setiap kombinasi produk dan ukuran.
        </p>
        <Link className="text-link" href="/shop">
          ← Lanjut belanja
        </Link>
      </div>
      <aside className="panel summary">
        <h2>YOUR BAG, SUMMED UP.</h2>
        <Summary {...totals(cart, "regular", products)} />
        <p className="form-note">
          Ongkir menggunakan pengiriman reguler. Pilihan ekspres tersedia saat
          checkout.
        </p>
        <Link className="btn acid full" href="/checkout">
          LANJUT CHECKOUT ↗
        </Link>
        <p className="form-note">
          Simulasi belanja. Tidak ada pembayaran sungguhan.
        </p>
      </aside>
    </div>
  );
}