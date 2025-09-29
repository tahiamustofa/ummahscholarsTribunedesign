'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function FindPestControl() {
  const [focused, setFocused] = useState(false);
  const [zip, setZip] = useState('');

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="bg-white shadow-sm md:flex md:items-center md:justify-between p-10"
        >
          {/* Left Side */}
          <div className="md:w-2/3">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Find Pest Control Near Me
            </h2>
            <p className="text-gray-700 mb-4">
              Orkin Pros are experts in your local pests because they live and
              work where you do.
            </p>
            <p className="text-gray-700">
              Call{' '}
              <a
                href="tel:8772999216"
                className="text-red-600 underline hover:text-red-700 transition-colors"
              >
                877-299-9216
              </a>{' '}
              or search based on your ZIP code for an exterminator near you.
            </p>
          </div>

          {/* Right Input with ONLY upward animation */}
          <div className="mt-8 md:mt-0 md:w-1/3">
            <div className="relative w-full border-b border-gray-400">
              <motion.label
                htmlFor="zip"
                // Slide straight up when focused or has value
                animate={{
                  y: focused || zip ? -24 : 0,
                  color: focused || zip ? '#6B7280' : '#9CA3AF'
                }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="absolute left-0 top-2 text-gray-500 uppercase tracking-wider pointer-events-none"
              >
                Enter Your Zip Code
              </motion.label>

              <input
                id="zip"
                type="text"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                className="w-full bg-transparent text-gray-800 focus:outline-none py-2 pt-6"
              />

              <button
                aria-label="Search"
                className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
              >
                ➜
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
