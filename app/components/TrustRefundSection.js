'use client'
import Image from 'next/image'

export default function TrustRefundSection() {
  return (
    <section className="bg-gray-100 py-10 text-center">
      <h2 className="text-3xl font-bold mb-6">Our Legal Trust Seals</h2>
      <div className="flex justify-center gap-10">
        <Image src="/gst.png" alt="GST" width={120} height={60} />
        <Image src="/msme.png" alt="MSME" width={120} height={60} />
      </div>
      <p className="mt-6 text-sm text-gray-600">Refund available within 48 hours with 5% deduction.</p>
    </section>
  )
}