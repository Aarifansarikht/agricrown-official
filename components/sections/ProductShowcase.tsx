"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/lib/data';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProductShowcase = () => {
  return (
    <section className="bg-zinc-50 dark:bg-black py-24 relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
         <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
               <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block font-heading italic">Our Machinery</span>
               <h2 className="text-5xl md:text-6xl font-heading font-bold text-black dark:text-white uppercase italic leading-none">
                  Engineered For <span className="text-primary">Dominance</span>
               </h2>
               <p className="text-zinc-600 dark:text-gray-400 mt-4 text-lg">
                  Explore our flagship series, each built to conquer specific soil challenges.
               </p>
            </div>
            <Link href="/products">
               <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black">
                  View All Products <ArrowRight className="ml-2 w-4 h-4" />
               </Button>
            </Link>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.slice(0, 3).map((product, idx) => (
               <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-primary dark:hover:border-primary transition-all duration-300 flex flex-col shadow-sm hover:shadow-xl"
               >
                  {/* Image Container */}
                  <div className="aspect-[4/3] overflow-hidden relative bg-zinc-100 dark:bg-zinc-950">
                     <Image 
                        src={product.image} 
                        alt={product.name} 
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110" 
                     />
                     <div className="absolute top-4 left-4 z-10">
                        <span className="bg-primary text-white text-xs font-bold px-3 py-1 uppercase tracking-widest shadow-md">
                           {product.series}
                        </span>
                     </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-grow">
                     <div className="flex items-center gap-2 mb-3">
                        <div className="flex text-primary">
                           <Star size={14} fill="currentColor" />
                           <Star size={14} fill="currentColor" />
                           <Star size={14} fill="currentColor" />
                           <Star size={14} fill="currentColor" />
                           <Star size={14} fill="currentColor" />
                        </div>
                        <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Top Rated</span>
                     </div>

                     <h3 className="text-2xl font-heading font-bold text-black dark:text-white uppercase italic leading-none mb-3 group-hover:text-primary transition-colors">
                        {product.name}
                     </h3>
                     
                     <p className="text-zinc-600 dark:text-gray-400 text-sm mb-6 line-clamp-2 leading-relaxed">
                        {product.shortDescription}
                     </p>

                     <div className="mt-auto pt-6 border-t border-zinc-100 dark:border-zinc-800">
                        <Link href={`/products/${product.slug}`} className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-black dark:text-white group-hover:text-primary transition-colors">
                           View Details <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                     </div>
                  </div>
               </motion.div>
            ))}
         </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
