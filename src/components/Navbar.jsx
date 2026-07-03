"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // আপনার লোগোর সোনালী থিমের সাথে মিলিয়ে কালার প্যালেট
  const goldColor = "#C5A059";      // Primary Rich Gold
  const goldHover = "#A37F3D";      // Deep Gold for Hover
  const textColor = "#1A1A1A";      // Dark Slate for readability

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "News & Announcements", path: "/news" },
    { name: "Research & Studies", path: "/research" },
    { name: "Opinions & Perspectives", path: "/opinions" },
    { name: "Events & Initiatives", path: "/events" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b shadow-sm" style={{ borderColor: `${goldColor}33` }}>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-20">
          
          {/* লোগো সেকশন */}
          <Link href="/" className="flex items-center gap-3 group">
            <div 
              className="relative w-12 h-12 rounded-full overflow-hidden border-2 transition-transform duration-300 group-hover:scale-105"
              style={{ borderColor: goldColor, boxShadow: `0 0 10px ${goldColor}33` }}
            >
              {/* WhatsApp Image 2026-06-28 at 1.10.27 AM.jpg কে logo.jpg নামে public ফোল্ডারে রাখবেন */}
              <Image 
                src="/logo.jpeg" 
                alt="Ummah Scholars Tribune Logo" 
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span 
                className="font-serif font-bold text-sm sm:text-base tracking-wide leading-none transition-colors"
                style={{ color: textColor }}
              >
                UMMAH SCHOLARS
              </span>
              <span 
                className="font-serif text-[10px] sm:text-xs tracking-widest font-medium uppercase mt-0.5"
                style={{ color: goldColor }}
              >
                TRIBUNE
              </span>
            </div>
          </Link>

          {/* ডেস্কটপ মেনু */}
          <div className="hidden lg:flex items-center gap-6">
            {menuItems.map((item, index) => (
              <Link 
                key={index} 
                href={item.path}
                className="text-[15px] font-medium transition-all duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:transition-all after:duration-300 hover:after:w-full"
                style={{ 
                  color: textColor,
                  '--hover-color': goldColor 
                }}
                onMouseEnter={(e) => e.target.style.color = goldColor}
                onMouseLeave={(e) => e.target.style.color = textColor}
              >
                {item.name}
                <span 
                  className="absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: goldColor }}
                />
              </Link>
            ))}
          </div>

          {/* ডানদিকের অ্যাকশন বাটন */}
          <div className="hidden lg:block">
            <Link 
              href="/subscribe"
              className="px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 shadow-sm hover:shadow"
              style={{ 
                backgroundColor: 'transparent',
                color: goldColor,
                border: `1.5px solid ${goldColor}`,
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = goldColor;
                e.target.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = goldColor;
              }}
            >
              Subscribe
            </Link>
          </div>

          {/* মোবাইল মেনু বাটন (Hamburger) */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md transition-colors focus:outline-none"
              style={{ color: goldColor }}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* মোবাইল ড্রপডাউন মেনু */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t transition-all duration-300" style={{ borderColor: `${goldColor}22` }}>
          <div className="px-4 pt-3 pb-6 space-y-2">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className="block px-3 py-2.5 rounded-md text-base font-medium transition-colors"
                style={{ color: textColor }}
                onClick={() => setIsOpen(false)}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = `${goldColor}11`;
                  e.target.style.color = goldColor;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = textColor;
                }}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t px-3" style={{ borderColor: `${goldColor}11` }}>
              <Link
                href="/subscribe"
                className="block text-center py-2.5 rounded-full font-medium transition-colors"
                style={{ 
                  backgroundColor: goldColor, 
                  color: '#ffffff' 
                }}
                onClick={() => setIsOpen(false)}
              >
                Subscribe
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}