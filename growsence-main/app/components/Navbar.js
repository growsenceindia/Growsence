"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png" // 📌 Make sure your logo is placed in /public/logo.png
            alt="Growsence Logo"
            width={140}
            height={40}
            priority
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/courses" className="hover:text-blue-600">Courses</Link>
          <Link href="/pricing" className="hover:text-blue-600">Pricing</Link>
          <Link href="/testimonials" className="hover:text-blue-600">Testimonials</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          <Link href="/privacy-policy" className="hover:text-blue-600">Privacy</Link>
          <Link href="/refund-policy" className="hover:text-blue-600">Refund</Link>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-3 space-y-3 text-gray-800 font-medium shadow-md">
          <Link href="/" className="block">Home</Link>
          <Link href="/about" className="block">About</Link>
          <Link href="/courses" className="block">Courses</Link>
          <Link href="/pricing" className="block">Pricing</Link>
          <Link href="/testimonials" className="block">Testimonials</Link>
          <Link href="/contact" className="block">Contact</Link>
          <Link href="/privacy-policy" className="block">Privacy</Link>
          <Link href="/refund-policy" className="block">Refund</Link>
        </div>
      )}
    </header>
  );
}