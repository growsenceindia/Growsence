'use client'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

export default function Navbar() {
  return (
    <nav className="bg-white shadow sticky top-0 z-50 px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-blue-600">
        Growsence
      </Link>
      <div className="flex gap-4 items-center">
        <Link href="#courses" className="hover:text-blue-500">Courses</Link>
        <Link href="#contact" className="hover:text-blue-500">Contact</Link>
        <a href="https://wa.me/919835742586" target="_blank" rel="noopener noreferrer" className="text-green-500">
          <FaWhatsapp size={20} />
        </a>
      </div>
    </nav>
  )
}