"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { money, totals } from "@/lib/shop";
import { useStore } from "./StoreProvider";
import { EmptyBag, Summary } from "./Cart";
export default function Checkout() {
  const store = useStore();
  const router = useRouter();
  const [shipping, setShipping] = useState<"regular" | "express">("regular");
  const submitting = useRef(false);
  const requestKey = useRef<string | null>(null);
  if (!store.ready) return <p role="status">Memuat checkout…</p>;
  if (!store.cart.length) return <EmptyBag />;
  return (
    <>
      <div className="steps">
        <Link href="/cart">01 BAG</Link>
        <b>02 CHECKOUT</b>
        <span>03 CONFIRMATION</span>
      </div>
      <div className="cart-layout">
        <form
          className="stack"
          onSubmit={async (e) => {
            e.preventDefault();
            if (submitting.current || !store.cart.length) return;
            const data = new FormData(e.currentTarget);
            const field = (key: string) => String(data.get(key) || "").trim();
            if (
              !field("name") ||
              field("address").length < 10 ||
              !field("city")
            ) {
              store.notify(
                "Nama dan kota wajib diisi; alamat minimal 10 karakter.",
              );
              return;
            }
            submitting.current = true;
            requestKey.current ??= crypto.randomUUID();
            const orderId = await store.checkout({
              requestKey: requestKey.current,
              consent: data.get("consent") === "on",
              customer: {
                name: field("name"),
                email: field("email"),
                phone: field("phone"),
                address: field("address"),
                city: field("city"),
                postal: field("postal"),
              },
              shipping,
              payment: field("payment"),
            });
            if (!orderId) {
              submitting.current = false;
              return;
            }
            router.push("/order-success?id=" + encodeURIComponent(orderId));
          }}
        >
          <div className="panel">
            <h2>01. YOUR DETAILS</h2>
            <div className="form-grid">
              {[
                { name: "name", label: "Nama penerima", auto: "name", max: 60 },
                {
                  name: "email",
                  label: "Email",
                  auto: "email",
                  max: 120,
                  type: "email",
                },
                {
                  name: "phone",
                  label: "Nomor telepon contoh",
                  auto: "tel",
                  type: "tel",
                  pattern: "[0-9+() \\-]{8,20}",
                  max: 20,
                },
                {
                  name: "address",
                  label: "Alamat lengkap",
                  auto: "street-address",
                  max: 200,
                  min: 10,
                },
                {
                  name: "city",
                  label: "Kota / kabupaten",
                  auto: "address-level2",
                  max: 60,
                },
                {
                  name: "postal",
                  label: "Kode pos",
                  auto: "postal-code",
                  pattern: "[0-9]{5}",
                  max: 5,
                },
              ].map((f) => (
                <div className="field" key={f.name}>
                  <label htmlFor={f.name}>{f.label}</label>
                  <input
                    className="form-control"
                    id={f.name}
                    name={f.name}
                    type={f.type || "text"}
                    autoComplete={f.auto}
                    maxLength={f.max}
                    minLength={f.min}
                    pattern={f.pattern}
                    required
                    defaultValue={
                      f.name === "name"
                        ? store.profile?.name
                        : f.name === "email"
                          ? store.profile?.email
                          : ""
                    }
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="panel">
            <h2>02. DELIVERY</h2>
            <div className="field">
              <label htmlFor="shipping">Metode pengiriman</label>
              <select
                className="form-select"
                id="shipping"
                name="shipping"
                value={shipping}
                onChange={(e) =>
                  setShipping(e.target.value as "regular" | "express")
                }
              >
                <option value="regular">
                  Reguler · 3–5 hari kerja · Rp18.000*
                </option>
                <option value="express">
                  Ekspres · 1–2 hari kerja · Rp30.000
                </option>
              </select>
            </div>
            <p className="form-note">
              *Reguler gratis untuk subtotal mulai Rp500.000. Estimasi merupakan
              skenario demo.
            </p>
          </div>
          <div className="panel">
            <h2>03. PAYMENT</h2>
            <fieldset style={{ border: 0, padding: 0, margin: 0 }}>
              <legend className="form-note">Pilih metode simulasi</legend>
              <div className="stack">
                {["Transfer bank", "E-wallet"].map((p, i) => (
                  <label className="radio-card" key={p}>
                    <input
                      type="radio"
                      name="payment"
                      value={p}
                      defaultChecked={i === 0}
                    />
                    {p} (demo)
                  </label>
                ))}
              </div>
            </fieldset>
            <p className="form-note">
              Tidak ada uang ditagih atau nomor pembayaran sungguhan.
            </p>
            <label className="check">
              <input type="checkbox" required name="consent" />
              <span>
                Saya memahami ini simulasi dan data contoh pesanan akan disimpan
                untuk sesi saya.
              </span>
            </label>
          </div>
          <button className="btn acid full" disabled={store.busy}>
            {store.busy ? "MENYIMPAN PESANAN…" : "BUAT PESANAN DEMO"}
          </button>
        </form>
        <aside className="panel summary">
          <h2>ORDER SUMMARY.</h2>
          <div aria-live="polite">
            {store.cart.map((i) => {
              const p = store.products.find((p) => p.id === i.id);
              if (!p) return null;
              return (
                <div className="summary-line" key={i.id + i.size}>
                  <span>
                    {p.name}
                    <br />
                    <small>
                      {i.size} · {i.qty}
                    </small>
                  </span>
                  <span>{money(p.price * i.qty)}</span>
                </div>
              );
            })}
            <Summary {...totals(store.cart, shipping, store.products)} />
          </div>
          <Link href="/cart" className="text-link">
            Ubah isi bag ↗
          </Link>
        </aside>
      </div>
    </>
  );
}