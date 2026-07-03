"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function HeroSlider() {
  const [searchQuery, setSearchQuery] = useState("");

  const goldColor = "#C5A059";
  const goldHover = "#A37F3D";

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
    }
  };

  return (
    <div className="relative w-full h-[80vh] md:h-[95vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-stone-950">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/home.jpeg"
          alt="Ummah Scholars Tribune Banner"
          fill
          priority
          className="object-cover object-center opacity-70 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center py-24 md:py-36">
        {/* Badge */}
        <span
          className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] mb-4 bg-black/40 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10"
          style={{ color: goldColor }}
        >
          Welcome to Ummah Scholars Tribune
        </span>

        {/* Heading (Slightly Smaller) */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight max-w-3xl drop-shadow-md">
          Empowering The Ummah With{" "}
          <span style={{ color: goldColor }}>Knowledge</span> & Perspective
        </h2>

        {/* Description */}
        <p className="text-gray-100 text-sm md:text-lg max-w-2xl mb-12 font-medium leading-relaxed drop-shadow">
          Explore authentic research, global announcements, contemporary
          studies, and profound Islamic insights from esteemed scholars
          worldwide.
        </p>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="w-full max-w-2xl bg-black/40 backdrop-blur-md p-2 rounded-full border flex items-center shadow-2xl transition-all duration-300 focus-within:ring-2 focus-within:bg-black/60"
          style={{
            borderColor: `${goldColor}88`,
            "--tw-ring-color": goldColor,
          }}
        >
          {/* Search Icon */}
          <div className="pl-4 pr-2 text-gray-300">
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Input */}
          <input
            type="text"
            placeholder="Search articles, research papers, news..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent border-none outline-none text-white placeholder-gray-300 px-2 py-3 text-sm md:text-base focus:ring-0"
          />

          {/* Button */}
          <button
            type="submit"
            className="px-6 md:px-9 py-3.5 rounded-full font-bold text-sm md:text-base text-black transition-all duration-300 whitespace-nowrap shadow-md hover:shadow-xl hover:scale-105"
            style={{ backgroundColor: goldColor }}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor = goldHover)
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = goldColor)
            }
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}