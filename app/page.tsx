"use client";

import Link from "next/link";
import { useState } from "react";
import BgHome from "./../public/image/bg_home.svg";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center transform hover:scale-110 transition">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="font-semibold text-black text-base sm:text-lg">
              Personal
            </span>
          </div>

          {/* Nav Links - Desktop */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            <Link
              href="#about"
              className="text-gray-700 hover:text-black font-medium transition-all duration-300 relative group text-sm lg:text-base"
            >
              About Me
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/skills"
              className="text-gray-700 hover:text-black font-medium transition-all duration-300 relative group text-sm lg:text-base"
            >
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#projects"
              className="text-gray-700 hover:text-black font-medium transition-all duration-300 relative group text-sm lg:text-base"
            >
              Project
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-black font-medium transition-all duration-300 relative group text-sm lg:text-base"
            >
              Contact Me
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
          >
            <span
              className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>

          {/* Download CV Button - Desktop */}
          <button className="hidden md:flex bg-black text-white px-4 lg:px-6 py-2.5 rounded-lg font-medium hover:bg-gray-800 hover:shadow-lg transform hover:scale-105 transition-all duration-300 items-center gap-2 text-sm lg:text-base">
            Download CV <span className="text-sm">↓</span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="px-4 py-3 space-y-2">
              <Link
                href="#about"
                className="block text-gray-700 hover:text-black font-medium py-2 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                About Me
              </Link>
              <Link
                href="/skills"
                className="block text-gray-700 hover:text-black font-medium py-2 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </Link>
              <Link
                href="#projects"
                className="block text-gray-700 hover:text-black font-medium py-2 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Project
              </Link>
              <Link
                href="#contact"
                className="block text-gray-700 hover:text-black font-medium py-2 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Me
              </Link>
              <button className="w-full mt-3 bg-black text-white px-4 py-2.5 rounded-lg font-medium hover:bg-gray-800 transition text-sm">
                Download CV ↓
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 sm:py-16 lg:py-28">
          <div className="order-1 lg:order-2 flex justify-center items-center animate-float mt-8 lg:mt-0">
            <BgHome className="w-full max-w-xl h-auto object-contain" />
          </div>

          <div className="order-2 lg:order-1 space-y-6 sm:space-y-8 animate-fade-in">
            {/* Greeting */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-black leading-tight">
                Hello I'am <span className="font-bold">Tran Thanh Dat</span>
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black flex items-center gap-2">
                <span>Unity</span>
                <span class="font-black text-white [-webkit-text-stroke:1.5px_black]">
                  Developer
                </span>
              </h2>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-base sm:text-2xl">
              <span className="text-gray-700">
                Based in{" "}
                <span className="font-bold text-black">HCM City, Vietnam</span>
              </span>
            </div>

            {/* Bio */}
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Unity Developer with 4+ years of experience developing mobile
              games, multiplayer games, arcade games, and AR applications.
              Strong expertise in Unity, C#, multiplayer architecture, Firebase,
              SDK integrations, Android/iOS deployment, and cross-functional
              collaboration. Experienced in delivering commercial products from
              development to production release on Google Play and App Store.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 sm:gap-4 pt-4 sm:pt-6">
              {[
                { name: "Facebook", icon: "f", href: "#" },
                { name: "GitHub", icon: "◆", href: "#" },
                { name: "LinkedIn", icon: "in", href: "#" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  title={social.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg border-2 border-black text-black flex items-center justify-center font-bold hover:bg-black hover:text-white hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg text-xs sm:text-sm"
                >
                  {social.name === "GitHub" ? (
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  ) : (
                    social.icon
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating animation */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
