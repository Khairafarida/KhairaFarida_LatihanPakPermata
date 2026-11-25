export default function Loading() {
  return (
    <div role="status" aria-label="Memuat detail buku" className="animate-pulse space-y-4">
      <div className="h-5 w-36 rounded bg-gray-200" />
      <div className="h-72 rounded bg-gray-200" />
    </div>
  );
}

