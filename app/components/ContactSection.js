'use client';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-gray-800 mb-6"
        >
          📞 Contact Us
        </motion.h2>
        <p className="text-center text-gray-600 mb-12">
          Have questions or need help? Our team is available 24×7 on WhatsApp & email.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form className="bg-white p-8 rounded-xl shadow-lg space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition w-full"
            >
              Send Message
            </button>
          </form>

          {/* Contact Details */}
          <div className="flex flex-col justify-center space-y-6 text-gray-700">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-500" />
              <a href="tel:+919835742586" className="hover:underline">
                +91 98357 42586
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaWhatsapp className="text-green-500" />
              <a
                href="https://wa.me/919835742586"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Chat on WhatsApp
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-red-500" />
              <a href="mailto:teamgrowsence@gmail.com" className="hover:underline">
                teamgrowsence@gmail.com
              </a>
            </div>
            <iframe
              className="rounded-lg w-full h-64 border"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117621.3150220813!2d87.250007!3d23.6692978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f77f398374e6c5%3A0x57dbb8a8f67b6824!2sDurgapur%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Growsence Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}