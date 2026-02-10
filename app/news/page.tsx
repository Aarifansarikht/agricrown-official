import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { newsItems } from "@/lib/data";
import NewsClient from "./NewsClient";


export default function NewsPage() {
  return (
    <NewsClient>
      {/* Header */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2000&auto=format&fit=crop"
            alt="News"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <div className="max-w-4xl">
            <span className="bg-primary text-white text-[10px] md:text-xs font-bold px-3 py-1 uppercase tracking-widest inline-block mb-3 md:mb-4">
              Insights
            </span>

            <h1 className="text-4xl md:text-7xl font-heading font-bold text-white uppercase italic leading-none mb-4 md:mb-6">
              Latest <br /> Updates
            </h1>

            <p className="text-sm md:text-xl text-gray-200 max-w-2xl border-l-4 border-primary pl-4 md:pl-6">
              Updates from the field, product announcements, and agricultural tips.
            </p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <div className="container mx-auto px-4 lg:px-8 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {newsItems.map((item) => (
            <Link href={`/news/${item.slug}`} key={item.slug} className="block h-full">
              <article className="bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 group hover:border-primary transition-colors flex flex-col h-full shadow-sm hover:shadow-xl">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="flex items-center justify-between text-[10px] md:text-xs font-bold uppercase tracking-wider text-zinc-500 mb-4">
                    <span className="text-primary">{item.category}</span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {item.date}
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl font-heading font-bold uppercase mb-4 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6 line-clamp-3">
                    {item.excerpt}
                  </p>

                  <span className="mt-auto inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b pb-1 group-hover:text-primary group-hover:border-primary transition-all">
                    Read Article <ArrowRight size={14} />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </NewsClient>
  );
}
