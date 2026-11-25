"use server";

import { redirect } from "next/navigation";
import { tambahBuku } from "@/lib/buku";
import { KATEGORI } from "@/lib/kategori";

export type FormState = {
  errors: Partial<Record<"judul" | "penulis" | "kategori" | "tahun" | "stok", string>>;
  values: Record<string, string>;
};

export async function tambahBukuAction(_prev: FormState, formData: FormData): Promise<FormState> {
  const ambil = (k: string) => String(formData.get(k) ?? "").trim();

  const values = {
    judul: ambil("judul"),
    penulis: ambil("penulis"),
    kategori: ambil("kategori"),
    tahun: ambil("tahun"),
    stok: ambil("stok"),
    deskripsi: ambil("deskripsi"),
  };

  const errors: FormState["errors"] = {};

  if (!values.judul) errors.judul = "Judul wajib diisi";
  if (!values.penulis) errors.penulis = "Penulis wajib diisi";
  if (!values.kategori) errors.kategori = "Kategori wajib dipilih";
  else if (!(KATEGORI as readonly string[]).includes(values.kategori))
    errors.kategori = "Kategori tidak valid";

  let tahun: number | null = null;
  if (values.tahun) {
    const t = Number(values.tahun);
    const maks = new Date().getFullYear() + 1;
    if (!Number.isInteger(t) || t < 1000 || t > maks) errors.tahun = `Tahun harus antara 1000 dan ${maks}`;
    else tahun = t;
  }

  let stokTotal = 0;
  if (!values.stok) errors.stok = "Jumlah stok wajib diisi";
  else {
    const s = Number(values.stok);
    if (!Number.isInteger(s) || s < 0) errors.stok = "Jumlah stok harus bilangan bulat ≥ 0";
    else stokTotal = s;
  }

  if (Object.keys(errors).length > 0) return { errors, values };

  const buku = await tambahBuku({
    judul: values.judul,
    penulis: values.penulis,
    kategori: values.kategori,
    tahun,
    stokTotal,
    deskripsi: values.deskripsi,
  });

  redirect(`/buku/${buku.id}`);
}
