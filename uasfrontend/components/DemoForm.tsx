"use client";
import { useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { useStore } from "./StoreProvider";
export default function DemoForm({
  kind,
  children,
  className,
}: {
  kind: string;
  children: ReactNode;
  className?: string;
}) {
  const store = useStore();
  const router = useRouter();
  const [status, setStatus] = useState("");
  return (
    <form
      className={className}
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        const value = (key: string) => String(data.get(key) || "").trim();
        if (kind === "newsletter") {
          setStatus(
            "Terima kasih! Pendaftaran newsletter demo berhasil. Tidak ada email yang dikirim.",
          );
          form.reset();
        }
        if (kind === "contact") {
          if (!value("name") || !value("message")) {
            setStatus("Nama dan pesan tidak boleh hanya berisi spasi.");
            return;
          }
          setStatus(
            `Terima kasih, ${value("name")}. Pesan demo tentang "${value("topic")}" berhasil divalidasi. Tidak ada pesan yang dikirim ke pihak lain.`,
          );
          form.reset();
        }
        if (kind === "register") {
          if (!store.ready) return;
          if (!value("name")) return setStatus("Masukkan nama yang valid.");
          if (
            await store.account("register", {
              name: value("name"),
              email: value("email").toLowerCase(),
            })
          )
            router.push("/account");
        }
        if (kind === "login") {
          if (!store.ready) return;
          if (
            await store.account("login", {
              email: value("email").toLowerCase(),
            })
          )
            router.push("/account");
        }
      }}
    >
      <fieldset
        className="demo-form-fields"
        disabled={
          store.busy ||
          ((kind === "register" || kind === "login") && !store.ready)
        }
      >
        {children}
      </fieldset>
      <p className="form-status" role="status">
        {status}
      </p>
    </form>
  );
}