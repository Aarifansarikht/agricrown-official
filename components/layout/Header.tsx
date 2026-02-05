"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon } from "lucide-react";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  /* Mount + Scroll detection */
  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* HEADER */}
      <header
  className={cn(
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 backdrop-blur-md",
    pathname === "/"
      ? scrolled
        ? "bg-black/90 shadow-sm"
        : "bg-transparent"
      : "bg-black shadow-sm",
  )}
>

        <div className="container mx-auto h-full px-4 lg:px-8">
          <div className="flex h-full items-center justify-between">
            {/* LOGO */}
            <Link href="/" className="flex items-center shrink-0">
              <div className="relative h-10 sm:h-12 lg:h-14 w-auto">
                <Image
                  src="/logo.png"
                  alt="AgriCrown Logo"
                  width={220}
                  height={80}
                  priority
                  sizes="(max-width: 640px) 160px, (max-width: 1024px) 190px, 220px"
                  className="h-full w-auto object-contain"
                />
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks
                .filter((l) => l.label !== "Contact")
                .map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-xs font-bold tracking-widest uppercase italic relative transition-colors hover:text-primary",
                      pathname === link.href ? "text-primary" : "text-gray-300",
                    )}
                  >
                    {link.label}
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 h-0.5 w-full bg-primary scale-x-0 transition-transform origin-left",
                        pathname === link.href && "scale-x-100",
                      )}
                    />
                  </Link>
                ))}

              {/* THEME TOGGLE */}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 rounded-full hover:bg-zinc-800"
                >
                  {theme === "dark" ? (
                    <Sun size={20} className="text-white" />
                  ) : (
                    <Moon size={20} className="text-white dark:text-dark" />
                  )}
                </button>
              )}

              <Link href="/contact">
                <Button
                  size="sm"
                  className="bg-primary text-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black font-bold italic px-6"
                >
                  ENQUIRY NOW
                </Button>
              </Link>
            </nav>

            {/* MOBILE ACTIONS */}
            <div className="flex items-center gap-3 lg:hidden">
              {mounted && (
                <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2">
                  {theme === "dark" ? (
                    <Sun size={22} className="text-white" />
                  ) : (
                    <Moon size={22} className="text-white" />
                  )}
                </button>
              )}

              <button onClick={() => setIsOpen((prev) => !prev)} >
                {isOpen ? <X size={30} className="dark:text-white " /> : <Menu size={30}  className="text-white "/>}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden bg-white dark:bg-zinc-950 pt-20"
          >
            <nav className="flex flex-col items-center gap-10 py-12">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-3xl font-heading font-bold uppercase italic transition-colors",
                    pathname === link.href ? "text-primary" : "text-black dark:text-white",
                  )}
                >
                  {link.label}
                </Link>
              ))}

              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button className="mt-6 h-14 px-10 bg-primary text-black text-lg font-bold italic">ENQUIRY NOW</Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
