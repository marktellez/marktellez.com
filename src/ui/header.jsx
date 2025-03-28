"use client"

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full py-3 px-3 bg-background shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/marktellez.png"
            alt="Mark Tellez"
            width={36}
            height={36}
            className="rounded-full border-2 border-gray-200"
            priority
          />
          <span className="font-bold text-base sm:text-lg">Mark Tellez</span>
        </Link>

        {/* Hamburger button for mobile */}
        <button
          className="sm:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop navigation */}
        <nav className="hidden sm:flex items-center space-x-6">
          <Link href="/" className="text-base font-medium hover:text-blue-600 transition-colors">Home</Link>
          <Link href="/resume" className="text-base font-medium hover:text-blue-600 transition-colors">My Resume</Link>
          <Link href="/contact" className="text-base font-medium hover:text-blue-600 transition-colors">Contact Me</Link>
          <Link href="/testimonials" className="text-base font-medium hover:text-blue-600 transition-colors">Testimonials</Link>
        </nav>
      </div>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <nav className="sm:hidden mt-3 py-3 px-2 bg-background border-t">
          <div className="flex flex-col space-y-3">
            <Link href="/" className="text-sm font-medium hover:text-blue-600 transition-colors">Home</Link>
            <Link href="/blog" className="text-sm font-medium hover:text-blue-600 transition-colors">Blog</Link>
            <Link href="/about" className="text-sm font-medium hover:text-blue-600 transition-colors">About</Link>
            <Link href="/contact" className="text-sm font-medium hover:text-blue-600 transition-colors">Contact</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
