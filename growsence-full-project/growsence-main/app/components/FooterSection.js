'use client';
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from 'react-icons/fa';

export default function FooterSection() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-white mb-3">Growsence</h3>
          <p className="text-sm text-gray-400">
            Learn, Earn & Grow with India’s most trusted growth platform.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#courses" className="hover:underline">Courses</a></li>
            <li><a href="#pricing" className="hover:underline">Pricing</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
            <li><a href="#trust" className="hover:underline">Trust Badges</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold text-white mb-3">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/terms-and-conditions" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="/refund-policy" className="hover:underline">Refund Policy</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="font-semibold text-white mb-3">Connect with Us</h4>
          <p className="text-sm mb-2">Email: <a href="mailto:teamgrowsence@gmail.com" className="hover:underline">teamgrowsence@gmail.com</a></p>
          <p className="text-sm mb-4">Call: <a href="tel:+919835742586" className="hover:underline">+91 98357 42586</a></p>
          <div className="flex space-x-4 text-lg">
            <a href="https://wa.me/919835742586" target="_blank"><FaWhatsapp /></a>
            <a href="https://www.instagram.com/growsenceindia" target="_blank"><FaInstagram /></a>
            <a href="https://www.facebook.com/share/1BZBP3qZ7n" target="_blank"><FaFacebookF /></a>
            <a href="https://youtube.com/@growsenceindia" target="_blank"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10">
        © {new Date().getFullYear()} Growsence. All rights reserved.
      </div>
    </footer>
  );
}