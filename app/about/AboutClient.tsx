"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Users, Globe, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutClient() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white dark:bg-black min-h-screen pt-16 md:pt-20 transition-colors duration-300"
    >
      {/* Hero Banner */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/banner3.jpg"
            alt="Farm"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60 dark:bg-black/70 z-10" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <div className="max-w-4xl">
            <span className="bg-primary text-white text-[10px] md:text-xs font-bold px-2 py-1 md:px-3 md:py-1 uppercase tracking-widest inline-block mb-2 md:mb-4">
              Since 1999
            </span>

            <h1 className="text-4xl md:text-7xl font-heading font-bold text-white uppercase italic leading-none mb-4 md:mb-6 drop-shadow-2xl">
              Cultivating <br /> The Future
            </h1>

            <p className="text-sm md:text-xl text-gray-200 max-w-2xl leading-relaxed font-light border-l-4 border-primary pl-4 md:pl-6">
              Driven by a single mission: to empower farmers with machinery that
              is built to last, perform, and endure.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Split Section */}
      <section className="py-12 md:py-24 bg-white dark:bg-black text-black dark:text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="text-primary font-bold tracking-widest uppercase text-[10px] md:text-xs mb-2 block font-heading italic">
                Our Story
              </span>

              <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase italic mb-6 md:mb-8 leading-tight">
                Engineering Excellence <br />
                <span className="text-zinc-400 dark:text-zinc-600">
                  For Over 2 Decades
                </span>
              </h2>

              <div className="space-y-4 md:space-y-6 text-sm md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <p>
                  Agricrown was founded on the belief that agricultural machinery
                  should be as resilient as the farmers who use it. What started
                  as a small workshop has grown into a global manufacturing
                  powerhouse.
                </p>

                <p>
                  Our ISO 9001:2015 certified facility employs state-of-the-art
                  robotics and precision engineering to ensure every gear, blade,
                  and bolt meets our rigorous quality standards.
                </p>
              </div>

              <div className="mt-8 md:mt-10 grid grid-cols-2 gap-4 md:gap-8">
                <div>
                  <span className="text-4xl md:text-5xl font-heading font-bold text-primary italic">
                    25+
                  </span>
                  <span className="block text-xs md:text-sm font-bold uppercase text-zinc-500 tracking-widest mt-1">
                    Years Experience
                  </span>
                </div>

                <div>
                  <span className="text-4xl md:text-5xl font-heading font-bold text-primary italic">
                    15+
                  </span>
                  <span className="block text-xs md:text-sm font-bold uppercase text-zinc-500 tracking-widest mt-1">
                    Countries Served
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative w-full mt-4 lg:mt-0">
              <div className="aspect-[4/3] bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 relative z-10">
                <Image
                  src="https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80&w=1200&auto=format&fit=crop"
                  alt="Factory"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-20 h-20 md:w-32 md:h-32 bg-primary/10 z-0" />
              <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-20 h-20 md:w-32 md:h-32 border-2 border-primary/20 z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="bg-zinc-50 dark:bg-zinc-950 py-12 md:py-24 border-y border-zinc-200 dark:border-zinc-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-[10px] md:text-xs mb-2 block font-heading italic">
              Core Values
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase italic">
              Why We Lead
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              {
                icon: Globe,
                title: "Global Vision",
                desc: "Adapting technology to diverse soils worldwide.",
              },
              {
                icon: Award,
                title: "Quality First",
                desc: "Zero compromise. Only high-grade boron steel.",
              },
              {
                icon: Users,
                title: "Farmer Focused",
                desc: "Innovations driven by direct field feedback.",
              },
              {
                icon: TrendingUp,
                title: "Sustainable",
                desc: "Promoting soil health and fuel efficiency.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white dark:bg-black p-6 md:p-8 border border-zinc-200 dark:border-zinc-800 hover:border-primary transition-colors group shadow-sm"
              >
                <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <item.icon className="w-6 h-6 text-black dark:text-white group-hover:text-white" />
                </div>

                <h3 className="text-lg md:text-xl font-heading font-bold uppercase italic mb-2">
                  {item.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-12 md:py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase italic mb-4">
              Our Journey
            </h2>

            <p className="text-zinc-600 dark:text-zinc-400 mb-8">
              From a single workshop to an international brand, our history is
              defined by constant innovation.
            </p>

            <Link href="/contact">
              <Button className="w-full h-14 font-bold italic">
                Partner With Us
              </Button>
            </Link>
          </div>

          <div className="lg:col-span-2 space-y-8">
            {[
              {
                year: "1999",
                title: "Foundation",
                desc: "Agricrown established in Punjab with a small lathe workshop.",
              },
              {
                year: "2008",
                title: "Titanium Series",
                desc: "Launch of our flagship heavy-duty tiller series.",
              },
              {
                year: "2015",
                title: "Global Export",
                desc: "Started exporting to 5 countries in Southeast Asia.",
              },
              {
                year: "2023",
                title: "Smart Tillage",
                desc: "Introduced IoT-enabled prototypes for precision farming.",
              },
            ].map((m, i) => (
              <div key={i} className="flex gap-6">
                <div className="w-20 text-2xl font-heading font-bold italic text-zinc-300">
                  {m.year}
                </div>
                <div className="border-l pl-6">
                  <h3 className="font-heading font-bold uppercase italic">
                    {m.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
