import Link from "next/link";

export default function BukuNotFound() {
  return (
    <div className="py-16 text-center">
      <h1 className="mb-2 text-2xl font-bold">Buku tidak ditemukan</h1>
      <p className="mb-6 text-gray-600">Buku dengan ID tersebut tidak ada di database.</p>
      <Link href="/buku" className="rounded bg-gray-900 px-4 py-2 text-sm text-white hover:bg-gray-700">
        Kembali ke daftar
      </Link>
    </div>
  );
}