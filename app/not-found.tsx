import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-xl h-screen px-6 py-16 text-center">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="mt-2 text-gray-600">We couldn’t find what you’re looking for.</p>
      <Link href="/" className="mt-6 inline-block rounded-xl border px-4 py-2 hover:bg-gray-50">
        Go Home
      </Link>
    </main>
  );
}

