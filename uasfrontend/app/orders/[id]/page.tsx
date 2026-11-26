import Orders from "@/components/Orders";
export const metadata = { title: "Detail Pesanan" };
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <main id="main" className="container section">
      <Orders id={id} />
    </main>
  );
}