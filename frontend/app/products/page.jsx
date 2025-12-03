"use client";

import { motion } from "framer-motion";
import ProductCard from "../../components/ProductCard";

const products = [
  {
    title: "Fiber Vase",
    slug: "fiber-vase",
    description: "Beautiful handcrafted fiber vase designed to enhance home and event décor with elegant artistic detail.",
    price: "₹2,499",
    image: "/assets/images/products/fiber-vase.jpeg",
  },
  {
    title: "Decorative Fiber Art Piece",
    slug: "decorative-fiber-art-piece",
    description: "Intricately crafted decorative art piece made from premium fiber to elevate interior aesthetics.",
    price: "₹3,200",
    image: "/assets/images/products/fiber-art-piece.jpeg",
  },
  {
    title: "Fiber Statue",
    slug: "fiber-statues",
    description: "Durable and lightweight fiber statue perfect for temples, homes, and event displays.",
    price: "₹7,500",
    image: "/assets/images/products/fiber-statue.jpeg",
  },
  {
    title: "Sacred Idol (Fiber)",
    slug: "sacred-idols",
    description: "A finely detailed sacred idol made from high-quality fiber, ideal for pooja rooms and spiritual spaces.",
    price: "₹4,999",
    image: "/assets/images/products/sacred-idol.jpeg",
  },
  {
    title: "Altar Décor",
    slug: "altar-decor",
    description: "Elegant fiber décor pieces designed for altars, temples, and spiritual spaces to enhance ambiance.",
    price: "₹3,999",
    image: "/assets/images/products/altar-decor.jpeg",
  },
  {
    title: "Custom Fiber Monument",
    slug: "custom-fiber-monument",
    description: "Fully customizable fiber monuments crafted for weddings, cultural events, institutions, and public spaces.",
    price: "₹12,000",
    image: "/assets/images/products/fiber-monument.jpeg",
  },
];

export default function ProductsPage() {
  return (
    <section className="bg-gray-50 py-24">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
          Our Products
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          Explore our handcrafted decorative fiber creations designed to transform your spaces with beauty and innovation.
        </p>
      </motion.div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}