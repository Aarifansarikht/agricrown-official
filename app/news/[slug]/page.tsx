
"use client"

import React, { use, useEffect } from 'react';
import { motion } from 'framer-motion';
import { newsItems } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default function NewsDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
     const { slug } = use(params);
   
  const news = newsItems.find(n => n.slug === slug);

  if (!news) {
    return notFound();
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white dark:bg-black min-h-screen pt-20 transition-colors duration-300"
    >
      {/* Hero Image */}
      <div className="w-full h-[50vh] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image src={news.image} alt={news.title} fill className="object-cover" priority />
        <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-16 container mx-auto">
           <Link href="/news" className="text-white/80 hover:text-primary transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-6">
             <ArrowLeft size={16} /> Back to News
           </Link>
           <span className="bg-primary text-white text-xs font-bold px-3 py-1 uppercase tracking-widest w-fit mb-4">{news.category}</span>
           <h1 className="text-4xl md:text-6xl font-heading font-bold text-white uppercase italic leading-tight max-w-4xl drop-shadow-xl">
             {news.title}
           </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
           {/* Main Content */}
           <div className="lg:w-2/3">
              <div className="flex items-center gap-6 mb-8 text-sm text-zinc-500 dark:text-zinc-400 border-b border-zinc-200 dark:border-zinc-800 pb-8">
                 <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span className="font-bold uppercase tracking-wider">{news.date}</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <User size={16} />
                    <span className="font-bold uppercase tracking-wider">{news.author}</span>
                 </div>
              </div>

              <div 
                className="prose prose-lg dark:prose-invert prose-headings:font-heading prose-headings:uppercase prose-headings:italic prose-a:text-primary hover:prose-a:text-primary/80 max-w-none text-zinc-800 dark:text-zinc-300"
                dangerouslySetInnerHTML={{ __html: news.content }} 
              />
              
              <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
                 <span className="font-bold uppercase italic text-black dark:text-white">Share this article</span>
                 <div className="flex gap-4">
                    <Button variant="outline" size="icon" className="border-zinc-300 dark:border-zinc-700 text-black dark:text-white">
                       <Share2 size={18} />
                    </Button>
                 </div>
              </div>
           </div>

           {/* Sidebar */}
           <div className="lg:w-1/3 space-y-8">
              <div className="bg-zinc-50 dark:bg-zinc-900 p-8 border border-zinc-200 dark:border-zinc-800">
                 <h3 className="text-xl font-heading font-bold uppercase italic mb-6 text-black dark:text-white">Related News</h3>
                 <div className="space-y-6">
                    {newsItems.filter(n => n.id !== news.id).map(item => (
                       <Link href={`/news/${item.slug}`} key={item.id} className="block group">
                          <span className="text-xs font-bold text-primary uppercase tracking-wider mb-1 block">{item.category}</span>
                          <h4 className="text-lg font-heading font-bold text-black dark:text-white uppercase leading-tight group-hover:text-primary transition-colors">
                             {item.title}
                          </h4>
                       </Link>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </div>
    </motion.div>
  );
}
