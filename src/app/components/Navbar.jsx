"use client";

import React from 'react';
import Image from "next/image";
import Link from 'next/link';
function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white py-6 px-6 md:px-16 lg:px-32 flex justify-between items-center fixed top-0 left-0 w-full z-50 shadow-md">
      {/* Logo */}
      <div className="logo">
        <Image
          src="/images/HyperBuds (3).png"
          alt="Logo"
          width={192} 
          height={48} 
          className="w-32 lg:w-48 h-auto"
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-16">
        <ul className="flex gap-6 list-none m-0 p-0">
          {['Home', 'Features', 'How it works', 'Blogs', 'Contact'].map((item) => (
            <li key={item}>
              <a href="#" className="text-black text-base hover:text-purple-500 hover:text-lg transition-all">
                {item}
              </a>
            </li>
          ))}
        </ul>
        <Link href='./Comingsoon.jsx'>
        <button className="px-6 py-4 text-white rounded-full bg-gradient-to-r from-purple-500 to-blue-700 w-56 hover:bg-black transition-colors">
          Get Started
        </button>
        </Link>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center gap-10 py-6">
          {['Home', 'Features', 'How it works', 'Blogs', 'Contact'].map((item) => (
            <a key={item} href="#" className="text-black text-base hover:text-purple-500 transition-all">
              {item}
            </a>
          ))}
          <button className="px-6 py-4 text-white rounded-full bg-gradient-to-r from-purple-500 to-blue-700 w-48 hover:bg-black transition-colors">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
