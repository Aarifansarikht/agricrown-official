
"use client"

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: "01",
    title: "Consultation",
    desc: "Discuss your soil type and farming needs with our experts to select the right model."
  },
  {
    num: "02",
    title: "Customization",
    desc: "Choose size, blade type, and transmission options tailored to your tractor HP."
  },
  {
    num: "03",
    title: "Production",
    desc: "Your machine is assembled and undergoes rigorous quality checks at our factory."
  },
  {
    num: "04",
    title: "Delivery",
    desc: "Secure packaging and global shipping to your nearest dealer or farm location."
  }
];

const HowItWorks = () => {
  return (
    <section className="bg-white dark:bg-black py-24 relative overflow-hidden border-t border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block font-heading italic">Process</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-black dark:text-white uppercase italic mb-4">How We Work</h2>
          <p className="text-zinc-600 dark:text-gray-400">Streamlined process from enquiry to delivery.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 p-8 relative group hover:border-primary/50 dark:hover:border-primary/50 transition-colors duration-300 shadow-sm hover:shadow-lg"
            >
              <span className="absolute -top-6 left-6 text-6xl font-heading font-bold text-zinc-200 dark:text-zinc-900 group-hover:text-primary/10 transition-colors select-none italic">
                {step.num}
              </span>
              <div className="relative z-10 pt-4">
                <h3 className="text-black dark:text-white font-heading font-bold text-xl uppercase italic mb-3">{step.title}</h3>
                <p className="text-zinc-600 dark:text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
