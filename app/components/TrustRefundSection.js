'use client';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaSyncAlt, FaCheckCircle, FaClock } from 'react-icons/fa';

export default function TrustRefundSection() {
  return (
    <section className="py-16 bg-[#fefefe] border-t border-gray-100" id="trust">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-10"
        >
          🔐 Your Purchase is 100% Safe & Trusted
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {/* Refund Policy */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white p-6 rounded-xl shadow border border-gray-200"
          >
            <FaSyncAlt size={36} className="text-green-500 mx-auto mb-3" />
            <h3 className="text-lg font-semibold mb-2">48-Hour Refund Policy</h3>
            <p className="text-sm text-gray-600">
              If not satisfied, get a refund within 48 hours (5% processing deduction).
            </p>
          </motion.div>

          {/* MSME & GST Badges */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white p-6 rounded-xl shadow border border-gray-200"
          >
            <FaCheckCircle size={36} className="text-blue-500 mx-auto mb-3" />
            <h3 className="text-lg font-semibold mb-2">MSME & GST Registered</h3>
            <p className="text-sm text-gray-600">Growsence is officially verified with Govt. documents for your trust.</p>
            <div className="mt-4 flex justify-center gap-4">
              <img src="/msme-logo.png" alt="MSME" className="h-8" />
              <img src="/gst-logo.png" alt="GST" className="h-8" />
            </div>
          </motion.div>

          {/* Urgency Timer */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white p-6 rounded-xl shadow border border-gray-200"
          >
            <FaClock size={36} className="text-red-500 mx-auto mb-3" />
            <h3 className="text-lg font-semibold mb-2">Limited Time Offer</h3>
            <p className="text-sm text-gray-600">Current course prices are valid for a short period. Grab your seat now!</p>
            <div className="mt-4 text-sm font-semibold text-red-600">
              ⏳ Offer ends in: <span className="countdown">48:00:00</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}