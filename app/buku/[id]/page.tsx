import Link from "next/link";
import { notFound } from "next/navigation";
import DetailBuku from "@/components/layout/buku/DetailBuku";
import { getBukuById } from "@/lib/buku";

export const dynamic = "force-dynamic";

export default async function DetailBukuPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const angka = Number(id);
  if (!Number.isInteger(angka) || angka < 1) notFound();

  const buku = await getBukuById(angka);
  if (!buku) notFound();

  return (
    <div className="mx-auto max-w-4xl p-6">
      <Link href="/buku" className="mb-4 inline-block text-sm text-gray-600 hover:text-gray-900">
        ‹ Kembali ke daftar
      </Link>
      <DetailBuku buku={buku} />
    </div>
  );
}
