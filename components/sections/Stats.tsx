
"use client"

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: "50+", label: "Products" },
  { value: "50k", label: "Happy Farmers" },
  { value: "99%", label: "Durable" },
  { value: "12/7", label: "Expert Support" }
];

const Stats = () => {
  return (
    <section className="bg-white dark:bg-black text-black dark:text-white py-12 md:py-24 border-b border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Intro Text */}
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8 md:gap-12 mb-12 md:mb-20 border-l-4 border-primary pl-6 lg:pl-12">
           <div className="lg:w-3/5">
              <span className="text-primary font-bold tracking-widest uppercase text-[10px] md:text-xs mb-2 md:mb-4 block font-heading italic">Our Philosophy</span>
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-heading font-bold uppercase italic leading-[0.9]">
                 <span className="text-zinc-300 dark:text-zinc-800 block mb-1 md:mb-2">When farmers </span>
                 <span className="text-black dark:text-white block">trust the brand</span>
                 <span className="text-primary block">delears grow faster.</span>
              </h2>
           </div>
           <div className="lg:w-2/5 pb-2">
              <p className="text-sm md:text-lg text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed">
                At Agricrown, trust is the foundation of growth. When farmers believe in the brand, dealers gain confidence, partnerships strengthen, and businesses scale faster. We focus on reliability, performance, and long-term value—so every link in the chain grows together.
              </p>
           </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 text-center">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-4 md:p-8 bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-primary dark:hover:border-primary transition-colors group"
            >
              <div className="text-2xl md:text-4xl lg:text-6xl font-heading font-bold text-black dark:text-white italic mb-1 md:mb-3 tracking-tighter group-hover:text-primary transition-colors">
                {stat.value}
              </div>
              <div className="text-[10px] md:text-xs font-bold uppercase tracking-[0.1em] md:tracking-[0.2em] text-zinc-500 dark:text-gray-500">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
