
"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const FeaturedSpotlight = () => {
  const [activePoint, setActivePoint] = useState<number | null>(null);

  const hotspots = [
    { id: 1, x: 30, y: 40, label: "Reinforced Gearbox", desc: "Heavy-duty transmission for rocky soil." },
    { id: 2, x: 60, y: 55, label: "Boron Steel Blades", desc: "Custom alloy designed for max durability." },
    { id: 3, x: 45, y: 70, label: "Adjustable Skid Shoes", desc: "Precision depth control system." },
  ];

  return (
    <section className="bg-zinc-50 dark:bg-zinc-950 py-24 relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block font-heading italic">Spotlight Machine</span>
            <h2 className="text-5xl md:text-7xl font-heading font-bold text-black dark:text-white uppercase italic leading-none">
              Titanium <span className="text-stroke-primary text-transparent dark:text-white">Plus</span>
            </h2>
          </div>
          <Link href="/products/titanium-plus-series-tiller">
            <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black">
              View Full Specs <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Interactive Viewer */}
        <div className="relative bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 p-8 md:p-12 rounded-lg shadow-2xl">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Image Side with Hotspots */}
              <div className="relative group cursor-crosshair">
                 <div className="relative aspect-[4/3]">
                    <Image 
                      src="/images/products/pro1.jpg" 
                      alt="Titanium Plus Tiller" 
                      fill
                      className="object-cover rounded-sm  group-hover:grayscale-0 transition-all duration-700"
                    />
                    
                    {/* Hotspots */}
                    {hotspots.map((spot) => (
                      <button
                        key={spot.id}
                        style={{ top: `${spot.y}%`, left: `${spot.x}%` }}
                        className="absolute w-8 h-8 -ml-4 -mt-4 bg-primary text-black rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.6)] hover:scale-125 transition-transform z-10 animate-pulse"
                        onMouseEnter={() => setActivePoint(spot.id)}
                        onMouseLeave={() => setActivePoint(null)}
                      >
                        <Plus size={16} />
                      </button>
                    ))}
                 </div>
              </div>

              {/* Info Side */}
              <div className="space-y-8">
                 <div className="space-y-4">
                    <h3 className="text-3xl font-heading font-bold text-black dark:text-white uppercase italic">
                      Built for the <br/><span className="text-primary">Boldest Farmers</span>
                    </h3>
                    <p className="text-zinc-600 dark:text-gray-400 text-lg leading-relaxed">
                      The Titanium Plus isn't just a tiller; it's a statement. Engineered to pulverize the toughest soil types, from dry clay to rocky terrain. 
                    </p>
                 </div>

                 {/* Dynamic Spec Box */}
                 <div className="min-h-[120px] p-6 bg-zinc-100 dark:bg-zinc-900 border-l-4 border-primary transition-colors duration-300">
                    {activePoint ? (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        key={activePoint}
                      >
                        <h4 className="text-xl font-heading font-bold uppercase italic text-black dark:text-white mb-2">
                          {hotspots.find(h => h.id === activePoint)?.label}
                        </h4>
                        <p className="text-zinc-600 dark:text-gray-400">
                          {hotspots.find(h => h.id === activePoint)?.desc}
                        </p>
                      </motion.div>
                    ) : (
                      <div className="flex flex-col justify-center h-full">
                         <span className="text-zinc-400 dark:text-zinc-600 font-bold uppercase text-sm tracking-widest italic">
                           Hover over the + points to explore features
                         </span>
                      </div>
                    )}
                 </div>

                 <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="p-4 bg-zinc-100 dark:bg-zinc-900">
                       <span className="block text-2xl font-heading font-bold text-black dark:text-white">60HP</span>
                       <span className="text-xs uppercase text-zinc-500 font-bold">Max Power</span>
                    </div>
                    <div className="p-4 bg-zinc-100 dark:bg-zinc-900">
                       <span className="block text-2xl font-heading font-bold text-black dark:text-white">2.5m</span>
                       <span className="text-xs uppercase text-zinc-500 font-bold">Width</span>
                    </div>
                    <div className="p-4 bg-zinc-100 dark:bg-zinc-900">
                       <span className="block text-2xl font-heading font-bold text-black dark:text-white">580kg</span>
                       <span className="text-xs uppercase text-zinc-500 font-bold">Weight</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSpotlight;
