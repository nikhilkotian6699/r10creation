"use client";

import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

const reasons = [
  "Creative, custom-made fiber products",
  "Durable yet lightweight compared to stone or wood",
  "Affordable decorative solutions with premium quality",
  "Tailored designs to suit homes, temples, and event spaces",
  "A perfect fusion of art, culture, and innovation",
];

export default function WhyChooseUs() {
  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8 },
    }),
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-8"
          variants={itemVariant}
          initial="hidden"
          whileInView="visible"
          custom={1}
          viewport={{ once: true }}
        >
          Why Choose R10 Creations?
        </motion.h2>

        <div className="space-y-4 text-left max-w-2xl mx-auto">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              className="flex items-start gap-3"
              variants={itemVariant}
              initial="hidden"
              whileInView="visible"
              custom={idx + 2}
              viewport={{ once: true }}
            >
              <FiCheckCircle className="text-orange-500 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700 text-sm sm:text-base">{reason}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
