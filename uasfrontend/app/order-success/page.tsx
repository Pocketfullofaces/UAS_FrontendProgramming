import Orders from "@/components/Orders";
export const metadata = { title: "Pesanan Berhasil" };
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const { id } = await searchParams;
  return (
    <main id="main" className="container section">
      <Orders id={id || ""} success />
    </main>
  );
}