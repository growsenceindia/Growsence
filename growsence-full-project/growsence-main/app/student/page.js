'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const tabs = [
  'Dashboard', 'Profile', 'My Courses', 'Plan', 'Startup Video', 'Social Media', 'Affiliates',
  'Payment', 'Training', 'Support', 'Certificates', 'Leaderboard', 'Vision Board'
];

export default function StudentPanel() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const student = {
    name: 'Rahul Rajput',
    id: 'rahul.rajput',
    earnings: 1227,
    xp: 850,
    mood: 'motivated',
  };

  const renderTab = () => {
    switch (activeTab) {
      case 'Dashboard':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Good Morning, {student.name}!</h2>
            <div className="flex flex-wrap gap-4">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-xl text-white w-64">
                <div className="font-semibold">₹ {student.earnings}</div>
                <div className="text-sm">Today&apos;s Earnings</div>
              </div>
              <div className="bg-red-400 p-4 rounded-xl text-white w-64">
                <div className="font-semibold">₹ {student.earnings}</div>
                <div className="text-sm">Total Earnings</div>
              </div>
              <div className="bg-purple-600 p-4 rounded-xl text-white w-64">
                <div className="font-semibold">{student.xp} XP</div>
                <div className="text-sm">Your Level</div>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-bold mb-2">🎯 Daily Affirmation</h3>
              <div className="bg-yellow-100 p-4 rounded-xl text-center font-semibold italic">
                &quot;I am growing every day and becoming the best version of myself.&quot;
              </div>
            </div>
          </div>
        );
      case 'Profile':
        return <div><h2 className="text-2xl font-bold mb-4">My Profile</h2><p>Name, Email, Phone, Address...</p></div>;
      case 'My Courses':
        return <div><h2 className="text-2xl font-bold mb-4">My Courses</h2><p>Video player + PDFs + test link</p></div>;
      case 'Plan':
        return <div><h2 className="text-2xl font-bold mb-4">My Plan</h2><p>Basic / Pro plan status &amp; upgrade option</p></div>;
      case 'Startup Video':
        return <div><h2 className="text-2xl font-bold mb-4">Startup Video</h2><iframe className="w-full h-64" src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowFullScreen></iframe></div>;
      case 'Social Media':
        return <div><h2 className="text-2xl font-bold mb-4">Social Handles</h2><ul className="list-disc pl-6"><li>Instagram</li><li>YouTube</li><li>Telegram</li><li>WhatsApp</li></ul></div>;
      case 'Affiliates':
        return <div><h2 className="text-2xl font-bold mb-4">Affiliate Panel</h2><p>Referral Link + Earnings + Leads</p></div>;
      case 'Payment':
        return <div><h2 className="text-2xl font-bold mb-4">Payment Section</h2><p>Wallet + Withdraw Button + Bank Details</p></div>;
      case 'Training':
        return <div><h2 className="text-2xl font-bold mb-4">Training Section</h2><p>Bonus Vault + Scripts + Videos</p></div>;
      case 'Support':
        return <div><h2 className="text-2xl font-bold mb-4">Support</h2><p>24x7 Chat | Email | Call</p></div>;
      case 'Certificates':
        return <div><h2 className="text-2xl font-bold mb-4">My Certificates</h2><p>Download + Public Link + NFT Format</p></div>;
      case 'Leaderboard':
        return <div><h2 className="text-2xl font-bold mb-4">Leaderboard</h2><p>XP Rank List with Animation</p></div>;
      case 'Vision Board':
        return <div><h2 className="text-2xl font-bold mb-4">Vision Board</h2><p>Set goals using images &amp; text</p></div>;
      default:
        return <p>Coming Soon...</p>;
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-800 text-white p-4 space-y-3">
        <h1 className="text-xl font-bold mb-6">Dashboard</h1>
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`block w-full text-left px-4 py-2 rounded ${activeTab === tab ? 'bg-white text-blue-800 font-bold' : 'hover:bg-blue-700'}`}
          >
            {tab}
          </button>
        ))}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-50">
        {renderTab()}
      </main>
    </div>
  );
      }
