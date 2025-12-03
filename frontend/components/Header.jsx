"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* FIXED NAVIGATION */}
      <header className="fixed top-0 left-0 w-full z-50 shadow-lg bg-[#52321C] text-[#F8F4EC] font-[Poppins]">

        {/* Navbar */}
        <nav className="px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <h1 className="text-3xl font-extrabold tracking-wide">
            Text<span className="text-[#CC9523]">ica</span>
          </h1>

          {/* Desktop Menu (No dropdowns) */}
          <div className="hidden lg:flex gap-10 text-lg font-medium items-center">
            <Link href="/" className="hover:text-[#CC9523] transition">Home</Link>
            <Link href="/services" className="hover:text-[#CC9523] transition">Services</Link>
            <Link href="/products" className="hover:text-[#CC9523] transition">Products</Link>
            <Link href="/gallery" className="hover:text-[#CC9523] transition">Gallery</Link>
            <Link href="/location" className="hover:text-[#CC9523] transition">Location</Link>
            <Link href="/about" className="hover:text-[#CC9523] transition">About Us</Link>
            <Link href="/contact" className="hover:text-[#CC9523] transition">Contact</Link>
            <Link href="/vision" className="hover:text-[#CC9523] transition">Vision</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-3xl text-[#CC9523]"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </nav>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="lg:hidden bg-[#52321C] text-[#F8F4EC] px-6 py-4 space-y-4 border-t border-[#CC9523] text-lg font-medium">

            <Link href="/" className="block hover:text-[#CC9523]" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/services" className="block hover:text-[#CC9523]" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link href="/products" className="block hover:text-[#CC9523]" onClick={() => setMenuOpen(false)}>Products</Link>
            <Link href="/gallery" className="block hover:text-[#CC9523]" onClick={() => setMenuOpen(false)}>Gallery</Link>
            <Link href="/location" className="block hover:text-[#CC9523]" onClick={() => setMenuOpen(false)}>Location</Link>
            <Link href="/about" className="block hover:text-[#CC9523]" onClick={() => setMenuOpen(false)}>About Us</Link>
            <Link href="/contact" className="block hover:text-[#CC9523]" onClick={() => setMenuOpen(false)}>Contact</Link>
            <Link href="/vision" className="block hover:text-[#CC9523]" onClick={() => setMenuOpen(false)}>Vision</Link>
          </div>
        )}
      </header>

      {/* Spacer to avoid content hiding behind fixed navbar */}
      <div className="h-24"></div>
    </>
  );
}
