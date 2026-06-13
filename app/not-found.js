import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[radial-gradient(circle at 20%_20%,#fce7f3,transparent),linear-gradient(135deg,#17140f,#31291f,#0d9488)]">
      <div className="max-w-2xl w-full text-center bg-white/95 dark:bg-black/75 rounded-2xl p-10 shadow-2xl border border-border">
        <div className="text-6xl">🔍</div>
        <h2 className="mt-4 text-3xl font-extrabold">Page not found</h2>
        <p className="mt-2 text-muted-foreground">We couldn't find the page you're looking for.</p>
        <div className="mt-6 flex justify-center gap-4">
          <Link href="/" className="px-5 py-2 bg-primary text-primary-foreground rounded-md font-bold">Take me home</Link>
        </div>
      </div>
    </div>
  )
}
