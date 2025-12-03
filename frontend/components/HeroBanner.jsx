"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight, FiArrowRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    src: "/assets/images/hero/hero1.jpeg",
    preHeadline: "Welcome To Textica",
    headline: "From Smart Fabrics Innovation in Technology",
    alt: "Textile machinery with colorful threads",
  },
  {
    src: "/assets/images/hero/hero1.jpeg",
    preHeadline: "Innovation Meets Fashion",
    headline: "Next-Level Smart Fabrics and Technology",
    alt: "Advanced textile manufacturing machinery",
  },
  {
    src: "/assets/images/hero/hero1.jpeg",
    preHeadline: "Quality in Every Thread",
    headline: "Cutting-Edge Textile Solutions for Modern Fashion",
    alt: "Close-up of modern textile machines",
  },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">

      {/* Background Image with animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={slides[current].src}
            alt={slides[current].alt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <FiChevronLeft
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-5xl opacity-70 hover:opacity-100 cursor-pointer z-10"
      />
      <FiChevronRight
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-5xl opacity-70 hover:opacity-100 cursor-pointer z-10"
      />

      {/* Centered Text Overlay */}
      <div className="relative text-center z-10 max-w-3xl px-6 space-y-6">
        {/* Pre-headline */}
        <motion.p
          key={current + "-pre"}
          className="text-orange-500 uppercase tracking-wide text-sm md:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          {slides[current].preHeadline}
        </motion.p>

        {/* Headline */}
        <motion.h1
          key={current + "-headline"}
          className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-snug md:leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 1 }}
        >
          {slides[current].headline}
        </motion.h1>

        {/* CTA Button */}
        <motion.button
          key={current + "-btn"}
          className="mt-4 sm:mt-6 bg-orange-500 text-white uppercase px-8 py-3 font-semibold flex items-center gap-2 mx-auto hover:bg-orange-600 transition"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Read More <FiArrowRight />
        </motion.button>
      </div>
    </section>
  );
}
