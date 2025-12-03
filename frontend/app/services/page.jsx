"use client";

import ServiceCard from "../../components/ServiceCard";
import { motion } from "framer-motion";
import Link from "next/link";

// Section entrance animation
const sectionVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

// Fade-in container + stagger children
const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.5
    }
  }
};

// Card animation
const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

export default function ServicesPage() {
  return (
    <motion.section
      className="py-20 bg-gray-50"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >

      {/* Heading Animation */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Our Decoration & Fiber Services
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Premium fiber-based décor crafted for events, weddings, cultural functions,
          and custom creative installations.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 max-w-7xl mx-auto"
        variants={containerVariant}
      >

        {/* Stage & Event Decorations */}

        <motion.div variants={cardVariant}>
        <Link href="/services/event-&-space-decoration-services">
            <ServiceCard
            imageSrc="/assets/services/event-space.jpg"
            title="Event & Space Decoration Services"
            description="Premium fiber designs crafted to transform any event venue."
            />
        </Link>
        </motion.div>

        <motion.div variants={cardVariant}>
        <Link href="/services/stage-&-event-decorations">
            <ServiceCard
            imageSrc="/assets/services/stage.jpg"
            title="Stage & Event Decorations"
            description="Event & Space Decoration Services — Premium fiber designs crafted to transform any event venue."
            />
        </Link>
        </motion.div>


        {/* Wedding Décor */}
        <motion.div variants={cardVariant}>
          <Link href="/services/customized-wedding-decor">
            <ServiceCard
              imageSrc="/assets/services/wedding.jpg"
              title="Customized Wedding Décor"
              description="Beautiful handcrafted décor tailored for themed weddings."
            />
          </Link>
        </motion.div>

        {/* Cultural Decoration */}
        <motion.div variants={cardVariant}>
          <Link href="/services/cultural-event-fiber-decoration">
            <ServiceCard
              imageSrc="/assets/services/cultural.jpg"
              title="Cultural Event Fiber Decoration"
              description="Authentic artistic decorations for festivals and cultural events."
            />
          </Link>
        </motion.div>

        {/* Corporate Decoration */}
        <motion.div variants={cardVariant}>
          <Link href="/services/corporate-function-decorations">
            <ServiceCard
              imageSrc="/assets/services/corporate.jpg"
              title="Corporate Function Decorations"
              description="Elegant fiber installations designed for brand-focused corporate events."
            />
          </Link>
        </motion.div>

        {/* Custom Creations */}
        <motion.div variants={cardVariant}>
          <Link href="/services/personalized-fiber-creations">
            <ServiceCard
              imageSrc="/assets/services/custom.jpg"
              title="Personalized Fiber Creations"
              description="Custom-built fiber art based on exact client requirements."
            />
          </Link>
        </motion.div>

      </motion.div>
    </motion.section>
  );
}
