"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function AboutSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goldColor = "#C5A059";      // Primary Gold
  const goldHover = "#A37F3D";      // Deep Gold

  // আপনার ৩টি ইমেজের অ্যারে (public ফোল্ডারে about.jpeg, about2.jpeg, about3.jpeg রাখবেন)
  const slides = [
    {
      image: "/about.jpeg",
      title: "OUR SCHOLARLY JOURNEY",
      subtitle: "A DEDICATED PLATFORM FOR GLOBAL SCHOLARSHIP",
      description: "Welcome to the Ummah Scholars Tribune, your gateway to deep insights, announcements, and research from esteemed global scholars. We are committed to empowering the community through knowledge."
    },
    {
      image: "/about2.webp", // আপনার ২য় ইমেজ
      title: "AUTHENTIC ISLAMIC RESEARCH",
      subtitle: "PRESERVING KNOWLEDGE FOR NEXT GENERATIONS",
      description: "Access peer-reviewed articles, theological studies, and contemporary jurisprudential discussions vetted by top international academic councils."
    },
    {
      image: "/about.jpeg", // আপনার ৩য় ইমেজ
      title: "COMMUNITY ENGAGEMENT",
      subtitle: "BRIDGING THE GAP BETWEEN SCHOLARS & UMMAH",
      description: "Participate in global initiatives, online seminars, and discover local and international announcements affecting our cultural landscape."
    }
  ];

  // অটোমেটিক স্লাইড চেঞ্জ হওয়ার লজিক (প্রতি ৫ সেকেন্ড পর পর)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[80vh] md:h-[90vh] min-h-[550px] bg-stone-950 overflow-hidden flex items-center justify-center">
      
      {/* স্লাইডসমূহ */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* ব্যাকগ্রাউন্ড ইমেজ */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            className="object-cover object-center opacity-65 scale-100"
          />
          
          {/* ইমেজটির ওপর প্রিমিয়াম গোল্ডেন-ব্ল্যাক শেড/ওভারলে */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/70" />
          
          {/* টেক্সট কন্টেন্ট */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto mt-8">
            <h2 
              className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold tracking-wide mb-3 drop-shadow-lg"
              style={{ color: goldColor }}
            >
              {slide.title}
            </h2>
            
            <h3 className="text-xl md:text-2xl lg:text-3xl font-serif font-medium text-white mb-6 tracking-wider max-w-3xl">
              {slide.subtitle}
            </h3>
            
            <p className="text-gray-200 text-sm md:text-base lg:text-lg max-w-3xl mb-10 font-normal leading-relaxed drop-shadow">
              {slide.description}
            </p>

            {/* Discover Our Mission বাটন */}
            <button
              className="px-8 py-3.5 rounded-full font-bold text-sm md:text-base text-stone-950 transition-all duration-300 shadow-xl border border-transparent hover:scale-102"
              style={{ 
                background: `linear-gradient(135deg, ${goldColor} 0%, #A37F3D 100%)`,
                boxShadow: `0 4px 20px rgba(197, 160, 89, 0.3)`
              }}
              onMouseEnter={(e) => e.target.style.background = `linear-gradient(135deg, #A37F3D 0%, #85642E 100%)`}
              onMouseLeave={(e) => e.target.style.background = `linear-gradient(135deg, ${goldColor} 0%, #A37F3D 100%)`}
            >
              Discover Our Mission
            </button>
          </div>
        </div>
      ))}

      {/* বাম পাশের অ্যারো বাটন */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 z-20 p-2.5 rounded-full border-2 bg-black/20 hover:bg-black/50 transition-all duration-300 focus:outline-none"
        style={{ borderColor: `${goldColor}66`, color: goldColor }}
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* ডান পাশের অ্যারো বাটন */}
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 z-20 p-2.5 rounded-full border-2 bg-black/20 hover:bg-black/50 transition-all duration-300 focus:outline-none"
        style={{ borderColor: `${goldColor}66`, color: goldColor }}
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* নিচের ডট ইন্ডিকেটরগুলো */}
      <div className="absolute bottom-8 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
              index === currentSlide ? "w-8" : "w-2.5"
            }`}
            style={{ backgroundColor: index === currentSlide ? goldColor : `${goldColor}44` }}
          />
        ))}
      </div>

      {/* নিচের স্মুথ গ্রেডিয়েন্ট বর্ডার */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t  pointer-events-none z-20" />
    </div>
  );
}