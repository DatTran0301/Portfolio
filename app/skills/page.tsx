"use client";

import Link from "next/link";
import { useState } from "react";

interface Skill {
  id: number;
  name: string;
  icon: string;
}

const skillsData: Skill[] = [
  { id: 1, name: "Xcode", icon: "📱" },
  { id: 2, name: "Design Patterns", icon: "📐" },
  { id: 3, name: "Firebase", icon: "🔥" },
  { id: 4, name: "Unity", icon: "⚙️" },
  { id: 5, name: "OOP", icon: "🎯" },
  { id: 6, name: "Foundation", icon: "🏗️" },
  { id: 7, name: "AppFlyer", icon: "🎲" },
  { id: 8, name: "Mobile Game Optimization", icon: "⚡" },
  { id: 9, name: "C#", icon: "💻" },
  { id: 10, name: "Android Studio", icon: "🤖" },
  { id: 11, name: "Git", icon: "🌳" },
];

export default function SkillsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition"
          >
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center transform hover:scale-110 transition">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="font-semibold text-black text-base sm:text-lg">
              Personal
            </span>
          </Link>

          {/* Nav Links - Desktop */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            <Link
              href="/#about"
              className="text-gray-700 hover:text-black font-medium transition-all duration-300 relative group text-sm lg:text-base"
            >
              About Me
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/skills"
              className="text-black font-medium transition-all duration-300 relative group text-sm lg:text-base border-b-2 border-black"
            >
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/#projects"
              className="text-gray-700 hover:text-black font-medium transition-all duration-300 relative group text-sm lg:text-base"
            >
              Project
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/#contact"
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
                href="/#about"
                className="block text-gray-700 hover:text-black font-medium py-2 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                About Me
              </Link>
              <Link
                href="/skills"
                className="block text-black font-medium py-2 transition border-b-2 border-black"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </Link>
              <Link
                href="/#projects"
                className="block text-gray-700 hover:text-black font-medium py-2 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Project
              </Link>
              <Link
                href="/#contact"
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

      {/* Skills Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
            My Skills
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            A collection of technologies and expertise I've developed through
            years of game development and software engineering.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {skillsData.map((skill) => (
            <div
              key={skill.id}
              className="group bg-white border-2 border-black rounded-lg p-6 sm:p-8 flex flex-col items-center justify-center text-center hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="font-semibold text-black text-sm sm:text-base">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Back to Home Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
