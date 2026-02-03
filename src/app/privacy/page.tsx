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
        <h1 className="text-4xl font-bold text-center mb-2">HyperBuds Privacy Policy</h1>
        <p className="text-center text-sm text-gray-600 mb-2">
          (Georgia & Florida Compliant Version)
        </p>
        <p className="text-center text-sm text-gray-800">
          Effective Date: January 6, 2026
        </p>
        <p>
          Hyperbuds values your privacy. This Privacy Policy explains how we collect, use, share, and protect information when you use our platform.
        </p>

        <h2 className="text-2xl font-semibold mt-8">1. Information We Collect</h2>
        <p>
          We maintain reasonable administrative, technical, and physical safeguards to protect your information in accordance with applicable U.S. privacy and data protection laws, including those of Georgia and Florida.
        </p>
        <p>We collect the following categories of information:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Account Information:</strong> Name, email address, and login credentials.</li>
          <li><strong>User Content:</strong> Text, images, files, or other content you upload or generate.</li>
          <li><strong>AI Processing Data:</strong> Prompts and AI-generated outputs. We may use de-identified and aggregated data to improve system performance and functionality.</li>
          <li><strong>Technical Data:</strong> IP address, device identifiers, cookies, and usage data for security, analytics, and performance optimization.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">2. How We Use Information</h2>
        <p>We use collected information to:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Operate, maintain, and secure the HyperBuds platform</li>
          <li>Provide AI-generated content and personalized features</li>
          <li>Improve platform functionality and reliability</li>
          <li>Detect fraud, abuse, or security incidents</li>
          <li>Comply with applicable legal and regulatory obligations</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">3. Data Sharing</h2>
        <p>We do not sell personal information.</p>
        <p>We may share data only with:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Service Providers:</strong> Cloud hosting, analytics, and AI infrastructure providers operating under confidentiality and data protection obligations</li>
          <li><strong>Legal & Compliance Authorities:</strong> When required by applicable law, regulation, or valid legal process</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">4. Your Privacy Rights</h2>
        <p>Depending on your location, you may request to:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Access your personal data</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your account or data</li>
        </ul>
        <p>
          Requests can be submitted to{' '}
          <a href="mailto:support@hyperbuds.com" className="text-blue-600 underline">
            support@hyperbuds.com
          </a>.
          We will respond within a reasonable timeframe consistent with applicable U.S. law.
        </p>

        <div className="border-2 border-gray-300 dark:border-gray-600 rounded-lg p-5 mt-8 bg-gray-200/90 dark:bg-gray-800/80 shadow-sm">
          <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Simplified Privacy Notice (GA / FL)</h2>
          <p className="text-gray-900 dark:text-gray-200 text-sm leading-relaxed">
            <strong>Notice of Automated Processing:</strong> HyperBuds uses artificial intelligence to generate content and personalize your experience. We collect account information, uploaded content, and AI prompts to operate and improve our services. We do not sell your data and share it only with trusted service providers or when required by law. AI-generated content may be inaccurate, and you are responsible for how you use it. Full{' '}
            <Link href="/privacy" className="text-blue-600 underline">Privacy Policy</Link>
            {' '}and{' '}
            <Link href="/terms" className="text-blue-600 underline">Terms of Use</Link>
            {' '}are available here.
          </p>
        </div>

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
