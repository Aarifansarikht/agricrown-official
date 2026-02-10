"use client";

import dynamic from "next/dynamic";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/lib/language";
import Footer from "@/components/layout/Footer";


export default function ClientShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <div className="flex flex-col min-h-screen">
          {/* <Header /> */}
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}
