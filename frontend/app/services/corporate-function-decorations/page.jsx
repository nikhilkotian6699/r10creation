"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

export default function CorporateFunctionDecorPage() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">

      {/* HERO SECTION */}
      <motion.div
        className="max-w-3xl mx-auto text-center px-4 sm:px-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
          Corporate Function Decorations
        </h1>

        <p className="text-base sm:text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Professional, modern, and brand-focused décor tailored for corporate
          events, conferences, product launches, award functions, and business celebrations.
        </p>
      </motion.div>

      {/* MAIN SHOWCASE IMAGE */}
      <motion.div
        className="mt-10 sm:mt-14 max-w-5xl mx-auto px-4 sm:px-6"
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="relative w-full h-56 sm:h-80 lg:h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="/assets/services/corporate-main.jpg"
            alt="Corporate Function Decorations"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* SECTION DIVIDER */}
      <motion.div
        className="mt-12 sm:mt-16 flex justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="w-20 sm:w-24 h-1 bg-orange-500 rounded-full"></div>
      </motion.div>

      {/* DESCRIPTION */}
      <motion.div
        className="max-w-3xl mx-auto mt-10 sm:mt-12 px-4 sm:px-6 text-center"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          Our corporate décor solutions blend sleek modern styling with brand-driven design.
          From premium stage setups to customized fiber installations, we create professional,
          visually striking environments for corporate galas, conferences, product launches,
          seminars, exhibitions, and award functions — ensuring your brand leaves a lasting impact.
        </p>
      </motion.div>

      {/* FEATURES GRID */}
      <motion.div
        className="max-w-5xl mx-auto mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        {[
          "Modern and elegant event styling",
          "Brand-focused décor and custom themes",
          "Premium fiber props and stage elements",
          "Perfect for conferences & product launches",
          "Professional backdrops & installations",
          "Ideal for award events, seminars & exhibitions",
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-3 bg-white p-4 sm:p-5 rounded-xl shadow-md hover:shadow-lg transition"
            whileHover={{ scale: 1.03 }}
          >
            <FiCheckCircle className="text-orange-500 mt-1 shrink-0" size={24} />
            <p className="text-gray-700 text-sm sm:text-base">{feature}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA BUTTON */}
      <motion.div
        className="flex justify-center mt-12 sm:mt-16 px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          className="bg-orange-500 text-white px-8 py-2.5 sm:px-10 sm:py-3 
                     text-base sm:text-lg font-semibold rounded-lg sm:rounded-xl 
                     shadow-md hover:bg-orange-600 transition w-full sm:w-auto text-center"
        >
          Contact Us
        </motion.a>
      </motion.div>

    </section>
  );
}
