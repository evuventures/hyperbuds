"use client";
import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = {
  'General Report': [
    { question: 'What is HyperBuds and how does it work?', answer: 'HyperBuds is an AI-powered collaboration platform that helps teams brainstorm, organize, and create together in real time.' },
    { question: 'Who can use HyperBuds?', answer: 'Anyone from students to enterprise teams can use HyperBuds.' },
    { question: 'What services does HyperBuds provide?', answer: 'Real-time collaboration tools, task management, and team insights.' },
    { question: 'Can I integrate HyperBuds with other tools?', answer: 'Yes, integrations with Slack, Google Drive, and more are supported.' },
    { question: 'How can I contact support?', answer: 'Via live chat, support@hyperbuds.com, or the help center.' },
    { question: 'What is your average response time?', answer: 'Most queries are answered within 24 hours.' },
    { question: 'How is my data protected?', answer: 'We use encryption, secure servers, and comply with GDPR.' },
    { question: 'Can I delete my account and data?', answer: 'Yes, you can request data deletion from your account settings.' },
  ],
  'Our Service': [
    { question: 'What services does HyperBuds provide?', answer: 'Real-time collaboration tools, task management, and team insights.' },
    { question: 'Can I integrate HyperBuds with other tools?', answer: 'Yes, integrations with Slack, Google Drive, and more are supported.' },
  ],
  Support: [
    { question: 'How can I contact support?', answer: 'Via live chat, support@hyperbuds.com, or the help center.' },
    { question: 'What is your average response time?', answer: 'Most queries are answered within 24 hours.' },
  ],
  'Privacy/Policy': [
    { question: 'How is my data protected?', answer: 'We use encryption, secure servers, and comply with GDPR.' },
    { question: 'Can I delete my account and data?', answer: 'Yes, you can request data deletion from your account settings.' },
  ],
};


const Faq = () => {
  const [selectedMenu, setSelectedMenu] = useState('General Report');
  const [openIndex, setOpenIndex] = useState(null);
  const questionRefs = useRef([]);

  const scrollToTop = () => {
    questionRefs.current[0]?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
    setOpenIndex(null); // Close all opened questions
    setTimeout(() => scrollToTop(), 100);
  };

  const currentFaqs = faqs[selectedMenu];

  return (
    <section className="px-6 sm:px-10 md:px-20 lg:px-32 py-16 bg-gray-50">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-bold mb-12 text-left"
      >
        Frequently Asked Questions
      </motion.h1>

      {/* Mobile Dropdown */}
      <div className="block lg:hidden mb-8">
        <select
          onChange={(e) => handleMenuClick(e.target.value)}
          value={selectedMenu}
          className="w-full px-3 py-4 border rounded-lg text-gray-700"
        >
          {Object.keys(faqs).map((menu, idx) => (
            <option key={idx} value={menu}>
              {menu}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar */}
        <div className="hidden lg:flex flex-col gap-4 w-1/4">
          {Object.keys(faqs).map((menu, idx) => (
            <button
              key={idx}
              onClick={() => handleMenuClick(menu)}
              className={`text-left px-4 py-2 rounded-md font-medium transition-colors ${
                selectedMenu === menu
                  ? 'bg-purple-500 text-white'
                  : 'text-gray-700 hover:bg-blue-100'
              }`}
            >
              {menu}
            </button>
          ))}
        </div>

        {/* FAQ Content */}
        <div className="flex-1 flex flex-col gap-4">
          {currentFaqs.map((faq, i) => (
            <motion.div
              key={i}
              ref={(el) => (questionRefs.current[i] = el)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              viewport={{ once: false, amount: 0.2 }}
              className="bg-white border p-4 rounded-lg shadow-sm"
            >
              <div
                className="cursor-pointer font-semibold text-lg text-gray-800 flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {faq.question}
                <span>{openIndex === i ? '-' : '+'}</span>
              </div>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.p
                    key="answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 text-gray-600 text-sm overflow-hidden"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
