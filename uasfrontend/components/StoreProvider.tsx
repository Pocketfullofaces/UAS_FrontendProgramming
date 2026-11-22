"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
  useCallback,
  type ReactNode,
} from "react";
import type { ShopState, Product, CheckoutInput } from "@/lib/types";

const initial: ShopState = {
  cart: [],
  wishlist: [],
  profile: null,
  session: false,
  orders: [],
};
interface Store extends ShopState {
  products: Product[];
  ready: boolean;
  busy: boolean;
  save: <K extends "cart" | "wishlist" | "profile">(
    key: K,
    value: ShopState[K],
  ) => Promise<boolean>;
  account: (
    action: "register" | "login" | "logout",
    value?: { name?: string; email?: string },
  ) => Promise<boolean>;
  checkout: (data: CheckoutInput) => Promise<string | null>;
  notify: (message: string) => void;
  add: (id: string, size: string, qty: number) => Promise<void>;
  toggle: (id: string) => Promise<void>;
}
const Context = createContext<Store | null>(null);
export function StoreProvider({
  children,
  products,
}: {
  children: ReactNode;
  products: Product[];
}) {
  const [state, setState] = useState<ShopState>(initial);
  const [ready, setReady] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const inFlight = useRef(false);
  const revision = useRef(0);
  const loading = useRef<Promise<void> | null>(null);
  const load = useCallback(() => {
    if (loading.current) return loading.current;
    loading.current = (async () => {
      const startedAt = revision.current;
      try {
        const response = await fetch("/api/store", { cache: "no-store" });
        const body = await response.json();
        if (!response.ok) throw new Error(body.error);
        if (startedAt !== revision.current) return;
        setState(body.state);
        setReady(true);
        setError("");
      } catch {
        setError(
          "Data belanja belum berhasil dimuat. Periksa koneksi lalu coba lagi.",
        );
      } finally {
        loading.current = null;
      }
    })();
    return loading.current;
  }, []);
  useEffect(() => {
    void load();
    const refresh = () => {
      if (!inFlight.current) void load();
    };
    window.addEventListener("focus", refresh);
    return () => window.removeEventListener("focus", refresh);
  }, [load]);
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => setMessage(""), 4000);
    return () => clearTimeout(timer);
  }, [message]);
  async function mutate(payload: unknown, url = "/api/store") {
    if (!ready || inFlight.current) return null;
    inFlight.current = true;
    revision.current += 1;
    setBusy(true);
    try {
      const response = await fetch(url, {
        method: url === "/api/store" ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = await response.json();
      if (!response.ok)
        throw new Error(body.error || "Data belum berhasil disimpan.");
      setState(body.state as ShopState);
      setError("");
      return body as { state: ShopState; orderId?: string };
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Data belum berhasil disimpan. Coba lagi.",
      );
      return null;
    } finally {
      inFlight.current = false;
      setBusy(false);
    }
  }
  async function save<K extends "cart" | "wishlist" | "profile">(
    key: K,
    value: ShopState[K],
  ) {
    return !!(await mutate({ action: key, value }));
  }
  async function account(
    action: "register" | "login" | "logout",
    value?: { name?: string; email?: string },
  ) {
    return !!(await mutate(
      action === "register"
        ? { action, value }
        : action === "login"
          ? { action, email: value?.email }
          : { action },
    ));
  }
  async function add(id: string, size: string, qty: number) {
    if (await mutate({ action: "add", id, size, qty }))
      setMessage("Ditambahkan ke keranjang.");
  }
  async function toggle(id: string) {
    const liked = state.wishlist.includes(id);
    if (
      await save(
        "wishlist",
        liked
          ? state.wishlist.filter((i) => i !== id)
          : [...state.wishlist, id],
      )
    )
      setMessage(
        liked
          ? "Produk dihapus dari wishlist."
          : "Produk disimpan ke wishlist.",
      );
  }
  async function checkout(data: CheckoutInput) {
    return (await mutate(data, "/api/orders"))?.orderId || null;
  }
  return (
    <Context.Provider
      value={{
        ...state,
        products,
        ready,
        busy,
        save,
        account,
        checkout,
        notify: setMessage,
        add,
        toggle,
      }}
    >
      {error && (
        <div className="container py-3">
          <div
            className="alert alert-warning d-flex flex-wrap align-items-center gap-3"
            role="alert"
          >
            <span>{error}</span>
            <button className="btn outline" onClick={() => void load()}>
              Coba lagi
            </button>
          </div>
        </div>
      )}
      {children}
      <div
        className="shop-toast"
        role="status"
        aria-live="polite"
        hidden={!message}
      >
        {message}
      </div>
    </Context.Provider>
  );
}
export function useStore() {
  const store = useContext(Context);
  if (!store) throw new Error("StoreProvider diperlukan");
  return store;
}