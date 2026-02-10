
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="bg-black py-12 md:py-24 border-t border-zinc-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
           <div>
              <span className="text-primary font-bold tracking-widest uppercase text-[10px] md:text-xs mb-2 block font-heading italic">Club Membership</span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white uppercase italic leading-none mb-6 md:mb-8">
                 Commit To <br /> The Crown
              </h2>
              <div className="flex flex-col gap-3 md:gap-4 text-gray-400 font-medium text-sm md:text-base">
                 <div className="flex items-center gap-3">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary flex items-center justify-center text-black font-bold text-[10px] md:text-xs">✓</div>
                    <span>Weekly maintenance tips</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary flex items-center justify-center text-black font-bold text-[10px] md:text-xs">✓</div>
                    <span>Exclusive distributor rates</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary flex items-center justify-center text-black font-bold text-[10px] md:text-xs">✓</div>
                    <span>Priority support access</span>
                 </div>
              </div>
           </div>
           
           <div className="bg-zinc-900 p-6 md:p-8 border border-zinc-800">
              <h3 className="text-xl md:text-2xl font-heading font-bold text-white uppercase italic mb-4 md:mb-6">Apply For Membership</h3>
              <p className="text-gray-400 text-xs md:text-sm mb-4 md:mb-6">Get a custom machine plan and maintenance schedule today.</p>
              
              <form className="space-y-3 md:space-y-4" onSubmit={(e) => e.preventDefault()}>
                 <div className="grid grid-cols-2 gap-3 md:gap-4">
                    <div>
                       <label className="text-[10px] md:text-xs uppercase font-bold text-zinc-500 mb-1 block">Name</label>
                       <Input placeholder="Farm Name" className="h-10 md:h-12 bg-black border-zinc-800 text-xs md:text-sm" />
                    </div>
                    <div>
                       <label className="text-[10px] md:text-xs uppercase font-bold text-zinc-500 mb-1 block">Email</label>
                       <Input placeholder="Email Address" className="h-10 md:h-12 bg-black border-zinc-800 text-xs md:text-sm" />
                    </div>
                 </div>
                 <div>
                    <label className="text-[10px] md:text-xs uppercase font-bold text-zinc-500 mb-1 block">Primary Goal</label>
                    <select className="w-full h-10 md:h-12 bg-black border border-zinc-800 text-white px-4 text-xs md:text-sm focus:outline-none focus:border-primary appearance-none">
                       <option>Increase Yield</option>
                       <option>Upgrade Machinery</option>
                       <option>Start Distributorship</option>
                    </select>
                 </div>
                 <Button className="w-full bg-primary text-black font-bold italic h-12 md:h-14 mt-2 md:mt-4 text-base md:text-lg">
                    START MY JOURNEY
                 </Button>
              </form>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
