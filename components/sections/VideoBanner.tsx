
import React from 'react';
import { Play } from 'lucide-react';
import Image from 'next/image';

const VideoBanner = () => {
  return (
    <section className="relative h-[600px] w-full bg-zinc-900 overflow-hidden flex items-center justify-center">
       {/* Background */}
       <div className="absolute inset-0">
         <div className="absolute inset-0 bg-black/50 z-10" />
         <Image 
            src="https://images.unsplash.com/photo-1599586120429-48285b6a8a24?q=80&w=2000&auto=format&fit=crop" 
            alt="Field Work" 
            fill
            className="object-cover grayscale opacity-60"
         />
       </div>

       <div className="relative z-20 container mx-auto px-4 flex flex-col items-center">
          <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-8 hover:scale-110 transition-transform cursor-pointer group">
             <Play className="ml-1 w-8 h-8 text-black group-hover:text-primary transition-colors fill-current" />
          </button>
          
          <div className="max-w-2xl text-center">
             <h2 className="text-5xl md:text-7xl font-heading font-bold text-white uppercase italic mb-4 drop-shadow-lg">
                Push Past Your Limits
             </h2>
             <p className="text-gray-300 text-lg mb-8 font-medium">
                See how our elite machines take on high altitude fields and rocky terrains without breaking a sweat.
             </p>
          </div>
       </div>
       
       {/* Decorative Lines */}
       <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  );
};

export default VideoBanner;
