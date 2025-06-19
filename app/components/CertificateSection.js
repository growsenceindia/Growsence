'use client';
import { motion } from 'framer-motion';
import { FaCertificate, FaLink, FaAward } from 'react-icons/fa';

export default function CertificateSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="certificate">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 mb-6"
        >
          🏆 Auto-Generated Certificates
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Every learner receives a digital & NFT-based certificate upon course completion — verifiable, shareable, and built for the future.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white shadow-xl rounded-xl p-6 border border-gray-200"
          >
            <FaCertificate size={40} className="text-blue-500 mb-4 mx-auto" />
            <h3 className="font-semibold text-lg mb-2">Digital + NFT Format</h3>
            <p className="text-gray-600 text-sm">Modern certificate stored securely. You can show it on LinkedIn or resume.</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white shadow-xl rounded-xl p-6 border border-gray-200"
          >
            <FaLink size={40} className="text-green-500 mb-4 mx-auto" />
            <h3 className="font-semibold text-lg mb-2">Verification Link</h3>
            <p className="text-gray-600 text-sm">Each certificate comes with a public unique link that confirms authenticity.</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white shadow-xl rounded-xl p-6 border border-gray-200"
          >
            <FaAward size={40} className="text-yellow-500 mb-4 mx-auto" />
            <h3 className="font-semibold text-lg mb-2">Auto-Generated</h3>
            <p className="text-gray-600 text-sm">No manual work needed. As soon as the student completes all modules, certificate is ready!</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}