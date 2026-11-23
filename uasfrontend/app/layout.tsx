import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { StoreProvider } from "@/components/StoreProvider";
import { getProducts } from "@/lib/server-products";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
export const metadata: Metadata = {
  title: {
    default: "OFFBEAT — Wear your own frequency",
    template: "%s — OFFBEAT",
  },
  description:
    "Independent streetwear. Proyek kuliah Next.js dan TypeScript; seluruh transaksi merupakan simulasi.",
  icons: { icon: "/images/favicon.png" },
};
export const viewport: Viewport = { themeColor: "#363d2b" };
export const dynamic = "force-dynamic";
export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const products = await getProducts();
  return (
    <html lang="id">
      <body>
        <StoreProvider products={products}>
          <a href="#main" className="skip">
            Langsung ke konten
          </a>
          <Navbar />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
