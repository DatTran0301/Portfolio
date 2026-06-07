"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-lg">P</span>
              </div>
              <span className="font-semibold text-lg">Tran Dat</span>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm text-center sm:text-right">
            © {currentYear} Tran Thanh Dat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
