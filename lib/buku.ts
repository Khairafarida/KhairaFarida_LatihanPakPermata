import { prisma } from "@/lib/prisma";

export type Buku = {
  id: number;
  judul: string;
  penulis: string;
  kategori: string;
  tahun: number | null;
  stokTersedia: number;
  stokTotal: number;
  deskripsi: string | null;
};

export async function getDaftarBuku(filter?: {
  q?: string;
  kategori?: string;
}) {
  const { q = "", kategori = "" } = filter ?? {};

  return prisma.buku.findMany({
    where: {
      AND: [
        q
          ? {
              OR: [
                { judul: { contains: q } },
                { penulis: { contains: q } },
              ],
            }
          : {},
        kategori ? { kategori } : {},
      ],
    },
    orderBy: { id: "asc" },
  });
}

export async function getBukuById(id: number) {
  return prisma.buku.findUnique({
    where: { id },
  });
}

export async function tambahBuku(data: {
  judul: string;
  penulis: string;
  kategori: string;
  tahun: number | null;
  stokTotal: number;
  deskripsi?: string;
}) {
  return prisma.buku.create({
    data: {
      judul: data.judul,
      penulis: data.penulis,
      kategori: data.kategori,
      tahun: data.tahun,
      stokTotal: data.stokTotal,
      stokTersedia: data.stokTotal,
      deskripsi: data.deskripsi ?? "",
    },
  });
}
