"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

export default function PersonalizedFiberCreations() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">

      {/* HERO */}
      <motion.div
        className="max-w-3xl mx-auto text-center px-4 sm:px-6"
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
          Personalized Fiber Creations
        </h1>

        <p className="text-base sm:text-lg text-gray-600 mt-4">
          Custom-made fiber décor sculptures, artistic props, and creative installations —
          uniquely designed to match your theme and event vision.
        </p>
      </motion.div>

      {/* SHOWCASE IMAGE */}
      <motion.div
        className="mt-10 sm:mt-16 max-w-5xl mx-auto px-4 sm:px-6"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative w-full h-56 sm:h-80 lg:h-[430px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="/assets/services/custom.jpg"
            alt="Personalized Fiber Creations"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* DESCRIPTION */}
      <motion.div
        className="max-w-3xl mx-auto mt-10 sm:mt-14 px-4 sm:px-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          Bring your imagination to life with completely customized fiber creations.
          Whether it’s statues, thematic props, decorative installations, or
          signature event pieces — we craft each element with precision and artistic detail.
        </p>
      </motion.div>

      {/* FEATURES GRID */}
      <motion.div
        className="max-w-5xl mx-auto mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {[
          "Custom-made fiber sculptures & art pieces",
          "Concept-based props for events & branding",
          "Expert handcrafted detailing",
          "Durable, lightweight fiber materials",
          "Ideal for themed weddings & exhibitions",
          "Client-specific designs based on concepts",
        ].map((feature, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-3 bg-white p-4 sm:p-5 rounded-xl shadow-md hover:shadow-lg transition"
            whileHover={{ scale: 1.03 }}
          >
            <FiCheckCircle className="text-orange-500 mt-1 shrink-0" size={24} />
            <p className="text-gray-700 text-sm sm:text-base">{feature}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        className="flex justify-center mt-12 sm:mt-16 px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
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
