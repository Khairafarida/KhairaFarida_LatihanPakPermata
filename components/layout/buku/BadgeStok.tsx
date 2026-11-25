type BadgeStokProps = {
  tersedia: number;
  total: number;
  variant?: "daftar" | "detail"; // bawaan: daftar
};

export default function BadgeStok({ tersedia, total, variant = "daftar" }: BadgeStokProps) {
  const habis = tersedia === 0;

  if (variant === "detail") {
    return (
      <span
        className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${
          habis ? "bg-red-100 text-red-700" : "bg-green-100 text-green-800"
        }`}
      >
        {habis ? "Habis" : `${tersedia} dari ${total} tersedia`}
      </span>
    );
  }

  return (
    <span
      className={
        habis ? "rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-semibold text-red-700" : ""
      }
    >
      {tersedia}/{total}
    </span>
  );
}