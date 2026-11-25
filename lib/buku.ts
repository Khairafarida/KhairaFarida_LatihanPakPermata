export type Buku = {
  id: string;
  judul: string;
  penulis: string;
  kategori: string;
  tahun?: number | null;
  stokTersedia: number;
  stokTotal: number;
  deskripsi?: string | null;
};

// Data dummy awal
export const daftarBukuDummy: Buku[] = [
  {
    id: "1",
    judul: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    kategori: "Fiksi",
    tahun: 2005,
    stokTersedia: 4,
    stokTotal: 5,
    deskripsi: "Kisah kehidupan 10 anak di Belitung.",
  },
  {
    id: "2",
    judul: "Bumi Manusia",
    penulis: "Pramoedya Ananta Toer",
    kategori: "Sejarah",
    tahun: 1980,
    stokTersedia: 2,
    stokTotal: 3,
    deskripsi: "Roman kehidupan era kolonial.",
  },
  {
    id: "3",
    judul: "Clean Code",
    penulis: "Robert C. Martin",
    kategori: "Teknologi",
    tahun: 2008,
    stokTersedia: 5,
    stokTotal: 5,
    deskripsi: "A Handbook of Agile Software Craftsmanship.",
  },
];

export async function getDaftarBuku(filter?: {
  q?: string;
  kategori?: string;
}): Promise<Buku[]> {
  const { q = "", kategori = "" } = filter ?? {};
  const query = q.toLowerCase().trim();

  return daftarBukuDummy.filter((buku) => {
    const cocokJudul = buku.judul.toLowerCase().includes(query);
    const cocokPenulis = buku.penulis.toLowerCase().includes(query);
    const cocokQ = !query || cocokJudul || cocokPenulis;
    const cocokKategori = !kategori || buku.kategori.toLowerCase() === kategori.toLowerCase();

    return cocokQ && cocokKategori;
  });
}
