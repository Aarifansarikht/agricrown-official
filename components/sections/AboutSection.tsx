
"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="bg-zinc-50 dark:bg-zinc-950 py-12 md:py-24 overflow-hidden relative border-t border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-[4/3] bg-zinc-200 dark:bg-zinc-900 relative border border-zinc-300 dark:border-zinc-800">
               <Image 
                 src="/images/experiance.jpg" 
                 alt="Factory Floor" 
                 fill
                 className="object-cover relative z-10 opacity-80 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-700"
               />
               
               {/* Overlay Box */}
               <div className="absolute -bottom-5 -right-5 md:-bottom-10 md:-right-10 w-48 h-48 md:w-64 md:h-64 bg-white dark:bg-black z-20 p-4 md:p-8 flex flex-col justify-center items-center text-center hidden sm:flex border border-zinc-200 dark:border-zinc-800 shadow-xl">
                 <div className="w-full h-full border border-zinc-200 dark:border-zinc-800 flex flex-col items-center justify-center p-4">
                   <span className="text-4xl md:text-6xl font-heading font-bold text-primary italic mb-2">25+</span>
                   <span className="text-black dark:text-white text-[10px] md:text-sm uppercase font-bold tracking-widest leading-tight italic">Years of<br/>Excellence</span>
                 </div>
               </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-bold tracking-widest uppercase text-[10px] md:text-xs mb-2 block font-heading italic">About Agricrown</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-black dark:text-white uppercase italic mb-4 md:mb-6 leading-tight">
                Empowering Farmers <br/>
                <span className="text-zinc-400 dark:text-zinc-600">Since 1999</span>
              </h2>
              <p className="text-zinc-600 dark:text-gray-400 text-sm md:text-lg mb-6 md:mb-8 leading-relaxed border-l-4 border-primary pl-4 md:pl-6">
                Agricrown is a leading manufacturer of high-quality agricultural machinery. We combine traditional farming wisdom with modern engineering to create rotary tillers that stand the test of time.
              </p>
              
              <div className="grid grid-cols-1 gap-3 md:gap-4 mb-6 md:mb-8">
                {[
                  "Advanced manufacturing facility in India",
                  "Exporting to over 15 countries worldwide",
                  "ISO 9001:2015 Certified Production"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 md:gap-4 group">
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-zinc-200 dark:bg-zinc-900 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                      <Check size={14} className="text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors md:w-4 md:h-4" />
                    </div>
                    <span className="text-zinc-700 dark:text-gray-300 font-bold uppercase text-xs md:text-sm tracking-wide italic">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/about">
                <Button className="bg-black text-white hover:bg-primary hover:text-white dark:bg-white dark:text-black dark:hover:bg-primary dark:hover:text-white px-8 md:px-10 h-12 md:h-14 font-bold tracking-wider text-xs md:text-sm">
                  READ OUR STORY
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
