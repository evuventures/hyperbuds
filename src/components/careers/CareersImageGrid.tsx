"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const gridImages = [
  { src: "/images/blogpage.png", alt: "Collaborative workspace" },
  { src: "/images/artist.png", alt: "Team connection" },
  { src: "/images/agency.png", alt: "Creative content" },
  { src: "/images/download (3).jpeg", alt: "Live collaboration" },
  { src: "/images/educators.png", alt: "Market reach" },
  { src: "/images/download (1).jpeg", alt: "AI matching" },
];

export function CareersImageGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section ref={ref} className="px-6 py-16 bg-white">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {gridImages.map((img, index) => (
            <motion.div
              key={img.src}
              className="relative overflow-hidden rounded-2xl aspect-[4/3] shadow-md"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 transition-opacity from-black/20 hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
