// app/privacy-policy/page.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50  text-gray-800  px-6 py-30 md:px-20">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto space-y-6"
      >
        <h1 className="text-4xl font-bold text-center mb-6">HyperBuds Privacy Policy</h1>
        <p className="text-center text-sm text-gray-800">
          Effective Date: January 6, 2026
        </p>

        <h2 className="text-2xl font-semibold mt-8">1. Information We Collect</h2>
        <p>
          In compliance with the New York SHIELD Act, we maintain administrative and technical safeguards to protect your data.
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Account Information: Name, email address, and login credentials.</li>
          <li>User Content: Text, images, or files you upload.</li>
          <li>AI Training Data: Prompts and outputs used to improve model performance (de-identified).</li>
          <li>Technical Data: IP address, device ID, cookies for security and performance.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">2. How We Use Information</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Operate and secure the HyperBuds platform.</li>
          <li>Provide AI-generated content and personalized experiences.</li>
          <li>Perform risk assessments per NY business standards.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">3. Data Sharing</h2>
        <p>We do not sell your personal data. Data may be shared only with:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Service Providers: Cloud hosts and AI API providers (e.g., OpenAI, Google Cloud).</li>
          <li>Legal Compliance: When required by subpoena or lawful process.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">4. Your Rights</h2>
        <p>
          You may request access, correction, or deletion of your personal data by emailing{' '}
          <a href="mailto:hyperbuds1@gmail.com" className="text-blue-600 underline">
            hyperbuds1@gmail.com
          </a>. We will respond to all verifiable requests within 45 days.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Notice of Automated Processing</h2>
        <p>
          HyperBuds uses artificial intelligence and automated algorithms to generate content and personalize your experience.
          AI-generated outputs may be inaccurate. You can manage your data preferences in Account Settings.
        </p>

        <div className="border-t border-gray-300 dark:border-gray-700 mt-10 pt-6 text-center">
          <p>
            See our{' '}
            <Link href="/terms" className="text-blue-600 underline">
              Terms of Use
            </Link>
          </p>
        </div>
      </motion.section>
    </main>
  );
}
