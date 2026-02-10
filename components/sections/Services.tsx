
"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Wrench, ShieldCheck, Headphones, Settings, Leaf } from 'lucide-react';

const services = [
  {
    icon: Truck,
    title: "Dealer Shipping",
    description: "Fast, secure shipping designed to support dealers with timely and dependable deliveries."

  },
  {
    icon: ShieldCheck,
    title: "Extended Warranty",
    description: "Peace of mind with our comprehensive warranty packages covering all major components."
  },
  {
    icon: Wrench,
    title: "On-Site Service",
    description: "Expert technicians available for on-site maintenance and repairs to keep you farming."
  },
  {
    icon: Settings,
    title: "Genuine Parts",
    description: "Quick access to authentic Agricrown spare parts through our dealer network."
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Tech",
    description: "Machinery designed to minimize soil erosion and fuel consumption."
  },
  {
    icon: Headphones,
    title: "12/7 Support",
    description: "Round-the-clock technical assistance for dealers and farmers alike."
  }
];

const Services = () => {
  return (
    <section className="bg-white dark:bg-black py-12 md:py-24 border-t border-zinc-200 dark:border-zinc-900 relative transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-[10px] md:text-xs mb-2 block font-heading italic">Our Expertise</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-black dark:text-white uppercase italic mb-3 md:mb-4">
            World-Class Services
          </h2>
          <p className="text-zinc-600 dark:text-gray-400 text-sm md:text-lg">
            We don't just sell machinery; we build long-lasting partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-200 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-900">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-50 dark:bg-black p-6 md:p-10 hover:bg-white dark:hover:bg-zinc-900 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="w-10 h-10 md:w-14 md:h-14 bg-zinc-200 dark:bg-zinc-900 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="text-black dark:text-white w-5 h-5 md:w-6 md:h-6 group-hover:text-white dark:group-hover:text-black" />
              </div>
              <h3 className="text-black dark:text-white font-heading font-bold text-lg md:text-xl uppercase italic mb-2 md:mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-zinc-600 dark:text-gray-500 text-xs md:text-sm leading-relaxed group-hover:text-zinc-900 dark:group-hover:text-gray-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
