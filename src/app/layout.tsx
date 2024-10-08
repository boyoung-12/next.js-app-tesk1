import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-red-500 h-16 flex justify-around items-center">
          <Link href={"/"} className="text-lg font-semibold text-white">
            홈
          </Link>
          <Link
            href={"/champions"}
            className="text-lg font-semibold text-white"
          >
            챔피언 목록
          </Link>
          <Link href={"/items"} className="text-lg font-semibold text-white">
            아이템 목록
          </Link>
          <Link href={"/rotation"} className="text-lg font-semibold text-white">
            챔피언 로테이션
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
