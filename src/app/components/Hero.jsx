"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: 'easeOut' },
  }),
};

const Hero = ({ heading, subheading, ratings }) => {
  return (
    <main className="mt-24 px-6 py-20 md:px-12 lg:px-24 flex flex-col lg:flex-row justify-between gap-12">
      {/* Left Section */}
      <motion.div
        className="w-full lg:w-[55%]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeUp}
        custom={0}
      >
        {/* Hero Images */}
        <motion.div
          className="flex flex-row gap-4 mb-6 flex-wrap"
          variants={fadeUp}
          custom={0.1}
        >
          <Image src='/images/rec1.png' alt="hero img" width={300} height={200} className="w-[45%] h-[200px] object-cover rounded-lg" />
          <Image src='/images/rec2.png' alt="hero img" width={300} height={200} className="w-[45%] h-[200px] object-cover rounded-lg" />
        </motion.div>

        {/* Headings & Text */}
        <motion.div className="flex flex-col gap-2" variants={fadeUp} custom={0.2}>
          <h1 className="mb-8 text-4xl lg:text-5xl font-bold font-lato w-[95%]">{heading}</h1>
          <p className="text-base text-gray-600 -mt-4 font-inter">{subheading}</p>

          {/* Users */}
          <motion.div
            className="flex items-center mt-4"
            variants={fadeUp}
            custom={0.3}
          >
            {["/images/user5.png", "/images/user1.png", "/images/user2.png", "/images/user3.png", "/images/user4.png"].map(
              (userPath, index) => (
                <Image
                  key={index}
                  src={userPath}
                  alt={`user-${index}`}
                  width={50}
                  height={50}
                  className={`rounded-full object-cover border-2 border-white ${index !== 0 ? "-ml-4" : ""}`}
                />
              )
            )}
          </motion.div>

          {/* Button */}
          <motion.button
            className="mt-4 px-6 py-4 text-white rounded-full w-[220px] bg-gradient-to-r from-purple-500 to-blue-700 hover:from-black hover:to-black transition-all"
            variants={fadeUp}
            custom={0.4}
          >
            Get Started
          </motion.button>
        </motion.div>

        {/* Divider */}
        <motion.hr
          className="w-[90%] my-8 border-gray-300"
          variants={fadeUp}
          custom={0.5}
        />

        {/* Ratings */}
        <motion.div
          className="flex flex-row items-center divide-x divide-gray-300"
          variants={fadeUp}
          custom={0.6}
        >
          {ratings &&
            ratings.map((item, index) => (
              <div key={index} className="px-3 py-2 lg:px-4 lg:py-2 items-center">
                <h3 className="text-sm lg:text-2xl font-bold text-center">{item.value}</h3>
                <p className="text-gray-600 text-xs lg:text-sm text-center">{item.label}</p>
              </div>
            ))}
        </motion.div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="w-full lg:w-[45%]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeUp}
        custom={0.3}
      >
        <Image src="/images/rec3.png" alt="hero right img" width={600} height={400} className="w-full h-full object-cover rounded-lg" />
      </motion.div>
    </main>
  );
};

export default Hero;
