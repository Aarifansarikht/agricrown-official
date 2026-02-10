
"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const reviews = [
  {
    text: "I went from barely managing my harvest to doubling my yield in one season. The Titanium Series isn't just a machine; it's a game changer.",
    author: "Mike Chen",
    role: "Commercial Farmer",
    img: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    text: "The durability of the Alfha series is unmatched. We run these tillers 12 hours a day in rocky soil, and they just keep going.",
    author: "Sarah Johnson",
    role: "Vineyard Manager",
    img: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    text: "Agricrown's support team helped us customize the transmission for our specific clay soil type. The results have been phenomenal.",
    author: "David O'Connor",
    role: "Agricultural Contractor",
    img: "https://randomuser.me/api/portraits/men/85.jpg"
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));

  return (
    <section className="bg-zinc-100 dark:bg-zinc-950 py-16 md:py-32 border-t border-zinc-200 dark:border-zinc-900 relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
         <div className="mb-6 md:mb-8 flex justify-center">
             <span className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.3em] border border-primary px-3 py-1 md:px-4 md:py-1 font-heading italic">Reviews</span>
         </div>
         
         <h2 className="text-2xl md:text-3xl lg:text-5xl font-heading font-bold text-black dark:text-white uppercase italic mb-8 md:mb-12 tracking-widest opacity-90">Stories From The Field</h2>
         
         <div className="relative min-h-[250px] md:min-h-[300px]">
           <AnimatePresence mode="wait">
             <motion.div
               key={current}
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -20 }}
               transition={{ duration: 0.3 }}
             >
               <div className="w-16 h-16 md:w-24 md:h-24 bg-white dark:bg-zinc-800 rounded-full mx-auto mb-6 md:mb-8 flex items-center justify-center overflow-hidden border-2 border-primary shadow-lg relative">
                  <Image src={reviews[current].img} alt={reviews[current].author} fill className="object-cover" />
               </div>
               
               <p className="text-lg md:text-2xl lg:text-4xl font-heading font-bold text-black dark:text-white italic leading-tight mb-6 md:mb-8 px-2">
                 "{reviews[current].text}"
               </p>
               
               <div>
                  <h4 className="text-primary font-bold uppercase tracking-wider text-xs md:text-sm font-heading italic">{reviews[current].author}</h4>
                  <p className="text-zinc-500 dark:text-gray-500 text-[10px] md:text-xs font-bold uppercase tracking-widest">{reviews[current].role}</p>
               </div>
             </motion.div>
           </AnimatePresence>
         </div>

         <div className="flex justify-center gap-4 mt-8 md:mt-12">
            <Button onClick={prev} size="icon" variant="outline" className="rounded-full w-10 h-10 md:w-12 md:h-12 border-zinc-300 dark:border-zinc-800 text-black dark:text-white hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary">
              <ArrowLeft size={16} className="md:w-5 md:h-5" />
            </Button>
            <Button onClick={next} size="icon" variant="outline" className="rounded-full w-10 h-10 md:w-12 md:h-12 border-zinc-300 dark:border-zinc-800 text-black dark:text-white hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary">
              <ArrowRight size={16} className="md:w-5 md:h-5" />
            </Button>
         </div>
      </div>
    </section>
  );
};

export default Testimonials;
