import { notFound } from "next/navigation";
import { products } from "@/lib/data";
import ProductDetailClient from "../ProductDetailClient";


export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}
