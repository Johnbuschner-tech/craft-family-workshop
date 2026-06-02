"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowDown } from "lucide-react";

export function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-[#0f1e35] min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#14b8a6]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#f59e0b]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-[#14b8a6]/10 border border-[#14b8a6]/20 text-[#14b8a6] rounded-full px-4 py-1.5 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-[#14b8a6] animate-pulse" />
              Evidence-Based Family Programming · Now Available for Your Facility
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
              The Missing Piece in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14b8a6] to-[#38bdf8]">
                Your Treatment
              </span>{" "}
              Program
            </h1>

            <p className="text-xl text-white/70 leading-relaxed max-w-lg">
              Your clients' families are struggling — and without the right tools, they can
              unknowingly sabotage recovery. The <strong className="text-white">CRAFT Family Support Workshop</strong> gives
              your facility a fully facilitated, evidence-based program that transforms families
              from barriers into recovery catalysts.
            </p>

            <ul className="space-y-3">
              {[
                "70% proven effectiveness at engaging loved ones into treatment",
                "Fully facilitated — no clinical staff hours required",
                "Flexible live & virtual delivery to match your schedule",
                "Reduces client dropout by strengthening family support systems",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3 text-white/80"
                >
                  <CheckCircle className="h-5 w-5 text-[#14b8a6] mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollTo("enroll")}
                size="lg"
                className="bg-[#14b8a6] hover:bg-[#0d9488] text-white text-base px-8 py-6 rounded-xl font-semibold shadow-lg shadow-[#14b8a6]/25"
              >
                Add CRAFT to Your Programming →
              </Button>
              <button
                onClick={() => scrollTo("program")}
                className="inline-flex items-center justify-center text-base font-semibold px-8 py-4 rounded-xl border-2 border-white/40 text-white bg-transparent hover:bg-white/10 hover:border-white/60 transition-all"
              >
                Learn How It Works
              </button>
            </div>
          </motion.div>

          {/* Right: Stats card + testimonial stacked */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:flex flex-col gap-4"
          >
            {/* Stats card */}
            <div className="relative">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                <div className="text-center mb-8">
                  <div className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#14b8a6] to-[#38bdf8]">70%</div>
                  <p className="text-white/80 text-lg mt-2">Engagement Success Rate</p>
                  <p className="text-white/40 text-sm">CRAFT vs. 5–30% for traditional approaches</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "12", label: "Weekly Lessons", sub: "Rotating curriculum" },
                    { value: "16+", label: "Training Hours", sub: "Live expert facilitation" },
                    { value: "4.7★", label: "Avg. Rating", sub: "From workshop participants" },
                    { value: "100%", label: "Done-For-You", sub: "No extra staff needed" },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/5 rounded-2xl p-4 text-center border border-white/5">
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-sm text-[#14b8a6] font-medium mt-0.5">{stat.label}</div>
                      <div className="text-xs text-white/40 mt-1">{stat.sub}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge — top-right corner of card only */}
              <div className="absolute -top-4 -right-4 bg-[#f59e0b] text-black font-bold text-sm px-4 py-2 rounded-full shadow-lg">
                📋 NJ Certified Facilitators
              </div>
            </div>

            {/* Testimonial snippet — sits cleanly below the stats card */}
            <div className="bg-white rounded-2xl p-5 shadow-xl">
              <p className="text-gray-700 text-sm leading-relaxed italic">
                "As a pastor and advocate, I am now able to empower family members in my congregation to influence their loved ones who are struggling to overcome their addiction."
              </p>
              <p className="text-gray-500 text-xs mt-3 font-medium">— James M., Minister & Recovery Advocate</p>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => scrollTo("problem")}
            className="text-white/30 hover:text-white/60 transition-colors flex flex-col items-center gap-2"
          >
            <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
