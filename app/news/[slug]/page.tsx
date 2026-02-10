import { notFound } from "next/navigation";
import { newsItems } from "@/lib/data";
import NewsDetailClient from "../NewsDetailClient";


export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const news = newsItems.find((n) => n.slug === slug);

  if (!news) {
    notFound();
  }

  return <NewsDetailClient news={news} />;
}
