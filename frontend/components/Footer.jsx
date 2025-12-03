"use client";

import { FiFacebook, FiInstagram, FiMail, FiPhone } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">R10 Creations</h3>
          <p className="text-gray-400 text-sm">
            Redefining decorative spaces with world-class fiber creations that inspire beauty, spirituality, and innovation.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-orange-500 transition">Home</a></li>
            <li><a href="#services" className="hover:text-orange-500 transition">Services</a></li>
            <li><a href="#products" className="hover:text-orange-500 transition">Products</a></li>
            <li><a href="#about" className="hover:text-orange-500 transition">About Us</a></li>
            <li><a href="#contact" className="hover:text-orange-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Digital Fabric Printing</li>
            <li>Custom Embroidery</li>
            <li>Bespoke Material Sourcing</li>
            <li>Pattern Design & Cutting</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
          <p className="flex items-center gap-2 text-gray-400 text-sm mb-2">
            <FiPhone /> +1 800-001-6555
          </p>
          <p className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <FiMail /> info@r10creations.com
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-orange-500 transition"><FiFacebook size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition"><FiInstagram size={20} /></a>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} R10 Creations. All rights reserved.
      </div>
    </footer>
  );
}
