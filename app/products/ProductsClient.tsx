"use client";

import { motion } from "framer-motion";

export default function ProductsClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-zinc-50 dark:bg-black min-h-screen pt-16 md:pt-20 transition-colors duration-300"
    >
      {children}
    </motion.div>
  );
}
