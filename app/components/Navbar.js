'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      <div className="text-xl font-bold text-blue-600">Growsence</div>
      <ul className="flex space-x-6">
        <li>
          <Link href="/" className="hover:text-blue-500">Home</Link>
        </li>
        <li>
          <Link href="#courses" className="hover:text-blue-500">Courses</Link>
        </li>
        <li>
          <Link href="#contact" className="hover:text-blue-500">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}