import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getJobBySlug,
  getAllSlugs,
  CAREERS_EMAIL,
  getGmailComposeUrl,
} from "@/lib/careers/jobs";
import type { Metadata } from "next";

interface JobDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: JobDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) return { title: "Job Not Found" };
  const defaultDesc = `Join HyperBuds as a ${job.title}. ${job.type}, ${job.location}.`;
  return {
    title: `${job.title} | Careers | HyperBuds`,
    description: job.role ?? defaultDesc,
  };
}

export default async function JobDetailPage({ params }: JobDetailPageProps) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) notFound();

  const applySubject = `Application: ${job.title}`;
  const composeUrl = getGmailComposeUrl(CAREERS_EMAIL, applySubject);

  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto max-w-4xl px-6 pt-32 pb-20">
        <Link
          href="/careers"
          className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 font-medium mb-8 transition-colors"
          aria-label="Back to Careers"
        >
          <span aria-hidden>←</span> Careers
        </Link>

        <article className="bg-black rounded-2xl border border-gray-800 shadow-sm overflow-hidden">
          <div className="p-8 md:p-12">
            <h1 className="text-3xl font-bold text-white md:text-4xl mb-4">
              {job.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-gray-400 mb-8">
              <span>Type: {job.type}</span>
              <span>Location: {job.location}</span>
              {job.duration && (
                <span>Duration: {job.duration}</span>
              )}
              {job.commitment && (
                <span>Commitment: {job.commitment}</span>
              )}
            </div>

            {job.role && (
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-white mb-3">
                  Role
                </h2>
                <p className="text-gray-300 leading-relaxed">{job.role}</p>
              </section>
            )}

            {job.responsibilities && job.responsibilities.length > 0 && (
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-white mb-3">
                  Responsibilities
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {job.responsibilities.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </section>
            )}

            {job.requirements && job.requirements.length > 0 && (
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-white mb-3">
                  Requirements
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {job.requirements.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </section>
            )}

            {job.qualifications && job.qualifications.length > 0 && (
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-white mb-3">
                  Qualifications
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {job.qualifications.map((q) => (
                    <li key={q}>{q}</li>
                  ))}
                </ul>
              </section>
            )}

            {job.whatYouGain && job.whatYouGain.length > 0 && (
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-white mb-3">
                  What You&apos;ll Gain
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {job.whatYouGain.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                </ul>
              </section>
            )}

            <section className="mt-10 pt-8 border-t border-gray-800">
              <p className="text-gray-300 mb-4">
                To apply, send your CV and cover letter to:{" "}
                <a
                  href={composeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-purple-400 hover:text-purple-300 underline"
                >
                  {CAREERS_EMAIL}
                </a>
              </p>
              <a
                href={composeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-700 transition-colors"
              >
                Apply Now
              </a>
            </section>
          </div>
        </article>

        {/* Safety disclaimer – commented out for now
        <p className="mt-6 text-sm text-gray-500 text-center">
          To ensure your safety, only apply for positions listed on our official
          careers page. Be wary of interview requests via Teams or text, as these
          may be scams. HyperBuds will only contact you from{" "}
          <span className="font-medium text-gray-400">@{CAREERS_EMAIL.split("@")[1]}</span>{" "}
          email addresses.
        </p>
        */}
      </div>
    </div>
  );
}
