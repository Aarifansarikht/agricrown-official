
import React from 'react';
import { motion } from 'framer-motion';

import { Users, Globe, Award, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/shared';
import Link from 'next/link';

const About = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white dark:bg-black min-h-screen pt-20 transition-colors duration-300"
    >
      {/* Hero Banner - Standardized */}
      <section className="relative h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
             <img src="https://images.unsplash.com/photo-1625246333195-58197bd4773d?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Farm" />
             <div className="absolute inset-0 bg-black/60 dark:bg-black/70 z-10" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-20">
           <div className="max-w-4xl">
             <span className="bg-primary text-white text-xs font-bold px-3 py-1 uppercase tracking-widest inline-block mb-4">Since 1999</span>
             <h1 className="text-5xl md:text-7xl font-heading font-bold text-white uppercase italic leading-none mb-6 drop-shadow-2xl">
               Cultivating <br/> The Future
             </h1>
             <p className="text-xl text-gray-200 max-w-2xl leading-relaxed font-light border-l-4 border-primary pl-6">
               Driven by a single mission: to empower farmers with machinery that is built to last, perform, and endure.
             </p>
           </div>
        </div>
      </section>

      {/* Mission Split Section */}
      <section className="py-24 bg-white dark:bg-black text-black dark:text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
             <div className="lg:w-1/2">
                <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block font-heading italic">Our Story</span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase italic mb-8 leading-tight">
                  Engineering Excellence <br/> <span className="text-zinc-400 dark:text-zinc-600">For Over 2 Decades</span>
                </h2>
                <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  <p>
                    Agricrown was founded on the belief that agricultural machinery should be as resilient as the farmers who use it. What started as a small workshop has grown into a global manufacturing powerhouse.
                  </p>
                  <p>
                     Our ISO 9001:2015 certified facility employs state-of-the-art robotics and precision engineering to ensure every gear, blade, and bolt meets our rigorous quality standards.
                  </p>
                </div>
                
                <div className="mt-10 grid grid-cols-2 gap-8">
                   <div className="flex flex-col">
                      <span className="text-5xl font-heading font-bold text-primary italic">25+</span>
                      <span className="text-sm font-bold uppercase text-zinc-500 tracking-widest mt-1">Years Experience</span>
                   </div>
                   <div className="flex flex-col">
                      <span className="text-5xl font-heading font-bold text-primary italic">15+</span>
                      <span className="text-sm font-bold uppercase text-zinc-500 tracking-widest mt-1">Countries Served</span>
                   </div>
                </div>
             </div>
             
             <div className="lg:w-1/2 relative">
                 <div className="aspect-[4/3] bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 relative z-10">
                    <img src="https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="Factory" />
                 </div>
                 {/* Decorative elements */}
                 <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 z-0" />
                 <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-primary/20 z-0" />
             </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="bg-zinc-50 dark:bg-zinc-950 py-24 border-y border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
        <div className="container mx-auto px-4 lg:px-8">
           <div className="text-center mb-16">
              <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block font-heading italic">Core Values</span>
              <h2 className="text-4xl font-heading font-bold text-black dark:text-white uppercase italic">Why We Lead</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Globe, title: "Global Vision", desc: "Adapting technology to diverse soils worldwide." },
                { icon: Award, title: "Quality First", desc: "Zero compromise. Only high-grade boron steel." },
                { icon: Users, title: "Farmer Focused", desc: "Innovations driven by direct field feedback." },
                { icon: TrendingUp, title: "Sustainable", desc: "Promoting soil health and fuel efficiency." }
              ].map((item, i) => (
                <div key={i} className="bg-white dark:bg-black p-8 border border-zinc-200 dark:border-zinc-800 hover:border-primary dark:hover:border-primary transition-colors group shadow-sm">
                   <div className="w-14 h-14 bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                      <item.icon className="text-black dark:text-white w-6 h-6 group-hover:text-white" />
                   </div>
                   <h3 className="text-xl font-heading font-bold text-black dark:text-white uppercase italic mb-3">{item.title}</h3>
                   <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Legacy Timeline / Milestones */}
      <section className="py-24 bg-white dark:bg-black text-black dark:text-white">
         <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
               <div className="lg:col-span-1">
                  <h2 className="text-4xl font-heading font-bold uppercase italic mb-6">Our Journey</h2>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-8">
                     From a single workshop to an international brand, our history is defined by constant innovation.
                  </p>
                  <Link href="/contact">
                     <Button className="bg-black text-white dark:bg-white dark:text-black hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white w-full h-14 font-bold italic">
                        Partner With Us
                     </Button>
                  </Link>
               </div>
               <div className="lg:col-span-2 space-y-8">
                  {[
                     { year: "1999", title: "Foundation", desc: "Agricrown established in Punjab with a small lathe workshop." },
                     { year: "2008", title: "Titanium Series", desc: "Launch of our flagship heavy-duty tiller series." },
                     { year: "2015", title: "Global Export", desc: "Started exporting to 5 countries in Southeast Asia." },
                     { year: "2023", title: "Smart Tillage", desc: "Introduced IoT-enabled prototypes for precision farming." }
                  ].map((milestone, idx) => (
                     <div key={idx} className="flex gap-6 items-start group">
                        <div className="flex-shrink-0 w-24 pt-1">
                           <span className="text-3xl font-heading font-bold text-zinc-300 dark:text-zinc-700 group-hover:text-primary transition-colors italic">{milestone.year}</span>
                        </div>
                        <div className="border-l border-zinc-200 dark:border-zinc-800 pl-8 pb-2 relative">
                           <div className="absolute -left-1.5 top-2.5 w-3 h-3 rounded-full bg-zinc-300 dark:bg-zinc-700 group-hover:bg-primary transition-colors" />
                           <h3 className="text-xl font-heading font-bold uppercase italic mb-1">{milestone.title}</h3>
                           <p className="text-zinc-600 dark:text-zinc-400 text-sm">{milestone.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
    </motion.main>
  );
};

export default About;
