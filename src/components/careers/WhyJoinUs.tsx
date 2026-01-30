"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
  {
    title: "Fast growing company",
    description: "We are at an inflection point to achieve accelerated growth.",
  },
  {
    title: "Great colleagues",
    description: "Closely tied and supportive team.",
  },
  {
    title: "Take charge",
    description: "As much responsibility as you are willing to take and show excellence.",
  },
  {
    title: "Continuous learning",
    description: "An atmosphere where learning is always on the to-do list.",
  },
  {
    title: "Latest technology stack",
    description: "Working experience with cutting-edge technologies.",
  },
  {
    title: "Cross domain exposure",
    description:
      "Highly passionate and cohesive team of technology and business people.",
  },
];

export function WhyJoinUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section ref={ref} className="px-6 py-20 bg-white">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="mb-16 text-center text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Why Join Us
        </motion.h2>

        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {benefits.map((item, index) => (
            <motion.div
              key={item.title}
              className="flex gap-3 p-6 rounded-xl bg-gray-50 border border-gray-100"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{
                y: -4,
                transition: { duration: 0.3 },
              }}
            >
              <div
                className="shrink-0 mt-0.5 w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center"
                aria-hidden
              >
                <Check className="w-3.5 h-3.5 text-purple-600" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
