"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Prefooter = () => {
  return (
    <section className="mx-8 lg:mx-40 my-10 lg:my-20 px-16 lg:px-16 py-10 lg:py-20 bg-gradient-to-r from-[#A259FF] to-[#0011FF] flex flex-col lg:flex-row items-center justify-between rounded-xl text-white gap-6">
      <h2 className="text-3xl sm:text-2xl font-semibold text-center lg:text-left">
        Join 10,000+ creators getting matched instantly!
      </h2>

      <button className="bg-white text-purple-500 font-semibold py-3 px-8 sm:px-4 sm:py-2 rounded-full transition w-full sm:w-auto">
        Get Matched
      </button>
    </section>
  );
};


export default Prefooter;
