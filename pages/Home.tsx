
import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import Stats from '../components/sections/Stats';
import FeaturedSpotlight from '../components/sections/FeaturedSpotlight';
import ProductShowcase from '../components/sections/ProductShowcase';
import Services from '../components/sections/Services';
import AboutSection from '../components/sections/AboutSection';
import HowItWorks from '../components/sections/HowItWorks';
import Testimonials from '../components/sections/Testimonials';
import FAQ from '../components/sections/FAQ';
import CTA from '../components/sections/CTA';

const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-300"
    >
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
    </motion.main>
  );
};

export default Home;
