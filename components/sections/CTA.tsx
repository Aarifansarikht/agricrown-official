
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="py-24 bg-zinc-900 relative overflow-hidden border-t border-zinc-800">
        <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black/70 z-10" />
            <Image 
                src="https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80&w=2000&auto=format&fit=crop" 
                alt="CTA Background" 
                fill
                className="object-cover grayscale opacity-40" 
            />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-20 text-center">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block font-heading italic">Join The Revolution</span>
            <h2 className="text-5xl md:text-8xl font-heading font-bold text-white uppercase italic leading-[0.9] mb-8 drop-shadow-2xl">
                Ready To <span className="text-primary">Dominate?</span>
            </h2>
            <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
                Equip your farm with the industry's most durable rotary tillers. 
                Experience the difference of premium engineering and 24/7 support.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/contact">
                    <Button size="lg" className="bg-primary text-black hover:bg-white hover:text-black h-20 px-12 text-xl shadow-2xl font-bold italic min-w-[250px]">
                        Enquiry Now <ArrowRight className="ml-3 w-6 h-6" />
                    </Button>
                </Link>
                <Link href="/products">
                    <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black h-20 px-12 text-xl shadow-2xl font-bold italic min-w-[250px]">
                        View Catalogue
                    </Button>
                </Link>
            </div>
        </div>
    </section>
  );
};

export default CTA;
