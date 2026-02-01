"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { getGmailComposeUrl, CAREERS_EMAIL } from "@/lib/careers/jobs";

const JOIN_US_SUBJECT = "Career Inquiry – Join HyperBuds";

export function CareersHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const composeUrl = getGmailComposeUrl(CAREERS_EMAIL, JOIN_US_SUBJECT);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-6 pt-32 pb-24 bg-linear-to-br from-purple-500 to-blue-600 dark:from-purple-600 dark:to-blue-700 min-h-[70vh] flex items-center"
    >
      {/* Decorative Elements. */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-6 h-6 rounded-lg bg-white/20"
          animate={
            isInView
              ? {
                  y: [0, -15, 5, -10, 0],
                  x: [0, 5, -3, 8, 0],
                  rotate: [0, 90, 180, 270, 360],
                  opacity: [0.8, 1, 0.6, 1, 0.8],
                }
              : {}
          }
          transition={{ duration: 8, repeat: Infinity, ease: [0.4, 0, 0.6, 1] }}
        />
        <motion.div
          className="absolute top-10 left-10 w-4 h-4 rounded-full bg-white/20"
          animate={
            isInView
              ? {
                  opacity: [0, 1, 0.7, 1, 0.8],
                  scale: [0, 1, 1.3, 0.9, 1.1],
                  y: [0, -12, 3, -8, 0],
                }
              : { opacity: 0, scale: 0 }
          }
          transition={{
            duration: 0.8,
            delay: 0.2,
            opacity: { duration: 4, repeat: Infinity },
            scale: { duration: 4, repeat: Infinity },
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-3 h-3 rounded bg-white/20"
          animate={
            isInView
              ? {
                  opacity: [0, 1, 0.6, 1, 0.8],
                  y: [0, -5, 8, -3, 0],
                  rotate: [0, 45, 90, 135, 180],
                }
              : { opacity: 0 }
          }
          transition={{
            duration: 0.7,
            delay: 0.4,
            opacity: { duration: 3, repeat: Infinity },
          }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.h1
          className="mb-6 text-5xl font-bold text-white md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Careers
        </motion.h1>

        <motion.p
          className="mx-auto mb-4 text-lg leading-relaxed text-white/90 md:text-xl"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Have a zeal to contribute to the real world and create a visible impact
          in businesses and lives of consumers?
        </motion.p>

        <motion.p
          className="mx-auto mb-10 text-lg leading-relaxed text-white/90 md:text-xl"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          We are transforming businesses and consumer experience everyday using
          technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Link
            href={composeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30"
            aria-label="Open Gmail to apply"
          >
            Join Us
            <span aria-hidden> →</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
