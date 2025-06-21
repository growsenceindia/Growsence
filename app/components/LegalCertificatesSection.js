"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Download, Eye } from "lucide-react";

const certificates = [
  {
    title: "GST Certificate",
    regNo: "27AABCX1234Z1Z",
    issued: "21 March 2024",
    authority: "Government of India",
    image: "/certificates/gst.png",
    downloadable: false,
  },
  {
    title: "MSME Udyam Certificate",
    regNo: "UDYAM-BR-123456",
    issued: "10 April 2023",
    authority: "Ministry of MSME",
    image: "/certificates/msme.png",
    downloadable: false,
  },
  {
    title: "Startup India (DPIIT)",
    regNo: "DPIIT123456",
    issued: "01 Feb 2024",
    authority: "Startup India Initiative",
    image: "/certificates/startup.png",
    downloadable: false,
  },
  {
    title: "Trademark Registration",
    regNo: "TM-7854123",
    issued: "30 May 2023",
    authority: "IP India",
    image: "/certificates/trademark.png",
    downloadable: false,
  },
];

export default function LegalCertificatesSection() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        >
          🛡️ Our Legal Identity & Trust Certifications
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We believe in 100% transparency. Below are official certificates that prove our commitment to legality and authenticity.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: false }}
              className="bg-gray-50 border border-gray-200 rounded-xl shadow-md p-5 relative hover:shadow-xl transition-all duration-300"
            >
              {/* Verified Badge with Tooltip */}
              <div className="absolute top-3 right-3 text-green-600 text-sm font-medium relative group cursor-help">
                <CheckCircle2 className="w-4 h-4 mr-1 inline-block" />
                Verified
                <div className="absolute right-0 mt-1 w-52 text-xs bg-black text-white rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                  Verified Government Issued Certificate
                </div>
              </div>

              {/* Certificate Preview Image */}
              <div className="relative w-full h-40 rounded-md overflow-hidden mb-4">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                  onClick={() => setSelected(cert)}
                />
                {/* ISSUED Stamp Overlay */}
                <div className="absolute bottom-2 right-2 bg-red-600 text-white text-[10px] px-2 py-0.5 rounded rotate-[-12deg] opacity-80 shadow">
                  🔏 ISSUED
                </div>
              </div>

              {/* Certificate Details */}
              <h3 className="text-lg font-semibold text-gray-800">{cert.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{cert.authority}</p>

              {/* Copyable Reg Number */}
              <p
                className="text-sm text-gray-500 mt-1 cursor-pointer hover:text-indigo-600"
                title="Click to copy"
                onClick={() => navigator.clipboard.writeText(cert.regNo)}
              >
                Reg. No: {cert.regNo} 📋
              </p>
              <p className="text-sm text-gray-500 mt-1">Issued: {cert.issued}</p>

              {/* Action Buttons */}
              <div className="mt-4 flex justify-center gap-3">
                <button
                  onClick={() => setSelected(cert)}
                  className="text-indigo-600 hover:underline text-sm flex items-center"
                >
                  <Eye className="w-4 h-4 mr-1" /> View
                </button>
                {cert.downloadable && (
                  <a
                    href={cert.image}
                    download
                    className="text-green-600 hover:underline text-sm flex items-center"
                  >
                    <Download className="w-4 h-4 mr-1" /> Download
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for Full-View Preview */}
        {selected && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={() => setSelected(null)}
          >
            <div className="bg-white rounded-xl max-w-3xl w-full mx-4 p-4 relative shadow-lg">
              <button
                onClick={() => setSelected(null)}
                className="absolute top-2 right-4 text-gray-600 text-2xl"
              >
                ×
              </button>
              <h3 className="text-lg font-semibold mb-2">{selected.title}</h3>
              <div className="w-full h-[500px] relative rounded-md overflow-hidden border">
                <Image
                  src={selected.image}
                  alt={selected.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}