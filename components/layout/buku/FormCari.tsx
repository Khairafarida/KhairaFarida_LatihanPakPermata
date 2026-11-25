const KATEGORI = ["Fiksi", "Nonfiksi", "Pendidikan", "Sejarah", "Teknologi"];

type FormCariProps = {
  q: string;
  kategori: string;
};

// Form GET biasa: submit mengubah query string, halaman server me-render ulang hasilnya.
export default function FormCari({ q, kategori }: FormCariProps) {
  return (
    <form action="/buku" method="get" className="mb-4 flex flex-wrap gap-2">
      <input
        type="search"
        name="q"
        defaultValue={q}
        placeholder="Cari judul atau penulis"
        className="min-w-[200px] flex-1 rounded border border-gray-300 bg-white px-3 py-2 text-sm"
      />
      <select
        name="kategori"
        defaultValue={kategori}
        aria-label="Filter kategori"
        className="rounded border border-gray-300 bg-white px-3 py-2 text-sm"
      >
        <option value="">Semua kategori</option>
        {KATEGORI.map((k) => (
          <option key={k} value={k}>
            {k}
          </option>
        ))}
      </select>
      <button className="rounded bg-gray-900 px-4 py-2 text-sm text-white hover:bg-gray-700">
        Cari
      </button>
    </form>
  );
}