"use client";

import { motion } from "framer-motion";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { newsItems } from "@/lib/data";

export default function NewsDetailClient({ news }: { news: any }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white dark:bg-black min-h-screen pt-16 md:pt-20 transition-colors duration-300"
    >
      {/* ================= HERO ================= */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <Image
          src={news.image}
          alt={news.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex flex-col justify-end container mx-auto px-4 md:px-16 pb-6 md:pb-16 text-white">
          <Link
            href="/news"
            className="flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/80 hover:text-primary mb-4"
          >
            <ArrowLeft size={14} /> Back to News
          </Link>

          <span className="bg-primary text-white text-[10px] md:text-xs font-bold px-3 py-1 uppercase tracking-widest w-fit mb-4">
            {news.category}
          </span>

          <h1 className="text-2xl md:text-6xl font-heading font-bold uppercase italic leading-tight max-w-4xl drop-shadow-xl">
            {news.title}
          </h1>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="container mx-auto px-4 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-10 md:gap-16">
          {/* Main */}
          <article className="lg:w-2/3">
            <div className="flex gap-6 text-xs md:text-sm text-zinc-500 dark:text-zinc-400 border-b border-zinc-200 dark:border-zinc-800 pb-6 mb-8">
              <div className="flex items-center gap-2">
                <Calendar size={14} />
                <span className="font-bold uppercase tracking-wider">
                  {news.date}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <User size={14} />
                <span className="font-bold uppercase tracking-wider">
                  {news.author}
                </span>
              </div>
            </div>

            <div
              className="prose prose-sm md:prose-lg dark:prose-invert max-w-none prose-headings:font-heading prose-headings:uppercase prose-headings:italic prose-a:text-primary"
              dangerouslySetInnerHTML={{ __html: news.content }}
            />

            <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
              <span className="font-bold uppercase italic text-sm md:text-base">
                Share this article
              </span>
              <Button
                variant="outline"
                size="icon"
                className="border-zinc-300 dark:border-zinc-700 w-11 h-11"
              >
                <Share2 size={18} />
              </Button>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-1/3">
            <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 md:p-8">
              <h3 className="text-lg md:text-xl font-heading font-bold uppercase italic mb-6">
                Related News
              </h3>

              <div className="space-y-5">
                {newsItems
                  .filter((n) => n.id !== news.id)
                  .map((item) => (
                    <Link
                      key={item.id}
                      href={`/news/${item.slug}`}
                      className="block group"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                        {item.category}
                      </span>
                      <h4 className="text-base md:text-lg font-heading font-bold uppercase leading-tight group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                    </Link>
                  ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </motion.div>
  );
}
