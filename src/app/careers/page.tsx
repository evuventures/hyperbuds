"use client";

import React from "react";
import { CareersHero } from "@/components/careers/CareersHero";
import { CareersImageGrid } from "@/components/careers/CareersImageGrid";
import { WhyJoinUs } from "@/components/careers/WhyJoinUs";
import { OpenPositions } from "@/components/careers/OpenPositions";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <CareersHero />
      <CareersImageGrid />
      <WhyJoinUs />
      <OpenPositions />
    </div>
  );
}
