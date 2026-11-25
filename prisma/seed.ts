import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Seed bervariasi: stok penuh, sebagian, dan kosong (0); beberapa kategori.
const data = [
  { judul: "Laskar Pelangi", penulis: "Andrea Hirata", kategori: "Novel", tahun: 2005, stokTotal: 5, stokTersedia: 3, deskripsi: "Kisah sepuluh anak Belitung yang berjuang mendapatkan pendidikan di sekolah sederhana." },
  { judul: "Bumi Manusia", penulis: "Pramoedya Ananta Toer", kategori: "Novel", tahun: 1980, stokTotal: 2, stokTersedia: 0, deskripsi: "Kisah Minke, pribumi terpelajar, di tengah pergolakan masa kolonial Hindia Belanda." },
  { judul: "Fisika Dasar", penulis: "David Halliday", kategori: "Sains", tahun: 2010, stokTotal: 2, stokTersedia: 2, deskripsi: "Buku pengantar fisika: mekanika, gelombang, listrik, dan magnet." },
  { judul: "Sejarah Indonesia Modern", penulis: "M.C. Ricklefs", kategori: "Sejarah", tahun: 2008, stokTotal: 4, stokTersedia: 1, deskripsi: "Ulasan sejarah Indonesia sejak abad ke-13 hingga era modern." },
  { judul: "Matematika Kelas XI", penulis: "Tim Kemdikbud", kategori: "Pelajaran", tahun: 2021, stokTotal: 10, stokTersedia: 10, deskripsi: "Buku pelajaran matematika wajib untuk siswa kelas XI." },
  { judul: "Kamus Besar Bahasa Indonesia", penulis: "Badan Bahasa", kategori: "Referensi", tahun: 2016, stokTotal: 3, stokTersedia: 0, deskripsi: "Kamus acuan resmi bahasa Indonesia." },
  { judul: "Negeri 5 Menara", penulis: "Ahmad Fuadi", kategori: "Novel", tahun: 2009, stokTotal: 6, stokTersedia: 4, deskripsi: "Enam santri dari berbagai daerah mengejar mimpi dengan mantra man jadda wajada." },
  { judul: "Kimia Organik", penulis: "Fessenden", kategori: "Sains", tahun: null, stokTotal: 3, stokTersedia: 2, deskripsi: "Dasar-dasar kimia organik untuk pelajar dan mahasiswa." },
];

async function main() {
  // Hanya mengisi jika tabel masih kosong, jadi aman dijalankan berulang.
  const jumlah = await prisma.buku.count();
  if (jumlah > 0) {
    console.log(`Seed dilewati: sudah ada ${jumlah} buku.`);
    return;
  }
  await prisma.buku.createMany({ data });
  console.log(`Seed selesai: ${data.length} buku ditambahkan.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());