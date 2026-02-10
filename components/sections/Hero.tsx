
"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/language';



const Hero = () => {
  const [current, setCurrent] = useState(0);
 const { t } = useLanguage();
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
const slides = [
  {
    id: 1,
    image: "/images/hero/banner1.jpg",
      title: t("hero.slide1.title"),
      subtitle: t("hero.slide1.subtitle")
  },
  {
    id: 2,
    image: "/images/hero/banner2.jpg",

       title: t("hero.slide2.title"),
      subtitle: t("hero.slide2.subtitle")
  },
  {
    id: 3,
        image: "/images/hero/banner3.jpg",

     title: t("hero.slide3.title"),
      subtitle: t("hero.slide3.subtitle")
  }
];
  return (
    <section className="relative h-[100dvh] w-full bg-black overflow-hidden flex items-center justify-center">
      
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          {/* Reduced overlay opacity so image is more visible */}
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 z-10" />
          <Image 
            src={slides[current].image} 
            alt="Hero Background"
            fill
            className="object-cover animate-pulse-slow"
            priority={true}
          />
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-4 relative z-20 text-center pt-12 md:pt-20 ">
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${current}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-heading font-bold text-white uppercase italic leading-[0.9] md:leading-[0.85] tracking-tighter mb-4 md:mb-8 drop-shadow-2xl whitespace-pre-line">
              {slides[current].title.split('\n').map((line, i) => (
                <span key={i} className={i === 1 ? "text-primary" : "text-white"}>
                  {line}<br/>
                </span>
              ))}
            </h1>
            
            <p className="text-sm sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8 md:mb-10 font-medium leading-relaxed drop-shadow-md px-4">
              {slides[current].subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <Link href="/products" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto sm:min-w-[200px] bg-primary text-black hover:bg-white border-none h-12 md:h-14 text-sm md:text-base">
                   {t('hero.cta.view')}
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto sm:min-w-[200px] h-12 md:h-14 text-sm md:text-base">
                      {t('hero.cta.enquiry')}
                </Button>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Indicators - Middle Bottom */}
      <div className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-2 md:gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1 md:h-1.5 transition-all duration-300 rounded-full ${
              current === idx ? 'w-8 md:w-12 bg-primary' : 'w-8 md:w-12 bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
