
"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Is the Titanium Series suitable for beginners?",
    a: "Absolutely. We have specific 'Titanium Lite' configurations designed for smaller farms where ease of use is priority."
  },
  {
    q: "What does the service plan include?",
    a: "Our standard service plan covers all gearbox maintenance, blade sharpening, and annual safety inspections."
  },
  {
    q: "Do I need special gear?",
    a: "Standard safety gear is recommended. We provide a comprehensive safety kit with every machine purchase."
  },
  {
    q: "Can I pause my membership?",
    a: "Yes, distributor memberships can be paused seasonally during non-harvest months."
  },
  {
    q: "How do I order spare parts?",
    a: "Spare parts can be ordered directly through our website or via your local authorized Agricrown dealer."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 md:py-24 border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-3xl">
         <div className="text-center mb-8 md:mb-12">
            <span className="text-[10px] md:text-xs font-bold text-zinc-500 uppercase tracking-widest">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase italic mt-2 text-black dark:text-white">Questions From The Field</h2>
         </div>

         <div className="space-y-3 md:space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full py-4 px-4 md:py-6 md:px-6 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className={`font-heading font-bold text-base md:text-lg uppercase italic transition-colors pr-4 ${openIndex === idx ? 'text-primary' : 'text-black dark:text-white'}`}>
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}. {faq.q}
                  </span>
                  <ChevronDown className={`transform transition-transform flex-shrink-0 ${openIndex === idx ? 'rotate-180 text-primary' : 'text-zinc-500'}`} />
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-4 px-4 md:pb-6 md:px-6 text-zinc-600 dark:text-zinc-400 text-xs md:text-sm leading-relaxed pl-10 md:pl-12 border-l border-zinc-200 dark:border-zinc-700 ml-4 md:ml-6">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
         </div>
      </div>
    </section>
  );
};

export default FAQ;
