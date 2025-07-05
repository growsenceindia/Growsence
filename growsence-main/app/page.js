'use client';
import { FaWhatsapp } from 'react-icons/fa';
import Navbar from "./components/Navbar";
import FooterSection from './components/FooterSection';

export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      <Navbar />
      <FooterSection />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919835742586"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-600 text-white p-4 rounded-full shadow-lg hover:scale-105 transition duration-300"
      >
        <FaWhatsapp size={24} />
      </a>
    </main>
  );
}
