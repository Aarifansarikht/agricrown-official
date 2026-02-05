
"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-zinc-50 dark:bg-black min-h-screen pt-20 transition-colors duration-300"
    >
      {/* Header - Standardized */}
      <section className="relative h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
             <Image 
                      src="/images/hero/banner2.jpg" 
               alt="Contact"
               fill
               className="object-cover"
               priority
             />
             <div className="absolute inset-0 bg-black/60 z-10" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-20">
           <div className="max-w-4xl">
             <span className="bg-primary text-white text-xs font-bold px-3 py-1 uppercase tracking-widest inline-block mb-4">Get In Touch</span>
             <h1 className="text-5xl md:text-7xl font-heading font-bold text-white uppercase italic leading-none mb-6 drop-shadow-2xl">
               Start Your <br/> Journey
             </h1>
             <p className="text-xl text-gray-200 max-w-2xl leading-relaxed font-light border-l-4 border-primary pl-6">
               We are here to assist you. Whether it's sales, support, or partnership inquiries.
             </p>
           </div>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-8 shadow-2xl -mt-24 relative z-30">
           
           {/* Left: Info */}
           <div className="w-full lg:w-5/12 bg-white dark:bg-zinc-900 text-black dark:text-white p-12 lg:p-16 flex flex-col justify-center border border-zinc-200 dark:border-zinc-800 relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block font-heading italic">Contact Details</span>
                <h2 className="text-4xl font-heading font-bold uppercase italic mb-12 leading-none">
                  We're Here <br/> To Help
                </h2>

                <div className="space-y-10">
                   <div className="flex items-start gap-6 group">
                      <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <MapPin size={24} />
                      </div>
                      <div>
                         <h3 className="font-bold uppercase tracking-wider mb-2 italic text-sm">Headquarters</h3>
                         <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">123 Industrial Area, Phase 2<br/>New Delhi, India 110020</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-6 group">
                      <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <Phone size={24} />
                      </div>
                      <div>
                         <h3 className="font-bold uppercase tracking-wider mb-2 italic text-sm">Phone</h3>
                         <p className="text-zinc-600 dark:text-zinc-400 text-sm">+91 98765 43210</p>
                         <p className="text-zinc-600 dark:text-zinc-400 text-sm">+91 11 2345 6789</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-6 group">
                      <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <Mail size={24} />
                      </div>
                      <div>
                         <h3 className="font-bold uppercase tracking-wider mb-2 italic text-sm">Email</h3>
                         <p className="text-zinc-600 dark:text-zinc-400 text-sm">sales@agricrown.com</p>
                         <p className="text-zinc-600 dark:text-zinc-400 text-sm">support@agricrown.com</p>
                      </div>
                   </div>
                </div>
              </div>
           </div>

           {/* Right: Form */}
           <div className="w-full lg:w-7/12 bg-zinc-100 dark:bg-black text-black dark:text-white p-12 lg:p-16 flex flex-col justify-center border border-zinc-200 dark:border-zinc-800">
              <h2 className="text-3xl font-heading font-bold uppercase italic mb-8">Send Message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">First Name</label>
                       <Input className="bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-800 text-black dark:text-white placeholder:text-zinc-400 focus:border-primary focus:ring-0 rounded-none h-14" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Last Name</label>
                       <Input className="bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-800 text-black dark:text-white placeholder:text-zinc-400 focus:border-primary focus:ring-0 rounded-none h-14" placeholder="Doe" />
                    </div>
                 </div>
                 <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Email Address</label>
                    <Input className="bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-800 text-black dark:text-white placeholder:text-zinc-400 focus:border-primary focus:ring-0 rounded-none h-14" placeholder="john@example.com" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Message</label>
                    <textarea 
                      className="flex w-full border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-3 text-sm ring-offset-background placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50 text-black dark:text-white min-h-[150px] resize-none font-sans" 
                      placeholder="How can we help you?"
                    />
                 </div>
                 <Button type="submit" className="w-full bg-primary text-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black h-16 font-bold rounded-none uppercase tracking-widest text-lg italic transition-all shadow-lg">
                    Send Message
                 </Button>
              </form>
           </div>
        </div>
      </div>
    </motion.div>
  );
}
