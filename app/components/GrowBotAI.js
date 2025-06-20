"use client";
import { useState } from "react";
import { FaRobot } from "react-icons/fa";
import { motion } from "framer-motion";

export default function GrowBotAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    const res = await fetch("/api/ai", {
      method: "POST",
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    const botReply = { role: "bot", content: data.reply };
    setMessages((prev) => [...prev, botReply]);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        className="fixed bottom-20 right-4 z-50 bg-pink-600 text-white p-4 rounded-full shadow-xl hover:scale-110 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaRobot size={24} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-28 right-4 z-50 w-80 bg-white rounded-xl shadow-lg border p-4 flex flex-col"
        >
          <div className="font-bold text-pink-700 mb-2">👩‍💻 GrowBot AI</div>

          <div className="h-64 overflow-y-auto space-y-2 text-sm">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded ${
                  msg.role === "user"
                    ? "bg-blue-100 self-end text-right"
                    : "bg-gray-100 self-start"
                }`}
              >
                {msg.content}
              </div>
            ))}
          </div>

          <div className="flex mt-2 gap-2">
            <input
              className="flex-1 border rounded px-2 py-1 text-sm"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              className="bg-pink-600 text-white px-3 py-1 rounded text-sm"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}