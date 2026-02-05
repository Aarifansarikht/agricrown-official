
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ContactSection = () => {
  return (
    <section className="bg-black py-24 border-t border-zinc-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div>
              <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block font-heading italic">Get Started</span>
              <h2 className="text-5xl md:text-6xl font-heading font-bold text-white uppercase italic leading-none mb-8">
                 Ready To <br /> Upgrade?
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Contact our sales team directly for a quote or to schedule a demo of our Titanium Series tillers.
              </p>
              <div className="flex flex-col gap-4">
                 <div className="p-6 bg-zinc-900 border border-zinc-800">
                    <h4 className="text-primary font-bold uppercase italic mb-1">Direct Sales</h4>
                    <p className="text-white text-xl font-heading font-bold italic">+91 98765 43210</p>
                 </div>
                 <div className="p-6 bg-zinc-900 border border-zinc-800">
                    <h4 className="text-primary font-bold uppercase italic mb-1">Email Support</h4>
                    <p className="text-white text-xl font-heading font-bold italic">sales@agricrown.com</p>
                 </div>
              </div>
           </div>
           
           <div className="bg-zinc-950 p-8 md:p-12 border border-zinc-900 shadow-2xl">
              <h3 className="text-2xl font-heading font-bold text-white uppercase italic mb-6">Enquiry Form</h3>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                       <label className="text-xs uppercase font-bold text-zinc-500 mb-1 block">Name</label>
                       <Input placeholder="Your Name" className="h-14 bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600 focus:border-primary focus:ring-0" />
                    </div>
                    <div>
                       <label className="text-xs uppercase font-bold text-zinc-500 mb-1 block">Phone</label>
                       <Input placeholder="Phone Number" className="h-14 bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600 focus:border-primary focus:ring-0" />
                    </div>
                 </div>
                 <div>
                    <label className="text-xs uppercase font-bold text-zinc-500 mb-1 block">Email</label>
                    <Input placeholder="Email Address" className="h-14 bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600 focus:border-primary focus:ring-0" />
                 </div>
                 <div>
                    <label className="text-xs uppercase font-bold text-zinc-500 mb-1 block">Message</label>
                    <textarea 
                        className="w-full bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-600 p-4 min-h-[120px] focus:outline-none focus:border-primary"
                        placeholder="Tell us about your requirements..."
                    ></textarea>
                 </div>
                 <Button className="w-full bg-primary text-black font-bold italic h-14 mt-4 text-lg hover:bg-white">
                    SEND ENQUIRY
                 </Button>
              </form>
           </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
