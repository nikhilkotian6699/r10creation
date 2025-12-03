"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ProductDetailsPage() {
  // multiple images support
  const images = [
    "/assets/images/products/fiber-art-piece.jpeg",
    "/assets/images/products/fiber-art-piece-side.jpeg",
    "/assets/images/products/fiber-art-piece-close.jpeg",
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto py-16 lg:py-24 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">

          {/* ---------------- LEFT: IMAGE GALLERY ---------------- */}
          <div className="w-full">
            {/* Main Image */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="relative w-full h-[420px] sm:h-[500px] md:h-[550px] 
              rounded-2xl overflow-hidden shadow-2xl bg-white"
            >
              <Image
                src={selectedImage}
                alt="Decorative Fiber Art Piece"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Thumbnails */}
            <div className="flex gap-4 mt-6 overflow-x-auto pb-2 no-scrollbar">
              {images.map((img, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.1 }}
                  className={`
                    rounded-xl overflow-hidden border-2 cursor-pointer shadow-md
                    transition-all duration-300
                    ${
                      selectedImage === img
                        ? "border-orange-500 shadow-orange-300"
                        : "border-transparent"
                    }
                  `}
                  onClick={() => setSelectedImage(img)}
                >
                  <Image
                    src={img}
                    width={120}
                    height={120}
                    className="w-28 h-28 object-cover"
                    alt="thumbnail"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* ---------------- RIGHT: PRODUCT DETAILS ---------------- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between sticky top-20 space-y-8"
          >
            {/* Title + Description */}
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Decorative Fiber Art Piece
              </h1>

              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                An intricately crafted decorative fiber art piece, thoughtfully 
                designed to elevate modern and traditional interior spaces. 
                Featuring premium detailing, elegant textures, and long-lasting 
                craftsmanship — perfect for wall displays, tabletops, or 
                living room décor.
              </p>
            </div>

            {/* Price */}
            <div>
              <span className="text-4xl font-extrabold text-orange-600">
                ₹3,200
              </span>
              <p className="text-sm text-gray-500 mt-1">
                Inclusive of all taxes
              </p>
            </div>

            {/* Buttons */}
            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="w-full py-4 bg-orange-500 text-white text-lg font-semibold 
                shadow-lg hover:bg-orange-600 transition"
              >
                Contact to Order
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="w-full py-4 bg-gray-100 text-gray-900 text-lg font-semibold 
                shadow hover:bg-gray-200 transition"
              >
                Download Brochure
              </motion.button>
            </div>

            {/* Features */}
            <div className="pt-6 border-t border-gray-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Key Features
              </h3>

              <ul className="list-disc ml-6 space-y-3 text-gray-700 text-lg">
                <li>Premium handcrafted decorative fiber artwork</li>
                <li>Elegant textures and highly detailed finish</li>
                <li>Ideal for living rooms, halls, offices & studios</li>
                <li>Durable, lightweight & easy to maintain</li>
                <li>Weather-resistant & long-lasting material</li>
                <li>Custom sizes and color variations available</li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
