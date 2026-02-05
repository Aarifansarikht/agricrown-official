
import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Mail, Phone } from 'lucide-react';
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-zinc-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
           <div className="flex items-center">
  <div className="relative h-20 w-auto">
    <Image
      src="/logo.png"
      alt="AgriCrown Logo"
      width={180}
      height={60}
      className="h-full w-auto object-contain"
    />
  </div>
</div>

            <p className="text-gray-400 text-sm leading-relaxed">
              AgriCrown delivers high-performance agricultural machinery designed for durability and efficiency. Empowering farmers with technology that lasts.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-heading font-bold text-lg uppercase mb-6 text-primary">Products</h4>
            <ul className="space-y-3">
              <li><Link href="/products" className="text-gray-400 hover:text-white text-sm transition-colors">All Tillers</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-white text-sm transition-colors">Titanium Series</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-white text-sm transition-colors">Alfha Series</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-white text-sm transition-colors">Spare Parts</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-white text-sm transition-colors">Accessories</Link></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-heading font-bold text-lg uppercase mb-6 text-primary">Information</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-400 hover:text-white text-sm transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact Support</Link></li>
              <li><Link href="/news" className="text-gray-400 hover:text-white text-sm transition-colors">Latest News</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Warranty & Service</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Distributor Login</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg uppercase mb-6 text-primary">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>123 Industrial Area, Phase 2, New Delhi, India 110020</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail size={18} className="text-primary shrink-0" />
                <span>sales@agricrown.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">© 2024 Agricrown Machinery. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
