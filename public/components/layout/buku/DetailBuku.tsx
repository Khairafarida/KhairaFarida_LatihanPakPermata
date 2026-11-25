import BadgeStok from "./BadgeStok";

type DetailBukuProps = {
  buku: {
    judul: string;
    penulis: string;
    kategori: string;
    tahun: number | null;
    stokTersedia: number;
    stokTotal: number;
    deskripsi: string | null;
  };
};

export default function DetailBuku({ buku }: DetailBukuProps) {
  return (
    <div className="grid gap-6 rounded-lg border border-gray-200 bg-white p-6 sm:grid-cols-[200px_1fr]">
      <div className="flex min-h-40 items-center justify-center rounded-lg bg-gray-200 text-sm text-gray-500 sm:min-h-64">
        Sampul
      </div>
      <div>
        <h1 className="mb-3 text-2xl font-bold">{buku.judul}</h1>
        <p className="my-1 text-sm">Penulis: {buku.penulis}</p>
        <p className="my-1 text-sm">
          Kategori: {buku.kategori}
          {buku.tahun ? ` · Tahun: ${buku.tahun}` : ""}
        </p>
        <p className="my-1 text-sm">
          Stok: <BadgeStok tersedia={buku.stokTersedia} total={buku.stokTotal} variant="detail" />
        </p>
        <p className="mt-4 text-gray-700">
          {buku.deskripsi || "Belum ada deskripsi untuk buku ini."}
        </p>
      </div>
    </div>
  );
}