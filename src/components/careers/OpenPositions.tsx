"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { jobs } from "@/lib/careers/jobs";

const CATEGORY_CONFIG: Record<string, { label: string; badgeColor: string }> = {
  design: { label: "Design", badgeColor: "bg-amber-100 text-amber-800" },
  development: {
    label: "Development",
    badgeColor: "bg-purple-100 text-purple-800",
  },
  business: {
    label: "Business & Marketing",
    badgeColor: "bg-blue-100 text-blue-800",
  },
};

const jobsByCategory = jobs.reduce<
  Record<string, typeof jobs>
>((acc, job) => {
  const cat = job.category;
  if (!acc[cat]) acc[cat] = [];
  acc[cat].push(job);
  return acc;
}, {});

const categoryOrder: ("design" | "development" | "business")[] = [
  "design",
  "development",
  "business",
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
            Check out our open roles below. Click on a role to view the full job
            description and apply.
          </p>
        </motion.div>

        {/* Job list by category */}
        <div className="space-y-10">
          {categoryOrder.map((catKey, catIndex) => {
            const categoryJobs = jobsByCategory[catKey];
            if (!categoryJobs?.length) return null;
            const config = CATEGORY_CONFIG[catKey];
            return (
              <motion.div
                key={catKey}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + catIndex * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <span
                  className={`inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase rounded-md ${config.badgeColor}`}
                >
                  {config.label}
                </span>
                <ul className="space-y-0 overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm">
                  {categoryJobs.map((job) => (
                    <li
                      key={job.slug}
                      className="border-b border-gray-100 last:border-b-0"
                    >
                      <Link
                        href={`/careers/${job.slug}`}
                        className="flex items-center justify-between px-5 py-4 transition-colors hover:bg-purple-50/50 group"
                        aria-label={`View ${job.title} - ${job.type}, ${job.location}`}
                      >
                        <div>
                          <span className="font-medium text-gray-800 group-hover:text-purple-600 transition-colors">
                            {job.title}
                          </span>
                          <span className="block text-sm text-gray-500">
                            {job.type}
                            {job.postedDate ? ` · ${job.postedDate}` : ""} ·{" "}
                            {job.location}
                          </span>
                        </div>
                        <ChevronRight
                          className="w-5 h-5 text-gray-400 group-hover:text-purple-500 group-hover:translate-x-0.5 transition-all shrink-0"
                          aria-hidden
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
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
