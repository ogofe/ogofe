"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100">
          <header className="fixed top-0 right-0 p-4 z-50">
            <DropdownMenu open={open} onOpenChange={setOpen}>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/" className={router.pathname === "/" ? "bg-purple-100" : ""}>
                    Home
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/about" className={router.pathname === "/about" ? "bg-purple-100" : ""}>
                    About
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/skills" className={router.pathname === "/skills" ? "bg-purple-100" : ""}>
                    Skills
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/blog" className={router.pathname === "/blog" ? "bg-purple-100" : ""}>
                    Blog
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </header>

          <main>
            {/* <Component {...pageProps} /> */}
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
