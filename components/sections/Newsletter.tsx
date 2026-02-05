
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="bg-black py-24 border-t border-zinc-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div>
              <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block font-heading italic">Club Membership</span>
              <h2 className="text-6xl md:text-7xl font-heading font-bold text-white uppercase italic leading-none mb-8">
                 Commit To <br /> The Crown
              </h2>
              <div className="flex flex-col gap-4 text-gray-400 font-medium">
                 <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-black font-bold text-xs">✓</div>
                    <span>Weekly maintenance tips</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-black font-bold text-xs">✓</div>
                    <span>Exclusive distributor rates</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-black font-bold text-xs">✓</div>
                    <span>Priority support access</span>
                 </div>
              </div>
           </div>
           
           <div className="bg-zinc-900 p-8 border border-zinc-800">
              <h3 className="text-2xl font-heading font-bold text-white uppercase italic mb-6">Apply For Membership</h3>
              <p className="text-gray-400 text-sm mb-6">Get a custom machine plan and maintenance schedule today.</p>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                 <div className="grid grid-cols-2 gap-4">
                    <div>
                       <label className="text-xs uppercase font-bold text-zinc-500 mb-1 block">Name</label>
                       <Input placeholder="Farm Name" className="h-12 bg-black border-zinc-800" />
                    </div>
                    <div>
                       <label className="text-xs uppercase font-bold text-zinc-500 mb-1 block">Email</label>
                       <Input placeholder="Email Address" className="h-12 bg-black border-zinc-800" />
                    </div>
                 </div>
                 <div>
                    <label className="text-xs uppercase font-bold text-zinc-500 mb-1 block">Primary Goal</label>
                    <select className="w-full h-12 bg-black border border-zinc-800 text-white px-4 text-sm focus:outline-none focus:border-primary">
                       <option>Increase Yield</option>
                       <option>Upgrade Machinery</option>
                       <option>Start Distributorship</option>
                    </select>
                 </div>
                 <Button className="w-full bg-primary text-black font-bold italic h-14 mt-4 text-lg">
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
