"use client";

import React from 'react';
import { motion } from 'framer-motion'; // Import motion for animations
import Image from 'next/image';

// Update the image paths to point to the public folder
const testimonialsData = [
  {
    name: 'Babatunde Kosoko',
    text: 'elis, in fringilla Praesent elit. ex. ex maximus lacus, diam Sed tincidunt in lorem. quam non ultrices nisi nisl. Ut nisi nulla, ipsum ex scelerisque dui. eu ',
    image: '/images/african.png', // Image path updated
    style: 'response-neutral'
  },
  {
    name: 'Teresa Diroll',
    text: 'elis, in fringilla Praesent elit. ex. ex maximus lacus, diam Sed tincidunt in lorem. quam non ultrices nisi nisl. Ut nisi nulla, ipsum ex scelerisque dui. eu ',
    image: '/images/american.png', // Image path updated
    style: 'response-neutral'
  },
  {
    name: 'Park Jin Hoo',
    text: 'elis, in fringilla Praesent elit. ex. ex maximus lacus, diam Sed tincidunt in lorem. quam non ultrices nisi nisl. Ut nisi nulla, ipsum ex scelerisque dui. eu ',
    image: '/images/asian.png', // Image path updated
    style: 'response-neutral'
  }
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = React.useState(null);

  return (
    <section className="testimonial flex flex-col lg:flex-row items-center justify-between gap-16 px-6 py-10 md:px-20 lg:px-32">
      <div className="testimonial-section-one flex flex-col gap-6 text-center w-full lg:w-2/5 md:text-left">
        <h2 className="text-3xl text-left font-bold">What Our Creators Say</h2>
        <span className="text-sm md:text-base mb-6 tracking-wide max-w-4xl text-left">
          nisl. viverra Cras ex. vehicula, sapien ipsum sed tincidunt diam lobortis, ac diam Nullam diam orci odio hendrerit non orci libero, non quis Praesent placerat felis, in fringilla Praesent elit. ex. ex maximus lacus, diam Sed tincidunt in lorem. quam non ultrices nisi nisl. Ut nisi nulla, ipsum ex scelerisque dui. eu
        </span>
        <button className="bg-blue-600 text-white px-6 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-700 self-start md:self-start w-56 ">
          View More
        </button>
      </div>

      <div className="testimonial-section-two flex flex-col w-full lg:w-3/5 gap-6">
        {testimonialsData.map((item, index) => (
          <motion.div
            key={index}
            className={`flex items-start gap-4 p-4 transition-transform duration-300 hover:translate-x-8 lg:hover:-translate-x-12 hover:border-l-4 hover:border-purple-500 hover:shadow-md cursor-pointer ${
              item.style === 'response-neutral' ? 'border-l-4 border-gray-200' : 'border-l-4 border-purple-500 shadow-md'
            } ${activeIndex === index ? '-translate-x-2 rounded-l-sm' : ''}`}
            onClick={() => setActiveIndex(index)}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <Image
              src={item.image}
              alt={item.name}
              className="w-16 h-16 rounded-full object-cover"
              width={64}
              height={64}
            />
            <div className="response-text flex flex-col gap-3">
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-sm text-gray-700">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
