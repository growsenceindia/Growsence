'use client'
import Image from 'next/image'

export default function TrustRefundSection() {
  return (
    <section className="py-12 bg-gray-100 text-center px-4">
      <h2 className="text-2xl font-bold mb-6">Trusted by Thousands</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <div>
          <Image src="/msme.png" alt="MSME Certificate" width={200} height={100} />
          <p className="mt-2 text-sm text-gray-600">MSME Registered</p>
        </div>
        <div>
          <Image src="/gst.png" alt="GST Registered" width={200} height={100} />
          <p className="mt-2 text-sm text-gray-600">GST Verified</p>
        </div>
        <div>
          <Image src="/news.png" alt="Featured on News" width={200} height={100} />
          <p className="mt-2 text-sm text-gray-600">Featured in News</p>
        </div>
      </div>
    </section>
  )
}