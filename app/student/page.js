"use client";
import { useState } from "react";
import Image from "next/image";
import { FaRupeeSign, FaUser, FaBook, FaVideo, FaUsers, FaCertificate, FaMoneyCheckAlt, FaHandsHelping, FaHeadset } from "react-icons/fa";

export default function StudentDashboard() {
  const [student] = useState({
    name: "Rahul Rajput",
    id: "rahul.rajput",
    profilePic: "/student.jpg", // 📸 Replace with actual path
    earningsToday: 1227,
    totalEarnings: 12270,
  });

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4 hidden md:block">
        <h2 className="text-2xl font-bold mb-6 text-blue-700">Dashboard</h2>
        <ul className="space-y-4 text-gray-800">
          <li className="flex items-center gap-2"><FaUser /> Profile</li>
          <li className="flex items-center gap-2"><FaBook /> My Courses</li>
          <li className="flex items-center gap-2"><FaVideo /> Startup Video</li>
          <li className="flex items-center gap-2"><FaUsers /> Affiliates</li>
          <li className="flex items-center gap-2"><FaMoneyCheckAlt /> Payment</li>
          <li className="flex items-center gap-2"><FaCertificate /> Certificates</li>
          <li className="flex items-center gap-2"><FaHandsHelping /> Training</li>
          <li className="flex items-center gap-2"><FaHeadset /> Support</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8">
        {/* Greeting */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Good Morning, {student.name.split(" ")[0]}!</h1>

        {/* Profile Card */}
        <div className="bg-gradient-to-r from-cyan-600 to-blue-800 text-white p-4 rounded-xl shadow-md mb-6 flex items-center gap-4">
          <Image
            src={student.profilePic}
            alt="Profile"
            width={80}
            height={80}
            className="rounded-full border-4 border-white"
          />
          <div>
            <p className="text-xl font-semibold">{student.name}</p>
            <p className="text-sm opacity-90">ID: {student.id}</p>
          </div>
        </div>

        {/* Earnings Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-teal-500 text-white p-6 rounded-xl shadow">
            <p className="text-xl font-bold flex items-center gap-1"><FaRupeeSign /> {student.earningsToday}</p>
            <p className="text-sm opacity-90 mt-1">Today's Earnings</p>
          </div>
          <div className="bg-red-400 text-white p-6 rounded-xl shadow">
            <p className="text-xl font-bold flex items-center gap-1"><FaRupeeSign /> {student.totalEarnings}</p>
            <p className="text-sm opacity-90 mt-1">Total Earnings</p>
          </div>
        </div>

        {/* PCloud Video Embed */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://u.pcloud.link/publink/show?code=kZLIUh5ZJJWQlM5yDbQ3XKqVXHBSpfhY25g7"
            title="Course Video"
            className="w-full h-[500px] rounded-xl"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </div>
  );
}