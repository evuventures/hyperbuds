"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const JOB_CATEGORIES = [
  {
    label: "Design",
    badgeColor: "bg-amber-100 text-amber-800",
    roles: [
      { title: "UI/UX Designer", type: "Full Time, Remote OK" },
      { title: "Graphic Designer", type: "Full Time, Remote OK" },
    ],
  },
  {
    label: "Development",
    badgeColor: "bg-purple-100 text-purple-800",
    roles: [
      { title: "Full Stack Developer", type: "Full Time, Remote OK" },
    ],
  },
  {
    label: "Business & Marketing",
    badgeColor: "bg-blue-100 text-blue-800",
    roles: [
      { title: "Fund Raising", type: "Full Time" },
      { title: "Marketing", type: "Full Time, Remote OK" },
      { title: "Social Media Manager", type: "Full Time, Remote OK" },
    ],
  },
];

export function OpenPositions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section ref={ref} className="px-6 py-20 bg-gray-50">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span
            className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-purple-700 uppercase rounded-md bg-purple-100"
            aria-hidden
          >
            Open Positions
          </span>
          <h2 className="mb-3 text-3xl font-bold text-gray-800 md:text-4xl">
            Want to join Team HyperBuds?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Check out our open roles below. Interested? Use the Join Us button above to get in touch.
          </p>
        </motion.div>

        {/* Job list by category */}
        <div className="space-y-10">
          {JOB_CATEGORIES.map((category, catIndex) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.6,
                delay: 0.2 + catIndex * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <span
                className={`inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase rounded-md ${category.badgeColor}`}
              >
                {category.label}
              </span>
              <ul className="space-y-0 overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm">
                {category.roles.map((role) => (
                  <li key={role.title} className="border-b border-gray-100 last:border-b-0">
                    <div className="flex items-center justify-between px-5 py-4">
                      <div>
                        <span className="font-medium text-gray-800">
                          {role.title}
                        </span>
                        <span className="block text-sm text-gray-500">
                          {role.type}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-12 text-center text-gray-600"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Want to know more about the company?{" "}
          <Link
            href="/about"
            className="font-medium text-purple-600 underline hover:text-purple-700 transition-colors"
          >
            Click here
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
