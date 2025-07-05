// app/student/signup/page.js
'use client';
import { useState } from 'react';

export default function SignupPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add Firebase signup logic here
    alert('Signup successful');
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-100 to-purple-200 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Create Growsence Account</h2>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full p-3 border rounded-xl focus:outline-none"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-3 border rounded-xl focus:outline-none"
          required
        />
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full p-3 border rounded-xl focus:outline-none"
          required
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full p-3 border rounded-xl focus:outline-none"
          required
        />
        <button
          type="submit"
          className="bg-purple-600 text-white font-semibold p-3 rounded-xl w-full hover:bg-purple-700 transition"
        >
          Sign Up
        </button>
        <p className="text-center text-sm">
          Already have an account? <a href="/student/login" className="text-blue-600 underline">Login</a>
        </p>
      </form>
    </div>
  );
}