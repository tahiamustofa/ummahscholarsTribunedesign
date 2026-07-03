"use client";

import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function ResearchPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const goldColor = "#C5A059";
  const textColor = "#1A1A1A";

  // ক্যাটাগরি লিস্ট
  const categories = ["All", "Quranic Studies", "Hadith & Sunnah", "Islamic Finance", "Contemporary Issues"];

  // ডামি রিসার্চ ডাটা (আপনার প্রয়োজন মতো পরিবর্তন করে নিতে পারবেন)
  const researchPapers = [
    {
      id: 1,
      title: "The Role of Islamic Microfinance in Poverty Alleviation",
      author: "Dr. Muhammad Al-Hasan",
      date: "June 2026",
      category: "Islamic Finance",
      abstract: "This paper examines contemporary microfinance models through the lens of Shariah principles, highlighting empirical data from South Asian Muslim communities...",
      downloadUrl: "#"
    },
    {
      id: 2,
      title: "Nuances of Hadith Contextualization in the Digital Age",
      author: "Prof. Abdul Rahman",
      date: "May 2026",
      category: "Hadith & Sunnah",
      abstract: "An in-depth methodological study exploring how digital databases impact the traditional understanding and verification process of prophetic narrations...",
      downloadUrl: "#"
    },
    {
      id: 3,
      title: "Environmental Ethics in Quranic Exegesis (Tafsir)",
      author: "Dr. Fatima Al-Zahra",
      date: "April 2026",
      category: "Quranic Studies",
      abstract: "A comprehensive review of classical and modern Tafsir literature regarding humanity's responsibility as stewards (Khulafa) of the Earth...",
      downloadUrl: "#"
    },
    {
      id: 4,
      title: "Bioethics and Modern Medicine: An Islamic Jurisprudence Review",
      author: "Dr. Tariq Mahmood",
      date: "March 2026",
      category: "Contemporary Issues",
      abstract: "Addressing modern medical advancements including gene editing and artificial life support from the framework of Maqasid al-Shariah...",
      downloadUrl: "#"
    }
  ];

  // ফিল্টারিং লজিক
  const filteredPapers = activeCategory === "All" 
    ? researchPapers 
    : researchPapers.filter(paper => paper.category === activeCategory);

  return (
    <main className="min-h-screen bg-gray-50/50">
      {/* নেভিগেশন বার */}
      <Navbar />

      {/* পেইজ হেডার */}
    {/* পেইজ হেডার সেকশন - ব্যাকগ্রাউন্ড ইমেজ সহ */}
<div className="relative bg-stone-950 py-20 px-6 md:px-12 text-center overflow-hidden">
  
  {/* ব্যাকগ্রাউন্ড ইমেজ (public/research-bg.jpeg) */}
  <div className="absolute inset-0 w-full h-full">
    <Image
      src="/8.png" // আপনার ইমেজের নাম ও এক্সটেনশন অনুযায়ী চেঞ্জ করতে পারেন
      alt="Research Academic Banner"
      fill
      priority
      className="object-cover object-center opacity-40" // ইমেজ স্পষ্ট করার জন্য অপাসিটি ৪০% রাখা হয়েছে
    />
    {/* ডার্ক গ্রেডিয়েন্ট ওভারলে যাতে লেখাগুলো চমৎকার ফুটে ওঠে */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/10" />
  </div>

  {/* মেইন কনটেন্ট (relative z-10 দেওয়া হয়েছে যেন ইমেজের উপরে থাকে) */}
  <div className="relative z-10 max-w-3xl mx-auto">
    <span 
      className="text-xs font-bold uppercase tracking-[0.25em] mb-3 bg-black/30 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10 inline-block"
      style={{ color: goldColor }}
    >
      Academic Publications
    </span>
    
    <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-white drop-shadow-md">
      Research & Academic <span style={{ color: goldColor }}>Studies</span>
    </h1>
    
    <p className="text-gray-200 text-sm md:text-base max-w-2xl mx-auto leading-relaxed drop-shadow">
      Explore peer-reviewed journals, scholarly articles, and contemporary Islamic research papers dedicated to bridging classical knowledge with modern challenges.
    </p>
  </div>
</div>

      {/* মেইন কন্টেন্ট এরিয়া */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12">
        
        {/* ফিল্টার ট্যাব সমূহ */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border focus:outline-none"
              style={{
                backgroundColor: activeCategory === category ? goldColor : 'transparent',
                color: activeCategory === category ? '#ffffff' : textColor,
                borderColor: activeCategory === category ? goldColor : `${goldColor}44`,
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* রিসার্চ পেপার লিস্ট/কার্ড */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPapers.map((paper) => (
            <div 
              key={paper.id}
              className="bg-white rounded-2xl p-6 md:p-8 border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              style={{ borderColor: `${goldColor}22` }}
            >
              <div>
                {/* টপ মেটা ডাটা */}
                <div className="flex items-center justify-between mb-4">
                  <span 
                    className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-50"
                    style={{ color: goldColor }}
                  >
                    {paper.category}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">{paper.date}</span>
                </div>

                {/* টাইটেল */}
                <h3 className="text-xl font-serif font-bold mb-2 hover:text-amber-700 transition-colors cursor-pointer" style={{ color: textColor }}>
                  {paper.title}
                </h3>

                {/* লেখক বা স্কলারের নাম */}
                <p className="text-sm font-medium text-gray-500 mb-4">
                  By <span className="text-gray-700">{paper.author}</span>
                </p>

                {/* অ্যাবস্ট্রাক্ট বা সারসংক্ষেপ */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {paper.abstract}
                </p>
              </div>

              {/* বটম অ্যাকশন এরিয়া */}
              <div className="pt-4 border-t flex items-center justify-between border-gray-100">
                <a 
                  href={paper.downloadUrl}
                  className="text-sm font-semibold flex items-center gap-1.5 transition-colors group"
                  style={{ color: goldColor }}
                >
                  Read Abstract
                  <svg className="h-4 w-4 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                {/* PDF ডাউনলোড বাটন ইফেক্ট */}
                <button 
                  className="p-2 rounded-full hover:bg-amber-50 transition-colors group"
                  title="Download PDF"
                >
                  <svg className="h-5 w-5 text-gray-400 group-hover:text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* যদি কোনো পেপার ম্যাচ না করে */}
        {filteredPapers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No research papers found in this category.</p>
          </div>
        )}

      </div>
    </main>
  );
}