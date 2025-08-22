// app/error.tsx
"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error); }, [error]);
  return (
    <main className="mx-auto max-w-xl px-6 py-16 text-center">
      <h1 className="text-3xl font-bold">Something went wrong</h1>
      <p className="mt-2 text-gray-600">Please try again or contact us.</p>
      <div className="mt-6 flex justify-center gap-3">
        <button onClick={() => reset()} className="rounded-xl border px-4 py-2 hover:bg-gray-50">
          Try again
        </button>
        <Link href="/contact" className="rounded-xl border px-4 py-2 hover:bg-gray-50">
          Contact us
        </Link>
      </div>
    </main>
  );
}

