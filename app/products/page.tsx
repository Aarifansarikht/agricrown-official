
"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { products } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Filter } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

export default function Products() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-zinc-50 dark:bg-black min-h-screen pt-20 transition-colors duration-300"
    >
      {/* Header - Standardized */}
      <div className="relative h-[50vh] flex items-center overflow-hidden bg-zinc-900 text-white">
        <div className="absolute inset-0 z-0">
             <Image 
                    src="/images/hero/banner1.jpg" 
               alt="Products"
               fill
               className="object-cover opacity-50"
             />
             <div className="absolute inset-0 bg-black/60 z-10" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-20">
           <div className="max-w-4xl">
             <span className="bg-primary text-white text-xs font-bold px-3 py-1 uppercase tracking-widest inline-block mb-4">Our Catalogue</span>
             <h1 className="text-5xl md:text-7xl font-heading font-bold uppercase italic mb-6 leading-none text-white">
                Engineered For <br/> Dominance
             </h1>
             <p className="text-xl text-gray-200 max-w-2xl leading-relaxed font-light border-l-4 border-primary pl-6">
               Explore our range of Titanium and Alfha series rotary tillers. Precision engineered for the modern farmer.
             </p>
           </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Filters Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 bg-white dark:bg-zinc-900 p-4 border border-zinc-200 dark:border-zinc-800 shadow-sm">
          <div className="flex flex-wrap gap-2">
             <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-zinc-500 mr-4">
                <Filter size={16} /> Filters:
             </span>
             {['All', 'Rotary Tillers', 'Spare Parts', 'Accessories'].map((filter, i) => (
                <button 
                  key={i}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors border ${i === 0 
                     ? 'bg-primary border-primary text-black' 
                     : 'bg-transparent border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-primary hover:text-primary'}`}
                >
                   {filter}
                </button>
             ))}
          </div>
          <div className="text-xs font-bold uppercase text-zinc-500">
             Showing {products.length} Results
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
             <Link href={`/products/${product.slug}`} key={product.id} className="group block bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-primary dark:hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1">
                <div className="aspect-[4/3] bg-zinc-100 dark:bg-zinc-950 overflow-hidden relative">
                   <Image 
                     src={product.image} 
                     alt={product.name} 
                     fill
                     className="object-cover group-hover:scale-105 transition-transform duration-700" 
                   />
                   <div className="absolute top-4 left-4 z-10">
                     <span className="bg-primary text-white text-xs font-bold px-3 py-1 uppercase tracking-widest italic shadow-md">{product.series}</span>
                   </div>
                   {product.isNew && (
                     <div className="absolute top-4 right-4 z-10">
                        <span className="bg-black text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest border border-zinc-800">New Arrival</span>
                     </div>
                   )}
                </div>
                <div className="p-8">
                   <h2 className="text-2xl font-heading font-bold text-black dark:text-white uppercase italic mb-3 group-hover:text-primary transition-colors leading-none">{product.name}</h2>
                   <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 line-clamp-2 leading-relaxed">{product.shortDescription}</p>
                   
                   <div className="flex flex-wrap gap-2 mb-6">
                      {product.features.slice(0, 2).map((feature, idx) => (
                         <span key={idx} className="text-[10px] font-bold uppercase px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded-sm">
                            {feature}
                         </span>
                      ))}
                   </div>

                   <div className="flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800 pt-6 group-hover:border-primary/20 transition-colors">
                      <span className="font-bold text-lg text-black dark:text-white">{formatCurrency(product.price)}</span>
                      <span className="text-black dark:text-white font-bold text-xs uppercase italic flex items-center gap-1 group-hover:translate-x-1 group-hover:text-primary transition-all">
                        View Details <ArrowUpRight size={16} />
                      </span>
                   </div>
                </div>
             </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
