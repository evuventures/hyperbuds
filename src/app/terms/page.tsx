// app/terms-and-conditions/page.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-gray-50  text-gray-800 px-6 py-20 md:py-30 md:px-20">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto space-y-6"
      >
        <h1 className="text-4xl font-bold text-center mb-6">HyperBuds Terms of Use</h1>
        <p className="text-center text-sm text-gray-800">
          Effective Date: January 6, 2026
        </p>

        <h2 className="text-2xl font-semibold mt-8">1. Usage Requirements</h2>
        <p>You must be at least 13 years old and responsible for all activity under your account.</p>

        <h2 className="text-2xl font-semibold mt-8">2. AI Content Disclosures</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>AI outputs may be inaccurate, biased, or incomplete.</li>
          <li>Outputs do not constitute legal, medical, or financial advice.</li>
          <li>
            Synthetic Media: If you create AI likenesses for commercial use, you must label them as AI-generated per NY law.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">3. Intellectual Property</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>You retain ownership of your original inputs.</li>
          <li>
            You grant HyperBuds a limited, worldwide, royalty-free license to process content to operate and improve the
            service.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">4. Limitation of Liability</h2>
        <p>
          HyperBuds’ total liability shall not exceed $100 or the total fees paid in the six months preceding a claim.
          We are not liable for damages from AI hallucinations or reliance on generated content.
        </p>

        <h2 className="text-2xl font-semibold mt-8">5. Governing Law & Dispute Resolution</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Governing Law: State of New York.</li>
          <li>Disputes settled by binding arbitration via the American Arbitration Association (AAA).</li>
          <li>Class Action Waiver: Disputes resolved individually only.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">6. Contact</h2>
        <p>
          HyperBuds Inc.
          <br />
          📧{' '}
          <a href="mailto:hyperbuds1@gmail.com" className="text-blue-600 underline">
            hyperbuds1@gmail.com
          </a>
        </p>

        <div className="border-t border-gray-300 dark:border-gray-700 mt-10 pt-6 text-center">
          <p>
            See our{' '}
            <Link href="/privacy" className="text-blue-600 underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </motion.section>
    </main>
  );
}
