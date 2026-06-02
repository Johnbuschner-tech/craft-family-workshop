"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const modules = [
  {
    category: "Module 1 — Engagement & Communication",
    color: "bg-[#14b8a6]",
    lessons: [
      {
        title: "Foundations of Good Communication",
        desc: "Master the critical steps to improve communication so interactions become balanced, productive, and free of conflict.",
      },
      {
        title: "The Benefits of Active Listening",
        desc: "Learn to listen for behavioral cues that surface windows of opportunity to introduce healthier alternatives.",
      },
      {
        title: "Functional Analysis of Substance Use",
        desc: "Understand the patterns and motivations behind why a loved one uses — and doesn't use — substances.",
      },
      {
        title: "Windows of Opportunity",
        desc: "Master the timing of conversations and the importance of strategic disengagement when emotions are elevated.",
      },
    ],
  },
  {
    category: "Module 2 — Behavioral Influence Strategies",
    color: "bg-[#38bdf8]",
    lessons: [
      {
        title: "Allowing Natural Consequences",
        desc: "Understand why removing consequences delays treatment — and how to step back with compassion, not punishment.",
      },
      {
        title: "Functional Analysis of Positive Behaviors",
        desc: "Identify the meaningful behaviors and values that will inspire a loved one toward healthier decisions.",
      },
      {
        title: "Positive Reinforcement",
        desc: "Develop a reward strategy that replaces substance-using behaviors without enabling or co-dependency.",
      },
      {
        title: "The Invitation to Treatment",
        desc: "Prepare the family for a collaborative, personalized invitation to treatment — significantly reducing rejection.",
      },
    ],
  },
  {
    category: "Module 3 — Family Wellness & Self-Care",
    color: "bg-[#a78bfa]",
    lessons: [
      {
        title: "The Importance of Self-Care",
        desc: "Prioritize family members' own mental and physical health — the foundation for effective influence.",
      },
      {
        title: "The 8 Dimensions of Wellness",
        desc: "Identify and address the wellness domains most depleted by the experience of loving someone in active addiction.",
      },
      {
        title: "Establishing Healthy Boundaries",
        desc: "Set and enforce clear, compassionate boundaries that protect the family while keeping lines of connection open.",
      },
      {
        title: "Coping Skills & Mental Health Toolkit",
        desc: "Build a personal coping plan — tools for managing anxiety, depression, frustration and emotional reactivity.",
      },
    ],
  },
];

export function CurriculumSection() {
  const [activeModule, setActiveModule] = useState(0);

  return (
    <section id="curriculum" className="bg-[#111e30] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-[#14b8a6] text-sm font-semibold tracking-widest uppercase">The Curriculum</span>
          <h2 className="text-4xl font-bold text-white mt-3 mb-4">
            12 Lessons. 3 Core Modules.
          </h2>
          <p className="text-white/60 text-lg">
            A comprehensive rotating curriculum that equips concerned significant others with the exact
            skills needed to influence their loved one toward treatment — and protect their own mental health in the process.
          </p>
        </motion.div>

        {/* Module tabs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8" role="tablist">
          {modules.map((mod, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={activeModule === i}
              data-module={i}
              onClick={() => setActiveModule(i)}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-all border ${
                activeModule === i
                  ? "bg-[#14b8a6] border-[#14b8a6] text-white"
                  : "border-white/15 text-white/60 hover:border-white/30 hover:text-white/80"
              }`}
            >
              {mod.category.split(" — ")[0]}
            </button>
          ))}
        </div>

        {/* Active module lessons — no opacity animation so content is always immediately visible */}
        <div
          key={activeModule}
          role="tabpanel"
          data-active-module={activeModule}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className={`h-1 w-12 rounded-full ${modules[activeModule].color}`} />
            <h3 className="text-white font-semibold text-lg">{modules[activeModule].category}</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {modules[activeModule].lessons.map((lesson, i) => (
              <motion.div
                key={`${activeModule}-${i}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.25 }}
                className="bg-white/4 border border-white/8 rounded-2xl p-5 hover:border-white/15 transition-colors group"
              >
                <div className="flex items-start gap-3">
                  <div className={`w-6 h-6 rounded-full ${modules[activeModule].color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                    <span className="text-white text-xs font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm group-hover:text-[#14b8a6] transition-colors">
                      {lesson.title}
                    </h4>
                    <p className="text-white/50 text-sm mt-1.5 leading-relaxed">{lesson.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <p className="text-white/40 text-sm">
            Rotating weekly format — families can enroll and begin at any session. No sequential prerequisite required.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
