"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ServiceCard({ imageSrc, title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-2xl shadow-lg p-6 flex flex-col 
                 hover:shadow-2xl transition-all duration-300 border border-gray-100"
    >
      {/* Image */}
      <div className="w-full h-40 relative rounded-xl overflow-hidden mb-4">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-base text-center mb-6 flex-grow">
        {description}
      </p>

      {/* Button */}
      <div className="flex justify-center">
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className="bg-orange-500 text-white px-6 py-2 
                     shadow-md text-sm font-semibold hover:bg-orange-600 
                     transition"
        >
          Check Out
        </motion.button>
      </div>
    </motion.div>
  );
}
