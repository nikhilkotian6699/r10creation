"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.slug}`}>
      <motion.div
        whileHover={{ y: -8 }}
        className="
          group 
          bg-white 
          rounded-2xl 
          shadow-md 
          hover:shadow-2xl 
          overflow-hidden 
          cursor-pointer 
          transition-all 
          duration-500 
          border 
          border-gray-200 
          bg-gradient-to-b 
          from-white 
          to-gray-50
          max-w-full
        "
      >
        {/* Image */}
        <div className="relative w-full h-56 sm:h-64 md:h-72 overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Hover overlay */}
          <div
            className="
              absolute inset-0 
              bg-gradient-to-t from-black/40 to-transparent 
              opacity-0 
              group-hover:opacity-100 
              transition duration-500
            "
          ></div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 flex flex-col space-y-3">
          {/* Title */}
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-orange-500 transition">
            {product.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-3">
            {product.description}
          </p>

          {/* Price + CTA */}
          <div className="flex items-center justify-between pt-2">
            <span className="text-orange-500 font-bold text-lg sm:text-xl">
              {product.price}
            </span>

            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              className="
                px-4 sm:px-5 
                py-2 
                bg-orange-500 
                text-white 
                font-medium 
                shadow-md 
                hover:bg-orange-600 
                transition-all 
              "
            >
              Check Now
            </motion.button>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
