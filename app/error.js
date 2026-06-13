"use client"

import Link from "next/link"

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[radial-gradient(circle at 20%_20%,#67e8f966,transparent),linear-gradient(135deg,#17140f,#31291f,#0d9488)]">
      <div className="max-w-2xl w-full text-center bg-white/90 dark:bg-black/70 rounded-2xl p-10 shadow-2xl border border-border">
        <div className="text-6xl">😵‍💫</div>
        <h2 className="mt-4 text-3xl font-extrabold">Something went wrong</h2>
        <p className="mt-2 text-muted-foreground">Sorry — an unexpected error occurred. You can try again or return home.</p>
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={() => reset?.()}
            className="px-5 py-2 bg-primary text-primary-foreground rounded-md font-bold"
          >
            Try again
          </button>
          <Link href="/" className="px-5 py-2 border rounded-md">Home</Link>
        </div>
        {error?.message ? (
          <pre className="mt-4 text-xs text-left text-muted-foreground break-words">{String(error.message)}</pre>
        ) : null}
      </div>
    </div>
  )
}
