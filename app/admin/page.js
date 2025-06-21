'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState('students');

  const renderTab = () => {
    switch (activeTab) {
      case 'students':
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">All Students</h2>
            <ul className="list-disc pl-6">
              <li>Ravi Sinha – ravi@growsence.in</li>
              <li>Priya Das – priya@growsence.in</li>
              <li>Ankit Verma – ankit@growsence.in</li>
            </ul>
          </div>
        );
      case 'withdrawals':
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">Manage Withdrawals</h2>
            <p>Integration with Cashfree pending...</p>
            <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded">Process Pending</button>
          </div>
        );
      case 'notifications':
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">Push Notifications</h2>
            <textarea placeholder="Write a message..." className="w-full p-2 border rounded mb-2"></textarea>
            <button className="px-4 py-2 bg-blue-500 text-white rounded">Send Now</button>
          </div>
        );
      case 'leaderboard':
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">Leaderboard</h2>
            <ol className="list-decimal pl-6">
              <li>Ravi Sinha – 850 XP</li>
              <li>Priya Das – 790 XP</li>
              <li>Ankit Verma – 740 XP</li>
            </ol>
          </div>
        );
      case 'courses':
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">Manage Courses</h2>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded">Upload New Course</button>
            <p className="mt-2">Course List: Spoken English, Share Market, AI Tools...</p>
          </div>
        );
      case 'payments':
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">Earnings & Payments</h2>
            <ul className="list-disc pl-6">
              <li>Payment Received: ₹1,20,000</li>
              <li>Affiliate Payouts: ₹48,000</li>
              <li>Pending Withdrawals: ₹7,000</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard – Growsence</h1>
      <div className="flex flex-wrap gap-4 mb-8">
        {['students','withdrawals','notifications','leaderboard','courses','payments'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded font-medium ${activeTab === tab ? 'bg-black text-white' : 'bg-white text-black border'}`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      <div className="bg-white p-6 rounded-xl shadow-md">
        {renderTab()}
      </div>
    </main>
  );
}