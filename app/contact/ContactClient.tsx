"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactClient() {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const firstName = firstNameRef.current?.value || "";
    const lastName = lastNameRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const message = messageRef.current?.value || "";

    const subject = encodeURIComponent("New Contact Enquiry");
    const body = encodeURIComponent(
      `Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=sales@agricrown.com&su=${subject}&body=${body}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-zinc-50 dark:bg-black min-h-screen pt-14 md:pt-20 transition-colors"
    >
      {/* ================= HERO ================= */}
      <section className="relative h-[36vh] sm:h-[38vh] md:h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80&w=2000&auto=format&fit=crop"
            alt="Contact"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <span className="inline-block bg-primary text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest mb-3">
            Get In Touch
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-7xl font-heading font-bold uppercase italic text-white leading-tight mb-4">
            Start Your <br /> Journey
          </h1>

          <p className="text-xs sm:text-sm md:text-xl text-gray-200 max-w-xl border-l-4 border-primary pl-4">
            We are here to assist you. Whether it's sales, support, or partnership
            inquiries.
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <div className="container mx-auto px-4 py-10 md:py-16">
        <div className="relative z-20 flex flex-col lg:flex-row gap-6 md:gap-8 -mt-14 md:-mt-24">
          {/* ===== LEFT CARD ===== */}
          <div className="w-full lg:w-5/12 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 md:p-12">
            <span className="block text-primary text-[10px] uppercase tracking-widest font-heading font-bold italic mb-3 ">
              Contact Details
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold uppercase italic leading-tight mb-8">
              We're Here <br /> To Help
            </h2>

            <div className="space-y-8">
              <LeftItem icon={<MapPin size={20} />} title="Headquarters">
                <a
                  href="https://maps.google.com/?q=123 Industrial Area Phase 2 New Delhi 110020"
                  target="_blank"
                  className="hover:text-primary transition-colors"
                >
                  123 Industrial Area, Phase 2<br />
                  New Delhi, India 110020
                </a>
              </LeftItem>

              <LeftItem icon={<Phone size={20} />} title="Phone">
                <a href="tel:+919876543210" className="block hover:text-primary">
                  +91 98765 43210
                </a>
                <a href="tel:+911123456789" className="block hover:text-primary">
                  +91 11 2345 6789
                </a>
              </LeftItem>

              <LeftItem icon={<Mail size={20} />} title="Email">
                <a href="mailto:sales@agricrown.com" className="block hover:text-primary">
                  sales@agricrown.com
                </a>
                <a href="mailto:support@agricrown.com" className="block hover:text-primary">
                  support@agricrown.com
                </a>
              </LeftItem>
            </div>
          </div>

          {/* ===== RIGHT CARD ===== */}
          <div className="w-full lg:w-7/12 bg-zinc-100 dark:bg-black border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 md:p-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold uppercase italic mb-6">
              Send Message
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputBlock refProp={firstNameRef} label="First Name" placeholder="John" />
                <InputBlock refProp={lastNameRef} label="Last Name" placeholder="Doe" />
              </div>

              <InputBlock refProp={emailRef} label="Email Address" placeholder="john@example.com" />

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                  Message
                </label>
                <textarea
                  ref={messageRef}
                  className="w-full min-h-[140px] border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-3 text-sm text-black dark:text-white resize-none focus:outline-none focus:border-primary"
                  placeholder="How can we help you?"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-14 md:h-16 bg-primary text-black hover:bg-black hover:text-white font-bold uppercase tracking-widest italic rounded-none shadow-xl"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ================= HELPERS ================= */

function LeftItem({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-primary shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-bold uppercase italic tracking-wider text-xs mb-1">
          {title}
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
          {children}
        </p>
      </div>
    </div>
  );
}

function InputBlock({
  label,
  placeholder,
  refProp,
}: {
  label: string;
  placeholder: string;
  refProp: any;
}) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">
        {label}
      </label>
      <Input
        ref={refProp}
        placeholder={placeholder}
        className="h-12 md:h-14 bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-800 rounded-none text-sm focus:border-primary focus:ring-0"
      />
    </div>
  );
}
