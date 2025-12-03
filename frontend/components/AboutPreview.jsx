"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPreview() {
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
      },
    }),
  };

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text Section */}
        <div className="md:w-1/2">
          <motion.p
            className="text-orange-500 uppercase text-sm sm:text-base font-semibold mb-2 tracking-wide"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            custom={1}
            viewport={{ once: true }}
          >
            About Textica
          </motion.p>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            custom={2}
            viewport={{ once: true }}
          >
            Innovation Meets Textile Technology
          </motion.h2>

          <motion.p
            className="text-gray-600 text-sm sm:text-base leading-relaxed"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            custom={3}
            viewport={{ once: true }}
          >
            At Textica, we combine traditional craftsmanship with cutting-edge technology to deliver high-quality fabrics, sustainable solutions, and bespoke textile services for modern fashion and industrial applications.
          </motion.p>



<motion.div
  variants={textVariant}
  initial="hidden"
  whileInView="visible"
  custom={4}
  viewport={{ once: true }}
>
  <Link href="/about">
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="mt-6 bg-orange-500 text-white uppercase px-6 py-3 font-semibold rounded hover:bg-orange-600 transition"
    >
      Learn More
    </motion.button>
  </Link>
</motion.div>

        </div>

        {/* Image Section */}
        <div className="md:w-1/2 relative h-64 md:h-96 shadow-lg rounded-lg overflow-hidden">
          <Image
            src="/assets/images/about/hero1.jpeg"
            alt="About Textica"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
