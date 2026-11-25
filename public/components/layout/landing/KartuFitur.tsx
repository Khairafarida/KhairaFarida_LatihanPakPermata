type KartuFiturProps = {
  ikon: string;
  judul: string;
  deskripsi: string;
};

export default function KartuFitur({ ikon, judul, deskripsi }: KartuFiturProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-5">
      <h3 className="mb-1 font-semibold">
        {ikon} {judul}
      </h3>
      <p className="text-sm text-gray-600">{deskripsi}</p>
    </div>
  );
}