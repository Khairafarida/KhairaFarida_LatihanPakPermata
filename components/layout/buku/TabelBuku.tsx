import Link from "next/link";
import BadgeStok from "./BadgeStok";

type Buku = {
  id: string | number;
  judul: string;
  penulis: string;
  kategori: string;
  stokTersedia: number;
  stokTotal: number;
};

type TabelBukuProps = {
  daftar: Buku[];
};

export default function TabelBuku({ daftar }: TabelBukuProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
      <table className="w-full min-w-[560px] text-left text-sm">
        <thead className="bg-gray-100 text-xs font-semibold">
          <tr>
            <th className="px-4 py-2.5">No</th>
            <th className="px-4 py-2.5">Judul</th>
            <th className="px-4 py-2.5">Penulis</th>
            <th className="px-4 py-2.5">Kategori</th>
            <th className="px-4 py-2.5">Stok</th>
            <th className="px-4 py-2.5">Aksi</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {daftar.length === 0 ? (
            <tr>
              <td colSpan={6} className="px-4 py-8 text-center text-gray-500">
                Tidak ada buku yang ditemukan.
              </td>
            </tr>
          ) : (
            daftar.map((b, i) => (
              <tr key={b.id}>
                <td className="px-4 py-2.5">{i + 1}</td>
                <td className="px-4 py-2.5">{b.judul}</td>
                <td className="px-4 py-2.5">{b.penulis}</td>
                <td className="px-4 py-2.5">{b.kategori}</td>
                <td className="px-4 py-2.5">
                  <BadgeStok tersedia={b.stokTersedia} total={b.stokTotal} />
                </td>
                <td className="px-4 py-2.5">
                  <Link
                    href={`/buku/${b.id}`}
                    className="rounded border border-gray-300 px-3 py-1 text-xs hover:bg-gray-100"
                  >
                    Detail
                  </Link>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}