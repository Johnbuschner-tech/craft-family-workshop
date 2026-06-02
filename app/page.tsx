"use client";

import { NavHeader } from "@/components/nav-header";
import { HeroSection } from "@/components/hero-section";
import { ProblemSection } from "@/components/problem-section";
import { ProgramSection } from "@/components/program-section";
import { CurriculumSection } from "@/components/curriculum-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FacilitatorsSection } from "@/components/facilitators-section";
import { FaqSection } from "@/components/faq-section";
import { EnrollSection } from "@/components/enroll-section";
import { Footer } from "@/components/footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <NavHeader />
      <HeroSection />
      <ProblemSection />
      <ProgramSection />
      <CurriculumSection />
      <TestimonialsSection />
      <FacilitatorsSection />
      <FaqSection />
      <EnrollSection />
      <Footer />
    </div>
  );
}
