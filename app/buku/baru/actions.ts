"use server";

export type FormState = {
  errors: {
    judul?: string;
    penulis?: string;
    kategori?: string;
    tahun?: string;
    stok?: string;
    deskripsi?: string;
  };
  values: {
    judul?: string;
    penulis?: string;
    kategori?: string;
    tahun?: string;
    stok?: string;
    deskripsi?: string;
  };
};

export async function tambahBukuAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const judul = formData.get("judul")?.toString().trim() ?? "";
  const penulis = formData.get("penulis")?.toString().trim() ?? "";
  const kategori = formData.get("kategori")?.toString().trim() ?? "";
  const tahunStr = formData.get("tahun")?.toString().trim() ?? "";
  const stokStr = formData.get("stok")?.toString().trim() ?? "";
  const deskripsi = formData.get("deskripsi")?.toString().trim() ?? "";

  const errors: FormState["errors"] = {};

  if (!judul) errors.judul = "Judul wajib diisi";
  if (!penulis) errors.penulis = "Penulis wajib diisi";
  if (!kategori) errors.kategori = "Kategori wajib dipilih";

  if (!stokStr) {
    errors.stok = "Jumlah stok wajib diisi";
  } else if (isNaN(Number(stokStr)) || Number(stokStr) < 0) {
    errors.stok = "Jumlah stok harus berupa angka valid (minimal 0)";
  }

  if (tahunStr && (isNaN(Number(tahunStr)) || Number(tahunStr) < 1000)) {
    errors.tahun = "Tahun terbit tidak valid";
  }

  const values: FormState["values"] = {
    judul,
    penulis,
    kategori,
    tahun: tahunStr,
    stok: stokStr,
    deskripsi,
  };

  if (Object.keys(errors).length > 0) {
    return { errors, values };
  }

  // TODO: Tambahkan penyimpanan ke database bila sudah tersedia
  return { errors: {}, values: {} };
}
