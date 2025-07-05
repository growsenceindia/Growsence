"use client";

import Image from "next/image"; import Link from "next/link"; import { usePathname } from "next/navigation"; import { useState, useEffect } from "react"; import { Menu, X, LogIn, User, BookOpen, Info, DollarSign, Star, Phone, ShieldCheck, RotateCcw, Sun, Moon } from "lucide-react"; import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() { const [isOpen, setIsOpen] = useState(false); const [scrolled, setScrolled] = useState(false); const [darkMode, setDarkMode] = useState(false); const pathname = usePathname();

useEffect(() => { const handleScroll = () => { setScrolled(window.scrollY > 10); }; window.addEventListener("scroll", handleScroll); return () => window.removeEventListener("scroll", handleScroll); }, []);

return ( <> {/* Announcement Banner */} <div className="bg-blue-700 text-white text-sm text-center py-2"> 🎉 New Course Launch! Get 50% off — <Link href="/courses" className="underline">Explore Now</Link> </div>

{/* Navbar */}
  <header className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md transition-all border-b ${scrolled ? "shadow-md" : "shadow-none"}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Growsence Logo"
          width={140}
          height={40}
          priority
          className="object-contain"
        />
      </Link>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
        <NavItem href="/" label="Home" icon={<User size={16} />} pathname={pathname} />
        <NavItem href="/about" label="About" icon={<Info size={16} />} pathname={pathname} />
        <NavItem href="/courses" label="Courses" icon={<BookOpen size={16} />} pathname={pathname} />
        <NavItem href="/pricing" label="Pricing" icon={<DollarSign size={16} />} pathname={pathname} />
        <NavItem href="/testimonials" label="Testimonials" icon={<Star size={16} />} pathname={pathname} />
        <NavItem href="/contact" label="Contact" icon={<Phone size={16} />} pathname={pathname} />
        <NavItem href="/privacy-policy" label="Privacy" icon={<ShieldCheck size={16} />} pathname={pathname} />
        <NavItem href="/refund-policy" label="Refund" icon={<RotateCcw size={16} />} pathname={pathname} />
        <Link href="/login">
          <button className="bg-blue-600 text-white px-3 py-1.5 rounded-md text-sm flex items-center gap-1 hover:bg-blue-700 transition">
            <LogIn size={16} /> Login
          </button>
        </Link>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-2 p-2 rounded-full hover:bg-gray-200"
        >
          {darkMode ? <Moon size={18} /> : <Sun size={18} />}
        </button>
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
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden bg-white border-t border-gray-200 px-4 py-3 space-y-3 text-gray-800 font-medium shadow-md"
        >
          <MobileNavItem href="/" label="Home" />
          <MobileNavItem href="/about" label="About" />
          <MobileNavItem href="/courses" label="Courses" />
          <MobileNavItem href="/pricing" label="Pricing" />
          <MobileNavItem href="/testimonials" label="Testimonials" />
          <MobileNavItem href="/contact" label="Contact" />
          <MobileNavItem href="/privacy-policy" label="Privacy" />
          <MobileNavItem href="/refund-policy" label="Refund" />
          <Link href="/login" className="block">
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition">
              Login
            </button>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  </header>
</>

); 
}
function NavItem({ href, label, icon, pathname }) {
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-1 hover:text-blue-600 transition ${
        isActive ? "text-blue-600 font-semibold" : ""
      }`}
    >
      {icon} {label}
    </Link>
  );
}
