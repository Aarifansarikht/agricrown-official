import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import ClientShell from "./ClientShell";


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata: Metadata = {
  title: "Agricrown | Premium Agricultural Machinery",
  description:
    "High-performance agricultural rotary tillers and machinery. Built for durability and efficiency.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${oswald.variable} font-sans antialiased bg-white dark:bg-black text-slate-900 dark:text-white`}
      >
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
