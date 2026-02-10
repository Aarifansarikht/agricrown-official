"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Share2, Printer, ZoomIn } from "lucide-react";
import { formatCurrency, cn } from "@/lib/utils";
import FAQ from "@/components/sections/FAQ";
import Link from "next/link";
import Image from "next/image";

/* ---------------- Zoom Image Component ---------------- */
const ZoomableImage = ({ src, alt }: { src: string; alt: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPosition({ x, y });
  };

  return (
    <div
      className="relative w-full h-full overflow-hidden cursor-zoom-in bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={cn(
          "object-contain transition-opacity duration-300",
          isHovered ? "opacity-0" : "opacity-100"
        )}
      />

      <div
        className={cn(
          "absolute inset-0 pointer-events-none transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0"
        )}
        style={{
          backgroundImage: `url(${src})`,
          backgroundPosition: `${position.x}% ${position.y}%`,
          backgroundSize: "200%",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="absolute bottom-4 right-4 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
        <ZoomIn size={16} />
      </div>
    </div>
  );
};

/* ---------------- MAIN CLIENT ---------------- */
export default function ProductDetailClient({ product }: { product: any }) {
  const [activeTab, setActiveTab] = useState<"specs" | "desc">("specs");
  const [activeImage, setActiveImage] = useState(0);

  const allImages = [product.image, ...product.gallery];

  return (
   
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white dark:bg-black min-h-screen pt-16 md:pt-20 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 mb-12 md:mb-20">
          {/* Left: Image Gallery */}
          <div className="w-full lg:w-1/2 space-y-3 md:space-y-4">
            <div className="aspect-[4/3] w-full relative">
              <ZoomableImage src={allImages[activeImage]} alt={product.name} />
            </div>
            <div className="grid grid-cols-4 gap-2 md:gap-4">
              {allImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={cn(
                    "relative aspect-square border p-1 md:p-2 cursor-pointer transition-all hover:opacity-100 bg-zinc-50 dark:bg-zinc-900",
                    activeImage === idx
                      ? "border-primary opacity-100 ring-1 ring-primary"
                      : "border-zinc-200 dark:border-zinc-800 opacity-60 hover:border-primary",
                  )}
                >
                  <Image src={img} alt="" fill className="object-contain" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Details & Actions */}
          <div className="w-full lg:w-1/2">
            <div className="mb-8">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3 md:mb-4 border border-primary/20">
                {product.series} Series
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-black dark:text-white uppercase mb-3 md:mb-4 italic leading-none">
                {product.name}
              </h1>

              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="flex text-primary">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <span className="text-xs md:text-sm text-zinc-500 font-bold uppercase tracking-wider">
                  (24 Reviews)
                </span>
              </div>

              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6 md:mb-8 text-sm md:text-lg font-light">
                {product.description}
              </p>

              {/* Quick Specs */}
              <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8 bg-zinc-50 dark:bg-zinc-900/50 p-4 md:p-6 border border-zinc-100 dark:border-zinc-800">
                <div>
                  <span className="text-[10px] md:text-xs text-zinc-500 uppercase font-bold block mb-1">
                    Tractor Power
                  </span>
                  <span className="text-sm md:text-lg font-heading font-bold text-black dark:text-white">
                    {product.specifications[0].tractorPowerHP} HP
                  </span>
                </div>
                <div>
                  <span className="text-[10px] md:text-xs text-zinc-500 uppercase font-bold block mb-1">Weight</span>
                  <span className="text-sm md:text-lg font-heading font-bold text-black dark:text-white">
                    {product.specifications[0].netWeight}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] md:text-xs text-zinc-500 uppercase font-bold block mb-1">Gearbox</span>
                  <span className="text-sm md:text-lg font-heading font-bold text-black dark:text-white">
                    {product.specifications[0].gearBoxType}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] md:text-xs text-zinc-500 uppercase font-bold block mb-1">Blades</span>
                  <span className="text-sm md:text-lg font-heading font-bold text-black dark:text-white">
                    {product.specifications[0].noOfBlades}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
                {product.features.map((feature: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, idx: React.Key | null | undefined) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 bg-zinc-100 dark:bg-zinc-900 text-black dark:text-white text-[10px] md:text-xs font-bold uppercase rounded-sm border border-zinc-200 dark:border-zinc-800"
                  >
                    <Check size={12} className="text-primary md:w-[14px] md:h-[14px]" /> {feature}
                  </span>
                ))}
              </div>

              {/* Distributorship Banner */}
              <div className="bg-zinc-900 dark:bg-zinc-800 border-l-4 border-primary p-4 md:p-6 mb-6 md:mb-8">
                <p className="text-zinc-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1">
                  Estimated Retail Price
                </p>
                <p className="font-heading font-bold text-2xl md:text-4xl text-white italic">
                  {formatCurrency(product.price)}*
                </p>
                <p className="text-zinc-500 text-[9px] md:text-[10px] mt-2">
                  *Prices vary by region and configuration. Contact for exact quote.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-row gap-3 md:gap-4 sticky bottom-4 lg:static z-20">
                <Link href="/contact" className="flex-1">
                  <Button
                    size="lg"
                    className="w-full bg-primary text-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-none h-14 md:h-16 font-bold text-base md:text-lg shadow-xl uppercase italic"
                  >
                    Enquiry Now
                  </Button>
                </Link>

                <Button
                  variant="outline"
                  className="h-14 md:h-16 w-14 md:w-16 rounded-none border-zinc-300 dark:border-zinc-700 text-black dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center justify-center p-0 bg-white"
                >
                  <Share2 size={20} className="md:w-[24px] md:h-[24px]" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Tabs Section */}
        <div className="mb-12 md:mb-20">
          <div className="flex border-b border-zinc-200 dark:border-zinc-800 mb-6 md:mb-8 overflow-x-auto">
            <button
              onClick={() => setActiveTab("specs")}
              className={cn(
                "px-4 md:px-8 py-3 md:py-4 font-heading font-bold uppercase italic text-sm md:text-lg transition-colors border-b-2 whitespace-nowrap",
                activeTab === "specs"
                  ? "border-primary text-black dark:text-white"
                  : "border-transparent text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300",
              )}
            >
              Technical Specifications
            </button>
            <button
              onClick={() => setActiveTab("desc")}
              className={cn(
                "px-4 md:px-8 py-3 md:py-4 font-heading font-bold uppercase italic text-sm md:text-lg transition-colors border-b-2 whitespace-nowrap",
                activeTab === "desc"
                  ? "border-primary text-black dark:text-white"
                  : "border-transparent text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300",
              )}
            >
              Product Description
            </button>
          </div>

          <div className="min-h-[300px] md:min-h-[400px]">
            {activeTab === "specs" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="overflow-x-auto">
                <table className="w-full text-xs md:text-sm text-left border-collapse min-w-[600px]">
                  <thead className="bg-zinc-100 dark:bg-zinc-900 text-black dark:text-white uppercase font-heading text-[10px] md:text-xs">
                    <tr>
                      <th className="px-4 py-3 md:px-6 md:py-4 border border-zinc-200 dark:border-zinc-800">
                        Parameter
                      </th>
                      {product.specifications.map((spec: { sizeFt: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }, i: React.Key | null | undefined) => (
                        <th
                          key={i}
                          className="px-4 py-3 md:px-6 md:py-4 border border-zinc-200 dark:border-zinc-800 text-center min-w-[120px] md:min-w-[150px]"
                        >
                          {spec.sizeFt} Model
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-black">
                    {[
                      { label: "Overall Dimension (mm)", key: "overallDimension" },
                      { label: "Tillage Width (mm)", key: "tillageWidth" },
                      { label: "Tillage Depth", key: "tillageDepth" },
                      { label: "Gear Box Type", key: "gearBoxType" },
                      { label: "Transmission", key: "sideTransmission" },
                      { label: "Crown Pinion", key: "crownPinion" },
                      { label: "Tractor Power (HP)", key: "tractorPowerHP" },
                      { label: "Sheet Thickness", key: "frameSheetThickness" },
                      { label: "No. of Blades", key: "noOfBlades" },
                      { label: "Net Weight (kg)", key: "netWeight" },
                    ].map((row, rowIdx) => (
                      <tr key={rowIdx} className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
                        <td className="px-4 py-3 md:px-6 md:py-4 font-bold text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 uppercase text-[10px] md:text-xs tracking-wider">
                          {row.label}
                        </td>
                        {product.specifications.map((spec: any, colIdx: React.Key | null | undefined) => (
                          <td
                            key={colIdx}
                            className="px-4 py-3 md:px-6 md:py-4 text-center text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 font-medium"
                          >
                            {spec[row.key]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="mt-4 flex justify-end">
                  <Button
                    variant="ghost"
                    className="text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white text-xs md:text-sm"
                  >
                    <Printer className="mr-2 h-3 w-3 md:h-4 md:w-4" /> Print Spec Sheet
                  </Button>
                </div>
              </motion.div>
            )}

            {activeTab === "desc" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-4xl text-zinc-600 dark:text-zinc-300 leading-relaxed space-y-4 md:space-y-6 text-sm md:text-base"
              >
                <p>
                  The {product.name} represents the culmination of over two decades of agricultural engineering
                  expertise. Designed specifically for farmers who demand reliability in the most challenging
                  conditions.
                </p>
                <h3 className="text-lg md:text-xl font-heading font-bold text-black dark:text-white uppercase italic">
                  Key Benefits
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 bg-primary rounded-full" />
                    <span>Reduced fuel consumption due to optimized gear ratios.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 bg-primary rounded-full" />
                    <span>Higher soil pulverization for better seedbed preparation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 bg-primary rounded-full" />
                    <span>Maintenance-free sealing system for longer bearing life.</span>
                  </li>
                </ul>
              </motion.div>
            )}
          </div>
        </div>

        {/* Related Products / FAQ */}
        <FAQ />
      </div>
    

    </motion.div>
  );
}
