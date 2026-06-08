"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button, Dropdown, MenuProps } from "antd";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://drive.google.com/file/d/1IyLPac61x9wnAkR5vNoPEPknMUoRdpJK/view?usp=sharing"
      >
        Unity Developer
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://drive.google.com/file/d/16gqhZxEDytecwtUQjKxcfN18OWEODzsw/view?usp=drive_link"
      >
        Frontend Developer
      </a>
    ),
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
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
            Tran Dat
          </span>
        </Link>

        {/* Nav Links - Desktop */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          <Link
            href="/experience"
            className={`font-medium transition-all duration-300 relative group text-sm lg:text-base ${
              isActive("/experience")
                ? "text-black border-b-2 border-black"
                : "text-gray-700 hover:text-black"
            }`}
          >
            Experience
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/skills"
            className={`font-medium transition-all duration-300 relative group text-sm lg:text-base ${
              isActive("/skills")
                ? "text-black border-b-2 border-black"
                : "text-gray-700 hover:text-black"
            }`}
          >
            Skills
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/projects"
            className={`font-medium transition-all duration-300 relative group text-sm lg:text-base ${
              isActive("/projects")
                ? "text-black border-b-2 border-black"
                : "text-gray-700 hover:text-black"
            }`}
          >
            Project
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/about"
            className={`font-medium transition-all duration-300 relative group text-sm lg:text-base ${
              isActive("/about")
                ? "text-black border-b-2 border-black"
                : "text-gray-700 hover:text-black"
            }`}
          >
            About Me
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/contact"
            className={`font-medium transition-all duration-300 relative group text-sm lg:text-base ${
              isActive("/contact")
                ? "text-black border-b-2 border-black"
                : "text-gray-700 hover:text-black"
            }`}
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
          <Dropdown
            menu={{ items }}
            placement="bottom"
            arrow={{ pointAtCenter: true }}
          >
            <div>
              <span>Download CV </span>
              <span className="text-sm">↓</span>
            </div>
          </Dropdown>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3 space-y-2">
            <Link
              href="/about"
              className="block text-gray-700 hover:text-black font-medium py-2 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              About Me
            </Link>
            <Link
              href="/skills"
              className={`block font-medium py-2 transition ${
                isActive("/skills")
                  ? "text-black border-b-2 border-black"
                  : "text-gray-700 hover:text-black"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </Link>
            <Link
              href="/projects"
              className="block text-gray-700 hover:text-black font-medium py-2 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Project
            </Link>
            <Link
              href="/contact"
              className={`block font-medium py-2 transition ${
                isActive("/contact")
                  ? "text-black border-b-2 border-black"
                  : "text-gray-700 hover:text-black"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Me
            </Link>
            <button className="w-full mt-3 bg-black text-white px-4 py-2.5 rounded-lg font-medium hover:bg-gray-800 transition text-sm">
              <Dropdown
                menu={{ items }}
                placement="bottom"
                arrow={{ pointAtCenter: true }}
              >
                <div>
                  <span>Download CV </span>
                  <span className="text-sm">↓</span>
                </div>
              </Dropdown>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
