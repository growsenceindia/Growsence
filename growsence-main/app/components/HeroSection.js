"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import Image from "next/image";
import {
  GoogleAuthProvider,
  signInWithPopup,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";

import { auth } from "../firebase"; // ✅ make sure this path is correct

export default function HeroSection() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const actionCodeSettings = {
    url: typeof window !== "undefined" ? window.location.href : "",
    handleCodeInApp: true,
  };

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      isSignInWithEmailLink(auth, window.location.href)
    ) {
      const storedEmail = window.localStorage.getItem("emailForSignIn");
      if (storedEmail) {
        signInWithEmailLink(auth, storedEmail, window.location.href)
          .then(() => {
            window.localStorage.removeItem("emailForSignIn");
            router.push("/student/page");
          })
          .catch(() => setError("Link expired or invalid."));
      }
    }
  }, [router]);

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push("/student/page");
    } catch {
      setError("Google login failed.");
    }
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem("emailForSignIn", email);
      setMessage("📩 OTP link sent! Check your email.");
    } catch {
      setError("Failed to send OTP link.");
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-[#0a1647] via-[#112b68] to-[#1b3a8b] text-white pt-28 pb-24 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center z-10 relative">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          🚀 Transform Your Life. <br />
          📚 Learn,💸Earn & 💡Grow with{" "}
          <span className="text-green-400">Growsence</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10">
          India&apos;s Most Advanced Ed-Tech + Affiliate Platform for Students.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => setShowModal(true)}
            className="bg-white text-indigo-800 font-semibold px-7 py-3 rounded-full shadow-lg hover:bg-gray-200 transition"
          >
            👨‍🎓 Student Login
          </button>
          <a
            href="/courses"
            className="bg-[#00c27c] hover:bg-[#00a96a] text-white font-semibold px-7 py-3 rounded-full shadow-lg"
          >
            🚀 Explore Courses
          </a>
        </div>
      </div>

      {/* Login Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <div className="bg-white text-gray-800 p-8 rounded-xl w-full max-w-md shadow-xl relative">
            <button
              className="absolute top-3 right-4 text-2xl text-gray-500 hover:text-red-500"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-6 text-center">
              Welcome to Growsence
            </h2>

            <button
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-md hover:bg-gray-50 mb-4"
            >
              <Image
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google"
                width={20}
                height={20}
              />
              Log in via Google
            </button>

            <div className="flex items-center gap-3 my-4">
              <hr className="flex-1 border-gray-300" />
              <span className="text-sm text-gray-500">or</span>
              <hr className="flex-1 border-gray-300" />
            </div>

            <form onSubmit={handleEmailLogin}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring focus:ring-indigo-300"
              />
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
              >
                📩 Log in via Email OTP
              </button>
            </form>

            {message && (
              <p className="text-green-600 text-sm mt-4">{message}</p>
            )}
            {error && <p className="text-red-500 text-sm mt-4">{error}</p>}

            <div className="mt-6 text-center">
              <p className="text-sm">
                Don&apos;t have an account?{" "}
                <a href="/courses" className="text-blue-600 font-medium hover:underline">
                  Enroll Now
                </a>
              </p>
              <p className="text-xs text-gray-400 mt-3">
                By continuing, you agree to our{" "}
                <a href="/terms" className="underline">
                  Terms of Service
                </a>{" "}
                &amp;{" "}
                <a href="/privacy" className="underline">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
                  }
