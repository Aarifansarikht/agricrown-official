
"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar } from 'lucide-react';
import { newsItems } from '@/lib/data';

export default function News() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-zinc-50 dark:bg-zinc-950 min-h-screen pt-16 md:pt-20 transition-colors duration-300"
    >
      {/* Header */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
             <Image 
               src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2000&auto=format&fit=crop" 
               alt="News"
               fill
               className="object-cover"
               priority
             />
             <div className="absolute inset-0 bg-black/60 z-10" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-20">
           <div className="max-w-4xl">
             <span className="bg-primary text-white text-[10px] md:text-xs font-bold px-2 py-1 md:px-3 md:py-1 uppercase tracking-widest inline-block mb-2 md:mb-4">Insights</span>
             <h1 className="text-4xl md:text-7xl font-heading font-bold text-white uppercase italic leading-none mb-4 md:mb-6 drop-shadow-2xl">
               Latest <br/> Updates
             </h1>
             <p className="text-sm md:text-xl text-gray-200 max-w-2xl leading-relaxed font-light border-l-4 border-primary pl-4 md:pl-6">
               Updates from the field, product announcements, and agricultural tips.
             </p>
           </div>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 py-12 md:py-24">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {newsItems.map((item, idx) => (
               <Link href={`/news/${item.slug}`} key={idx} className="block h-full">
                 <div className="bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 group hover:border-primary dark:hover:border-primary transition-colors duration-300 flex flex-col h-full shadow-sm hover:shadow-xl">
                    <div className="aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-900 relative">
                       <Image 
                         src={item.image} 
                         alt={item.title}
                         fill
                         className="object-cover transition-transform duration-700 group-hover:scale-110" 
                       />
                    </div>
                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                       <div className="flex items-center justify-between mb-3 md:mb-4 text-[10px] md:text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-gray-500">
                          <span className="text-primary">{item.category}</span>
                          <div className="flex items-center gap-1"><Calendar size={12} /> {item.date}</div>
                       </div>
                       <h3 className="text-lg md:text-xl font-heading font-bold uppercase leading-tight mb-3 md:mb-4 text-black dark:text-white group-hover:text-primary transition-colors">
                          {item.title}
                       </h3>
                       <p className="text-zinc-600 dark:text-gray-500 text-xs md:text-sm mb-4 md:mb-6 leading-relaxed line-clamp-3">
                          {item.excerpt}
                       </p>
                       <div className="mt-auto">
                          <span className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest border-b border-zinc-200 dark:border-zinc-800 pb-1 group-hover:border-primary text-black dark:text-white group-hover:text-primary transition-all">
                             Read Article <ArrowRight size={14} />
                          </span>
                       </div>
                    </div>
                 </div>
               </Link>
            ))}
         </div>
      </div>
      
    </motion.div>
  );
}
