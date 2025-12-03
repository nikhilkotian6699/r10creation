"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUsPage() {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay },
    },
  });

  return (
    <div className="bg-gray-50">
      
      {/* ------------------------------------------------- */}
      {/* HERO SECTION */}
      {/* ------------------------------------------------- */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="/assets/images/about/hero1.jpeg"
          alt="R10 Creations Hero"
          fill
          className="object-cover brightness-75"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg"
            {...fadeUp(0.1)}
          >
            R10 Creations
          </motion.h1>

          <motion.p
            className="text-orange-300 text-xl md:text-2xl mt-4 font-semibold drop-shadow"
            {...fadeUp(0.3)}
          >
            Transforming Fiber into Dreams
          </motion.p>

          <motion.p
            className="text-gray-200 mt-3 text-lg"
            {...fadeUp(0.45)}
          >
            Decorative Fiber Products & Custom Creations
          </motion.p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 space-y-20">
        
        {/* ------------------------------------------------- */}
        {/* ABOUT SECTION - WITH IMAGE */}
        {/* ------------------------------------------------- */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* TEXT */}
          <motion.div {...fadeUp(0.1)} className="space-y-5">
            <h2 className="text-3xl font-bold text-gray-900">About Us</h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              R10 Creations specializes in innovative decorative fiber products 
              designed to enhance homes, events, and public spaces. Our creations include 
              fiber vases, statues, sacred idols, altar décor, custom monuments, 
              and large-scale event installations.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              Every piece is handcrafted with precision — blending 
              traditional artistry with modern design to deliver 
              lightweight, durable, and visually stunning fiber décor solutions.
            </p>
          </motion.div>

          {/* IMAGE */}
          <motion.div {...fadeUp(0.2)}>
            <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/assets/images/about/fiber-work.jpeg"
                alt="Fiber Crafting"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* ------------------------------------------------- */}
        {/* VISION & MISSION */}
        {/* ------------------------------------------------- */}
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Vision */}
          <motion.div
            {...fadeUp(0.2)}
            className="p-8 bg-white shadow-xl rounded-2xl border hover:shadow-2xl transition"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Vision</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              To redefine decorative spaces with world-class fiber creations 
              that inspire beauty, spirituality, and innovation.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            {...fadeUp(0.3)}
            className="p-8 bg-white shadow-xl rounded-2xl border hover:shadow-2xl transition"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Mission</h3>
            <ul className="list-disc ml-6 space-y-3 text-gray-700 text-lg">
              <li>Deliver high-quality, long-lasting fiber décor solutions.</li>
              <li>Create customized designs for homes, events & monuments.</li>
              <li>Innovate continuously in decorative fiber artistry.</li>
            </ul>
          </motion.div>
        </div>

        {/* ------------------------------------------------- */}
        {/* PRODUCTS & SERVICES (with icons + better layout) */}
        {/* ------------------------------------------------- */}
        <motion.div {...fadeUp(0.2)} className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Products & Services</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Fiber Vases & Art Pieces",
              "Fiber Statues & Sacred Idols",
              "Altar Décor & Custom Monuments",
              "Stage & Event Decorations",
              "Wedding & Cultural Event Installations",
              "Corporate Fiber Art Solutions",
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.04 }}
                className="p-5 bg-white rounded-xl shadow border hover:shadow-xl transition text-lg text-gray-700"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ------------------------------------------------- */}
        {/* WHY CHOOSE US - CARDS */}
        {/* ------------------------------------------------- */}
        <motion.div {...fadeUp(0.25)} className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose R10 Creations?</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Creative, custom-made fiber products",
              "Durable yet lightweight vs stone or wood",
              "Affordable solutions with premium quality",
              "Perfect for homes, temples & event spaces",
              "A fusion of art, culture & modern design",
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="p-6 bg-white shadow-md border rounded-xl hover:shadow-xl transition text-lg text-gray-700"
              >
                {benefit}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ------------------------------------------------- */}
        {/* FINAL QUOTE */}
        {/* ------------------------------------------------- */}
        <motion.div {...fadeUp(0.3)} className="text-center pt-10">
          <p className="text-2xl font-semibold text-orange-600">
            R10 Creations – Transforming Fiber into Dreams
          </p>
        </motion.div>

      </div>
    </div>
  );
}
