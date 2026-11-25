export const KATEGORI = [
  "Fiksi",
  "Nonfiksi",
  "Pendidikan",
  "Sejarah",
  "Teknologi",
] as const;

export type Kategori = (typeof KATEGORI)[number];
