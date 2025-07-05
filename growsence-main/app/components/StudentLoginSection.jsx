'use client'
import { motion } from 'framer-motion'

export default function StudentLoginSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8"
      >
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Student Login</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              placeholder="student@example.com"
              className="mt-1 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-1 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="text-right">
            <a href="#" className="text-sm text-blue-600 hover:underline">Forgot Password?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          New to Growsence? <a href="#" className="text-blue-600 hover:underline">Sign Up</a>
        </p>
      </motion.div>
    </section>
  )
}