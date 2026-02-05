
import React from 'react';
import { ShieldCheck, Cog, Award, Zap } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: "Endurance Engineering",
    desc: "Science-backed alloy transmission designed to increase torque and withstand extreme soil resistance."
  },
  {
    icon: ShieldCheck,
    title: "Performance Safety",
    desc: "Custom safety shields and reinforced frames that protect you and your machinery for optimal longevity."
  },
  {
    icon: Cog,
    title: "Strength & Mobility",
    desc: "Cross-training gearbox technology to build runner-specific strength and prevent injury to the mechanism."
  },
  {
    icon: Award,
    title: "Recovery Protocols",
    desc: "Easy maintenance access points ensuring your machine recovers quickly after a long harvest season."
  }
];

const Features = () => {
  return (
    <section className="bg-zinc-950 py-24 border-b border-zinc-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16 text-center lg:text-left">
           <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block font-heading italic">The Agricrown Method</span>
           <h2 className="text-5xl md:text-6xl font-heading font-bold text-white uppercase italic">Why Choose Agricrown</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="flex gap-6 p-8 bg-black border border-zinc-900 hover:border-primary/50 transition-colors group">
              <div className="shrink-0">
                 <div className="w-12 h-12 bg-zinc-900 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <feature.icon className="text-primary w-6 h-6 group-hover:text-black transition-colors" />
                 </div>
              </div>
              <div>
                <h3 className="text-white font-heading font-bold text-xl uppercase italic mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
