'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-50">
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-[var(--loot-blue)] via-[var(--epic-purple)] to-[var(--legendary-orange)]" />
      
      <nav className="bg-[var(--card-bg)]/80 backdrop-blur-md border-b border-[var(--card-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded bg-gradient-to-br from-[var(--victory-gold)] to-[var(--legendary-orange)] flex items-center justify-center font-bold text-black text-xl transform group-hover:rotate-12 transition-transform">
                L
              </div>
              <div>
                <h1 className="text-lg font-bold text-white leading-none" style={{ fontFamily: 'var(--font-display)' }}>
                  LUCAS
                </h1>
                <span className="text-xs text-[var(--loot-blue)] tracking-wider">FORTNITE BLOG</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <Link 
                href="/" 
                className="text-white hover:text-[var(--victory-gold)] transition-colors font-medium"
              >
                Home
              </Link>
              <Link 
                href="/blog" 
                className="text-white hover:text-[var(--victory-gold)] transition-colors font-medium"
              >
                All Posts
              </Link>
              <Link 
                href="/blog/category/tips" 
                className="text-white hover:text-[var(--victory-gold)] transition-colors font-medium"
              >
                Tips
              </Link>
              <Link 
                href="/blog/category/news" 
                className="text-white hover:text-[var(--victory-gold)] transition-colors font-medium"
              >
                News
              </Link>
              <Link 
                href="/about" 
                className="text-white hover:text-[var(--victory-gold)] transition-colors font-medium"
              >
                About
              </Link>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-white hover:text-[var(--victory-gold)] transition-colors"
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
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-[var(--card-bg)] border-t border-[var(--card-border)]">
            <div className="px-4 py-3 space-y-2">
              <Link 
                href="/" 
                className="block py-2 text-white hover:text-[var(--victory-gold)] transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/blog" 
                className="block py-2 text-white hover:text-[var(--victory-gold)] transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                All Posts
              </Link>
              <Link 
                href="/blog/category/tips" 
                className="block py-2 text-white hover:text-[var(--victory-gold)] transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Tips & Tricks
              </Link>
              <Link 
                href="/blog/category/news" 
                className="block py-2 text-white hover:text-[var(--victory-gold)] transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                News
              </Link>
              <Link 
                href="/about" 
                className="block py-2 text-white hover:text-[var(--victory-gold)] transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About Me
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
