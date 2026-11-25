"use client";

import Link from "next/link";
import { useActionState } from "react";
import { KATEGORI } from "@/lib/kategori";
import { tambahBukuAction, type FormState } from "@/app/buku/baru/actions";

const awal: FormState = { errors: {}, values: {} };

const inputClass = "w-full rounded border bg-white px-3 py-2 text-sm";
const border = (ada?: string) => (ada ? "border-red-600" : "border-gray-300");

function Galat({ pesan }: { pesan?: string }) {
  return pesan ? <p className="mt-1 text-xs text-red-700">{pesan}</p> : null;
}

export default function FormBuku() {
  const [state, formAction, pending] = useActionState(tambahBukuAction, awal);
  const { errors, values } = state;

  return (
    <form
      action={formAction}
      noValidate
      className="mx-auto max-w-xl space-y-4 rounded-lg border border-gray-200 bg-white p-6"
    >
      <h1 className="text-xl font-bold">Tambah buku baru</h1>

      <div>
        <label htmlFor="judul" className="mb-1 block text-sm font-semibold">
          Judul *
        </label>
        <input
          id="judul"
          name="judul"
          placeholder="Judul buku"
          defaultValue={values.judul}
          className={`${inputClass} ${border(errors.judul)}`}
        />
        <Galat pesan={errors.judul} />
      </div>

      <div>
        <label htmlFor="penulis" className="mb-1 block text-sm font-semibold">
          Penulis *
        </label>
        <input
          id="penulis"
          name="penulis"
          placeholder="Nama penulis"
          defaultValue={values.penulis}
          className={`${inputClass} ${border(errors.penulis)}`}
        />
        <Galat pesan={errors.penulis} />
      </div>

      <div>
        <label htmlFor="kategori" className="mb-1 block text-sm font-semibold">
          Kategori *
        </label>
        <select
          id="kategori"
          name="kategori"
          defaultValue={values.kategori ?? ""}
          className={`${inputClass} ${border(errors.kategori)}`}
        >
          <option value="">Pilih kategori</option>
          {KATEGORI.map((k: string) => (
            <option key={k} value={k}>
              {k}
            </option>
          ))}
        </select>
        <Galat pesan={errors.kategori} />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="tahun" className="mb-1 block text-sm font-semibold">
            Tahun terbit
          </label>
          <input
            id="tahun"
            name="tahun"
            type="number"
            placeholder="2005"
            defaultValue={values.tahun}
            className={`${inputClass} ${border(errors.tahun)}`}
          />
          <Galat pesan={errors.tahun} />
        </div>
        <div>
          <label htmlFor="stok" className="mb-1 block text-sm font-semibold">
            Jumlah stok *
          </label>
          <input
            id="stok"
            name="stok"
            type="number"
            min={0}
            placeholder="5"
            defaultValue={values.stok}
            className={`${inputClass} ${border(errors.stok)}`}
          />
          <Galat pesan={errors.stok} />
        </div>
      </div>

      <div>
        <label htmlFor="deskripsi" className="mb-1 block text-sm font-semibold">
          Deskripsi
        </label>
        <textarea
          id="deskripsi"
          name="deskripsi"
          placeholder="Deskripsi buku"
          defaultValue={values.deskripsi}
          className={`${inputClass} ${border()} min-h-20 resize-y`}
        />
      </div>

      <div className="flex justify-between pt-2">
        <Link href="/buku" className="rounded border border-gray-300 px-4 py-2 text-sm hover:bg-gray-100">
          Batal
        </Link>
        <button
          type="submit"
          disabled={pending}
          className="rounded bg-gray-900 px-4 py-2 text-sm text-white hover:bg-gray-700 disabled:opacity-60"
        >
          {pending ? "Menyimpan…" : "Simpan"}
        </button>
      </div>
    </form>
  );
}
