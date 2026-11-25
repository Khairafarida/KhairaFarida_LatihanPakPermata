import Link from "next/link";
import FormCari from "@/components/layout/buku/FormCari";
import TabelBuku from "@/components/layout/buku/TabelBuku";
import { getDaftarBuku } from "@/lib/buku";

export const dynamic = "force-dynamic";

export default async function DaftarBukuPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; kategori?: string }>;
}) {
  const { q = "", kategori = "" } = await searchParams;
  const daftar = await getDaftarBuku({ q, kategori });

  return (
    <div className="mx-auto max-w-4xl p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h1 className="text-xl font-bold">Daftar buku</h1>
        <Link
          href="/buku/baru"
          className="rounded bg-gray-900 px-4 py-2 text-sm text-white hover:bg-gray-700"
        >
          + Tambah buku
        </Link>
      </div>

      <FormCari q={q} kategori={kategori} />
      <div className="mt-4">
        <TabelBuku daftar={daftar} />
      </div>
    </div>
  );
}
