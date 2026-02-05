
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import FeaturedSpotlight from '@/components/sections/FeaturedSpotlight';
import ProductShowcase from '@/components/sections/ProductShowcase';
import Services from '@/components/sections/Services';
import AboutSection from '@/components/sections/AboutSection';
import HowItWorks from '@/components/sections/HowItWorks';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedSpotlight />
      <ProductShowcase />
      <Services />
      <AboutSection />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
