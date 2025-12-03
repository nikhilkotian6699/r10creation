"use client";

import { motion } from "framer-motion";
import { FiEye, FiTarget } from "react-icons/fi";

export default function VisionMission() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100">
      {/* Soft Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-72 h-72 bg-orange-200 opacity-20 blur-3xl rounded-full absolute top-10 left-10"></div>
        <div className="w-72 h-72 bg-yellow-200 opacity-20 blur-3xl rounded-full absolute bottom-10 right-10"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative">
        {/* Heading */}
        <motion.h2
          className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={1}
          viewport={{ once: true }}
        >
          Vision & Mission
        </motion.h2>

        {/* Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          {/* Vision Card */}
          <motion.div
            className="bg-white/60 backdrop-blur-xl p-8 rounded-2xl shadow-xl hover:shadow-2xl transition hover:-translate-y-1
            border border-orange-100"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={2}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              whileHover={{ rotate: 10 }}
              className="flex justify-center mb-4"
            >
              <FiEye size={50} className="text-orange-500" />
            </motion.div>

            <h3 className="text-xl font-semibold text-orange-500 text-center mb-3">
              Vision
            </h3>

            <p className="text-gray-700 text-center text-base sm:text-lg leading-relaxed">
              To redefine decorative spaces with world-class 
              <span className="font-semibold text-orange-600"> fiber creations</span> 
              that inspire <span className="font-semibold text-orange-600">beauty</span>, 
              <span className="font-semibold text-orange-600"> spirituality</span>, and 
              <span className="font-semibold text-orange-600"> innovation</span>.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            className="bg-white/60 backdrop-blur-xl p-8 rounded-2xl shadow-xl hover:shadow-2xl transition hover:-translate-y-1
            border border-orange-100"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={3}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              whileHover={{ rotate: -10 }}
              className="flex justify-center mb-4"
            >
              <FiTarget size={50} className="text-orange-500" />
            </motion.div>

            <h3 className="text-xl font-semibold text-orange-500 text-center mb-3">
              Mission
            </h3>

            <ul className="text-gray-700 text-base sm:text-lg space-y-3 leading-relaxed">
              <li>
                ✔️ Deliver high-quality <span className="font-semibold text-orange-600">fiber décor</span> solutions that are elegant and long-lasting.
              </li>
              <li>
                ✔️ Provide customized designs for <span className="font-semibold text-orange-600">homes</span>, 
                <span className="font-semibold text-orange-600"> events</span>, and 
                <span className="font-semibold text-orange-600"> monuments</span>.
              </li>
              <li>
                ✔️ Innovate continuously with new fiber applications in <span className="font-semibold text-orange-600">decorative arts</span>.
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
