"use client";

import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import Link from "next/link";

export default function ServiceIntro() {
  // Three cards directly added here including image paths + links
  const previewServices = [
    {
      imageSrc: "/assets/services/stage.jpg",
      title: "Stage & Event Decorations",
      description:
        "Beautiful fiber-based decorative setups for events and celebrations.",
      link: "/services/stage-&-event-decorations"
    },
    {
      imageSrc: "/assets/services/wedding.jpg",
      title: "Wedding Decoration",
      description:
        "Stunning fiber mandaps, entrances, and themed wedding décor.",
      link: "/services/customized-wedding-decor"
    },
    {
      imageSrc: "/assets/services/cultural.jpg",
      title: "Cultural Event Decoration",
      description:
        "Fiber décor for traditional, festival, and spiritual events.",
      link: "/services/cultural-event-fiber-decoration"
    }
  ];

  return (
    <section className="bg-gray-50 py-24">
      <div className="text-center mb-16">
        <p className="text-orange-500 uppercase text-sm sm:text-base tracking-wide font-semibold mb-2">
          Our Services
        </p>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
          Event & Space Decoration Services
        </h2>

        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          We transform venues with artistic fiber décor — delivering custom designs for
          weddings, cultural functions, corporate events, and premium decorative installations.
        </p>
      </div>

      {/* Service Cards */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
        {previewServices.map((s, idx) => (
          <Link key={idx} href={s.link}>
            <ServiceCard
              imageSrc={s.imageSrc}
              title={s.title}
              description={s.description}
            />
          </Link>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center">
        <Link href="/services">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-orange-500 text-white text-lg font-semibold shadow hover:bg-orange-600 transition"
          >
            View More Services
          </motion.button>
        </Link>
      </div>
    </section>
  );
}
