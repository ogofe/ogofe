import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Joel | Fullstack Software Developer",
  description: "A creative portfolio for Joel, a fullstack software developer building crisp web experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
