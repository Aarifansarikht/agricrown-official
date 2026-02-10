import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Filter } from "lucide-react";
import { products } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";
import ProductsClient from "./ProductsClient";


export default function ProductsPage() {
  return (
    <ProductsClient>
      {/* ================= HEADER ================= */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center overflow-hidden bg-zinc-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1592323089535-649fa7e4b2d3?q=80&w=2000&auto=format&fit=crop"
            alt="Products"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <span className="bg-primary text-white text-[10px] md:text-xs font-bold px-3 py-1 uppercase tracking-widest inline-block mb-4">
              Our Catalogue
            </span>

            <h1 className="text-4xl md:text-7xl font-heading font-bold uppercase italic leading-none mb-6">
              Engineered For <br /> Dominance
            </h1>

            <p className="text-sm md:text-xl text-gray-200 max-w-2xl border-l-4 border-primary pl-4 md:pl-6">
              Explore our range of Titanium and Alfha series rotary tillers.
              Precision engineered for the modern farmer.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <div className="container mx-auto px-4 lg:px-8 py-12 md:py-16">
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 md:mb-12 bg-white dark:bg-zinc-900 p-4 border border-zinc-200 dark:border-zinc-800 shadow-sm">
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-zinc-500">
              <Filter size={16} /> Filters:
            </span>

            {["All", "Rotary Tillers", "Spare Parts", "Accessories"].map(
              (filter, i) => (
                <button
                  key={filter}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border transition-colors ${
                    i === 0
                      ? "bg-primary border-primary text-black"
                      : "border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-primary hover:text-primary"
                  }`}
                >
                  {filter}
                </button>
              )
            )}
          </div>

          <span className="text-xs font-bold uppercase text-zinc-500">
            Showing {products.length} Results
          </span>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group block bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-primary transition-all shadow-sm hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100 dark:bg-zinc-950">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest italic">
                  {product.series}
                </span>

                {product.isNew && (
                  <span className="absolute top-4 right-4 bg-black text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest border border-zinc-800">
                    New Arrival
                  </span>
                )}
              </div>

              <div className="p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-heading font-bold uppercase italic mb-3 group-hover:text-primary transition-colors">
                  {product.name}
                </h2>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 line-clamp-2">
                  {product.shortDescription}
                </p>

                <div className="flex gap-2 mb-6">
                  {product.features.slice(0, 2).map((feature) => (
                    <span
                      key={feature}
                      className="text-[10px] font-bold uppercase px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t pt-4">
                  <span className="font-bold text-lg">
                    {formatCurrency(product.price)}
                  </span>
                  <span className="text-xs font-bold uppercase italic flex items-center gap-1 group-hover:text-primary transition-all">
                    View Details <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </ProductsClient>
  );
}
