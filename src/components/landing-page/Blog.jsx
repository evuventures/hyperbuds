"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Blogs = () => {
  const subPosts = [
    {
      src: '/images/blog1.png',
      cat: 'Creativity',
      title: 'Breaking Through Creative Blocks with Smart Tools',
      alt: 'Creative tools blog image',
    },
    {
      src: '/images/blog2.png',
      cat: 'Product Updates',
      title: 'Inside HyperBuds: What’s New This Month?',
      alt: 'Product updates blog image',
    },
    {
      src: '/images/blog3.png',
      cat: 'Education',
      title: 'How Educators Are Using HyperBuds for Student Projects',
      alt: 'Education blog image',
    },
  ];

  return (
    <section className="px-6 sm:px-10 md:px-20 lg:px-32 py-16">
      {/* Head Section */}
      <div className="flex flex-col sm:flex-row justify-between mb-16 sm:mb-4 gap-6 sm:gap-0">
        <h2 className="text-2xl md:text-3xl font-semibold">Recent Blog Posts</h2>
        <button className="bg-gradient-to-r from-purple-500 to-blue-700 text-white px-6 py-4 sm:px-4 rounded-full w-fit">
          Read more Articles
        </button>
      </div>

      {/* Blog Content */}
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        {/* Main Blog Post */}
        <motion.div
          className="flex flex-col w-full lg:w-[48%] gap-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Image
            src="/images/blogpage.png"
            alt="AI teamwork blog header"
            width={800}
            height={450}
            className="rounded-lg w-full h-auto object-cover"
          />
          <span className="text-sm text-purple-500 font-semibold">Collaboration</span>
          <h2 className="text-xl font-bold leading-snug">5 Ways AI Is Changing Teamwork Forever</h2>
          <div className="flex items-center space-x-2 text-gray-500 text-sm">
            <p>May 5, 2025</p>
            <p>•</p>
            <p>3 min read</p>
          </div>
          <p className="text-gray-600 text-sm">
            From generating ideas to organizing tasks, AI is no longer just a buzzword—it’s transforming the way
            teams collaborate. Discover how tools like HyperBuds are making workflows faster, smarter, and more human-friendly.
          </p>
        </motion.div>

        {/* Sub Blog Posts */}
        <motion.div
          className="flex flex-col gap-6 w-full lg:w-[48%]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {subPosts.map((post, idx) => (
            <motion.div
              key={idx}
              className="flex gap-4"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={post.src}
                alt={post.alt}
                width={128}
                height={128}
                className="w-24 h-24 lg:w-32 lg:h-32 object-cover rounded-md"
              />
              <div className="flex flex-col justify-between">
                <p className="text-sm text-purple-500 font-medium">{post.cat}</p>
                <h2 className="font-semibold text-base lg:text-xl">{post.title}</h2>
                <div className="flex items-center space-x-2 text-gray-500 text-xs">
                  <p>May 5, 2025</p>
                  <p>•</p>
                  <p>3 min read</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Blogs;
