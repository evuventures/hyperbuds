export const CAREERS_EMAIL = "info@hyperbuds.com";

/**
 * Gmail compose URL - opens Gmail in browser without external app prompt.
 * Falls back to mailto for non-Gmail users if needed.
 */
export function getGmailComposeUrl(to: string, subject: string, body?: string): string {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to,
    su: subject,
  });
  if (body) params.set("body", body);
  return `https://mail.google.com/mail/?${params.toString()}`;
}

export interface Job {
  slug: string;
  title: string;
  type: string;
  location: string;
  postedDate?: string;
  role?: string;
  responsibilities?: string[];
  requirements?: string[];
  whatYouGain?: string[];
  qualifications?: string[];
  duration?: string;
  commitment?: string;
  category: "design" | "development" | "business";
}

export const jobs: Job[] = [
  {
    slug: "ui-ux-designer",
    title: "UI/UX Designer",
    type: "Full Time",
    location: "Remote",
    postedDate: "Oct 2025",
    category: "design",
    role:
      "We are looking for a UI/UX Designer to help shape our platform and create a modern, creator-focused experience that empowers collaboration.",
    responsibilities: [
      "Audit the current product and suggest design improvements",
      "Create wireframes, prototypes, and final mockups",
      "Focus on usability, flow, and responsive design",
      "Collaborate with developers for smooth implementation",
      "Deliver designs that strengthen the HyperBuds brand presence",
    ],
    requirements: [
      "Portfolio required (academic, freelance, or personal projects acceptable)",
      "Strong interest in UI/UX design",
      "Proficiency in Figma (or similar tools)",
      "Understanding of usability principles and responsive design",
      "Prior product or website design experience preferred",
    ],
    whatYouGain: [
      "Hands-on experience with an AI-powered collaboration platform",
      "Your designs showcased on a live product",
      "Direct mentorship from founders",
      "Remote and flexible environment",
      "Exposure to cutting-edge AI and creator tools",
    ],
    duration: "Ongoing",
  },
  {
    slug: "graphic-designer",
    title: "Graphic Designer",
    type: "Full Time",
    location: "Remote",
    postedDate: "Oct 2025",
    category: "design",
    role:
      "We are looking for a Graphic Designer to create visual content that resonates with creators, influencers, and businesses using our AI-powered platform.",
    responsibilities: [
      "Design marketing materials, social media assets, and brand visuals",
      "Create engaging graphics for campaigns and product launches",
      "Maintain and evolve the HyperBuds visual identity",
      "Collaborate with marketing and product teams",
    ],
    requirements: [
      "Strong portfolio showcasing design work",
      "Proficiency in Adobe Creative Suite or similar tools",
      "Understanding of brand guidelines and visual hierarchy",
      "Experience with social media and digital marketing assets",
    ],
    whatYouGain: [
      "Work on a fast-growing AI collaboration platform",
      "Creative freedom within brand guidelines",
      "Remote and flexible environment",
      "Exposure to the creator economy and tech startups",
    ],
    duration: "Ongoing",
  },
  {
    slug: "full-stack-developer",
    title: "Full Stack Developer",
    type: "Full Time",
    location: "Remote",
    postedDate: "Oct 2025",
    category: "development",
    role:
      "We are seeking a Full Stack Developer to help build and scale our AI-powered collaboration platform. Experience with no-code and low-code tools is a plus.",
    responsibilities: [
      "Design, build, and maintain web applications",
      "Develop APIs and integrate with AI services",
      "Collaborate with designers and product team",
      "Ensure code quality, performance, and security",
      "Participate in agile development and code reviews",
    ],
    requirements: [
      "Experience with modern JavaScript/TypeScript frameworks (React, Next.js)",
      "Backend experience (Node.js, or similar)",
      "Familiarity with databases (SQL, NoSQL)",
      "Understanding of REST APIs and authentication",
      "Interest in no-code/low-code tools is beneficial",
    ],
    whatYouGain: [
      "Work on cutting-edge AI and collaboration features",
      "Direct impact on product direction",
      "Remote and flexible environment",
      "Growth in a fast-paced startup",
    ],
    duration: "Ongoing",
  },
  {
    slug: "devops-internship",
    title: "DevOps Internship",
    type: "Internship",
    location: "Remote",
    postedDate: "Oct 2025",
    category: "development",
    role:
      "We're seeking a motivated DevOps Intern to support our platform launch. This is an unpaid role initially, with paid opportunities once funding is secured.",
    responsibilities: [
      "Set up and maintain CI/CD pipelines",
      "Configure and manage cloud infrastructure (AWS, GCP, or Azure)",
      "Implement monitoring and logging solutions",
      "Assist with Docker and Kubernetes deployment",
      "Support database management and backups",
      "Help establish infrastructure as code (Terraform, CloudFormation)",
      "Apply security best practices and document processes",
    ],
    requirements: [
      "Pursuing degree in CS, Engineering, or related field",
      "Basic knowledge of Linux/Unix, Git, networking, and scripting (Python, Bash)",
      "Eagerness to learn in a startup environment",
      "Strong teamwork and problem-solving skills",
    ],
    whatYouGain: [
      "Hands-on experience with modern DevOps tools",
      "Mentorship from engineers",
      "Real-world agile environment exposure",
      "Flexible, remote schedule",
      "Potential for full-time employment after funding",
    ],
    commitment: "15–20 hours/week, 3–6 months",
    duration: "Unpaid (paid transition possible)",
  },
  {
    slug: "marketing",
    title: "Marketing",
    type: "Full Time / Internship",
    location: "Remote",
    postedDate: "Aug 2025",
    category: "business",
    role:
      "We are searching for a Marketing team member to help grow HyperBuds. If you are looking for an opportunity to flex your marketing chops and get hands-on experience, this is for you. If your efforts lead to project funding you may be in line for a paid role as well as possible equity.",
    qualifications: [
      "Strong analytical skills for problem-solving and project analysis",
      "Effective communication skills for team collaboration",
      "Familiarity with software development and no-code concepts",
      "Interest or experience in sales and customer interaction is beneficial",
      "Ability to work independently and take initiative",
      "Pursuing or recently completed a degree in Marketing, Business, or related field",
    ],
    whatYouGain: [
      "Epic opportunity in a pre-seed startup",
      "Potential for paid role and equity",
      "Direct exposure to growth strategies",
      "Remote and flexible environment",
    ],
    duration: "Internship initially; paid role upon formal onboarding",
  },
  {
    slug: "fund-raising",
    title: "Fund Raising",
    type: "Contract",
    location: "Remote",
    postedDate: "Aug 2025",
    category: "business",
    role:
      "This is a contract basis (remote) role for a Fundraiser at HyperBuds, an AI-powered collaboration platform. The Fundraiser will be responsible for developing and implementing fundraising strategies, seeking out potential investors and donors, and maintaining relationships to meet performance-based pay targets.",
    responsibilities: [
      "Develop and implement fundraising strategies",
      "Seek out potential investors and donors",
      "Organize fundraising activities and outreach",
      "Maintain investor and donor relationships",
      "Meet performance-based pay targets",
    ],
    whatYouGain: [
      "Performance-based compensation",
      "Direct impact on company growth",
      "Exposure to the startup and investor ecosystem",
      "Remote and flexible schedule",
    ],
    duration: "Pay based on achieved results only; no hourly compensation",
  },
  {
    slug: "social-media-manager",
    title: "Social Media Manager",
    type: "Full Time",
    location: "Remote",
    postedDate: "Oct 2025",
    category: "business",
    role:
      "We are looking for a Social Media Manager to build and grow our presence across platforms, engaging with creators, influencers, and businesses in the HyperBuds community.",
    responsibilities: [
      "Develop and execute social media strategy",
      "Create and schedule content across platforms (Instagram, LinkedIn, TikTok, etc.)",
      "Engage with the community and respond to feedback",
      "Track metrics and report on performance",
      "Collaborate with marketing and design teams",
    ],
    requirements: [
      "Experience managing social media for a brand or product",
      "Strong written and visual communication skills",
      "Understanding of analytics and social media tools",
      "Creative and proactive mindset",
    ],
    whatYouGain: [
      "Ownership of social media strategy",
      "Work with a vibrant creator community",
      "Remote and flexible environment",
      "Growth in a fast-paced startup",
    ],
    duration: "Ongoing",
  },
  {
    slug: "grantwriter",
    title: "Grantwriter",
    type: "Contract",
    location: "Remote",
    postedDate: "Jul 2025",
    category: "business",
    role:
      "Looking for a grant and RFP application writer. We pay on a rolling basis based on the amount you successfully bring in. We are hoping to find someone confident in their expertise who is open to this payment structure.",
    responsibilities: [
      "Research and identify grant opportunities",
      "Write and submit grant and RFP applications",
      "Take financial lead on some of our ventures",
    ],
    requirements: [
      "Familiarity with the startup ecosystem and fundraising process",
      "Proven grant writing experience",
      "Confidence in expertise and open to performance-based payment",
    ],
    whatYouGain: [
      "Performance-based pay on successful grants",
      "Exposure to patented SAAS ventures",
      "Remote and flexible schedule",
    ],
    duration: "Performance-based, rolling",
  },
];

export function getJobBySlug(slug: string): Job | undefined {
  return jobs.find((j) => j.slug === slug);
}

export function getAllSlugs(): string[] {
  return jobs.map((j) => j.slug);
}
