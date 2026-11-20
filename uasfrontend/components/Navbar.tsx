"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useStore } from "./StoreProvider";
function Icon({ name }: { name: string }) {
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      {name === "search" ? (
        <>
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="m16 16 5 5" />
        </>
      ) : name === "bag" ? (
        <>
          <path d="M5 7h14l1 14H4L5 7Z" />
          <path d="M8 8V6a4 4 0 0 1 8 0v2" />
        </>
      ) : name === "user" ? (
        <>
          <circle cx="12" cy="7" r="4" />
          <path d="M4 22v-3a8 8 0 0 1 16 0v3" />
        </>
      ) : (
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
      )}
    </svg>
  );
}
export default function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const { cart } = useStore();
  useEffect(() => {
    function close(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return (
    <>
      <div className="announcement">
        INDEPENDENT MINDS. EVERYDAY UNIFORMS.
        <span>GRATIS ONGKIR MULAI 500K ↗</span>
      </div>
      <header className="header">
        <nav className="nav" aria-label="Navigasi utama">
          <Link className="logo" href="/" aria-label="OFFBEAT beranda">
            OFFBEAT<sup>®</sup>
          </Link>
          <button
            className="menu-toggle"
            aria-label="Buka menu"
            aria-expanded={open}
            aria-controls="main-nav"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
          <div className={"nav-links" + (open ? " open" : "")} id="main-nav">
            {[
              ["/shop", "SHOP ALL"],
              ["/new-arrivals", "NEW DROP ↗"],
              ["/collections", "COLLECTIONS"],
              ["/lookbook", "LOOKBOOK"],
            ].map(([url, label]) => (
              <Link
                key={url}
                href={url}
                aria-current={path === url ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
          <div className="nav-actions">
            <Link className="icon-link" href="/search" aria-label="Cari produk">
              <Icon name="search" />
            </Link>
            <Link
              className="icon-link account-link"
              href="/account"
              aria-label="Akun saya"
            >
              <Icon name="user" />
            </Link>
            <Link className="icon-link" href="/wishlist" aria-label="Wishlist">
              <Icon name="heart" />
            </Link>
            <Link className="icon-link" href="/cart" aria-label="Keranjang">
              <Icon name="bag" />
              <span className="action-label">BAG</span> (
              {cart.reduce((s, i) => s + i.qty, 0)})
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
