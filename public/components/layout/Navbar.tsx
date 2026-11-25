"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { href: "/", label: "Beranda" },
  { href: "/buku", label: "Daftar Buku" },
  { href: "/buku/baru", label: "Tambah Buku" },
];

export default function Navbar() {
  const pathname = usePathname();

  function aktif(href: string) {
    if (href === "/") return pathname === "/";
    if (href === "/buku") return pathname.startsWith("/buku") && pathname !== "/buku/baru";
    return pathname === href;
  }

  return (
    <header className="sticky top-0 z-10 border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-2 px-4 py-3">
        <Link href="/" className="text-lg font-bold">
          📚 PustakaKu
        </Link>
        <nav className="flex flex-wrap gap-1">
          {menu.map((m) => (
            <Link
              key={m.href}
              href={m.href}
              className={`rounded px-3 py-1.5 text-sm ${
                aktif(m.href) ? "bg-gray-900 text-white" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {m.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}