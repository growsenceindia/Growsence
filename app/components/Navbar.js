'use client';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'Courses', href: '#courses' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-xl font-bold text-blue-600">Growsence</a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-4 pt-2 shadow-lg">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-gray-800 hover:text-blue-600"
            >
              {item.labl}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
