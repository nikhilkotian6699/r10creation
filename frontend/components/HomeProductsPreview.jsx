"use client";

import ProductCard from "./ProductCard";
import Link from "next/link";

const previewProducts = [
  {
    title: "Smart Fabric Shirt",
    description: "High-quality breathable fabric with smart temperature regulation.",
    price: "$49.99",
    image: "/assets/images/products/shirt1.jpeg",
  },
  {
    title: "Eco-friendly Cotton Pants",
    description: "Sustainable cotton pants designed for comfort and durability.",
    price: "$59.99",
    image: "/assets/images/products/pants1.jpeg",
  },
  {
    title: "Luxury Silk Scarf",
    description: "Soft, premium silk scarf with vibrant patterns.",
    price: "$39.99",
    image: "/assets/images/products/scarf1.jpeg",
  },
];

export default function HomeProductsPreview() {
  return (
    <section className="bg-white py-20" id="products">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
          Featured Products
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          A glimpse of our finest textile products crafted with precision and innovation.
        </p>
      </div>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {previewProducts.map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-12">
        <Link
          href="/products"
          className="px-8 py-3 bg-orange-500 text-white font-semibold hover:bg-orange-600 transition inline-block"
        >
          View More Products
        </Link>
      </div>
    </section>
  );
}
