"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Does my facility need dedicated clinical staff to run this program?",
    a: "No. The workshop is fully facilitated by our certified CRAFT specialists. Your clinical team simply refers clients' family members to the program — we handle scheduling, facilitation, and follow-up support. No additional staff hours required.",
  },
  {
    q: "How does scheduling work for our facility?",
    a: "We customize the weekly session schedule to fit your facility's calendar and client census. Sessions can be held in-person at your facility or virtually via secure video platform. We're flexible — morning, evening, or weekend formats available.",
  },
  {
    q: "Can multiple family members of the same client attend together?",
    a: "Yes, and it's encouraged. CRAFT is most effective when the full family support system — spouses, parents, siblings — is aligned in how they communicate and engage with the individual in treatment. Co-attending families create a unified, consistent support structure.",
  },
  {
    q: "What if a client's family member misses a session?",
    a: "The rotating curriculum format means families can join at any session point without needing to start over. Missed content is provided to participants individually, and our specialists are available for one-on-one catch-up conversations.",
  },
  {
    q: "How does this differentiate our facility's programming?",
    a: "Most treatment centers lack a structured, evidence-based family support offering. CRAFT positions your facility as one that actively engages the entire support system — not just the identified patient. This is increasingly important to prospective clients and referral sources evaluating program quality.",
  },
  {
    q: "Do families need any prior knowledge to participate?",
    a: "None required. The curriculum is designed for concerned family members with no clinical background. Our facilitators guide participants through everything from foundational communication skills to functional analysis of substance use behavior.",
  },
  {
    q: "What happens if a client's loved one refuses treatment after the workshop?",
    a: "CRAFT is an ongoing strategy — not a one-time intervention. The method continues to work as families apply what they've learned over time. Research shows that consistent positive reinforcement and boundary-setting significantly increases the probability of treatment acceptance, even after initial refusals. Additionally, family members' own mental health and coping capacity improves regardless of their loved one's choices.",
  },
  {
    q: "Is follow-up support available after the workshop ends?",
    a: "Yes. We make our CRAFT specialists available on an ongoing basis to answer questions, debrief specific scenarios, and provide coaching for families navigating complex situations after the workshop is complete.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#0f1e35] py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-[#14b8a6] text-sm font-semibold tracking-widest uppercase">Questions & Answers</span>
          <h2 className="text-4xl font-bold text-white mt-3 mb-4">
            Everything You Need to Know
          </h2>
          <p className="text-white/55 text-lg">
            Have more questions? Email us at{" "}
            <a href="mailto:John@recoverylifecollective.com" className="text-[#14b8a6] hover:underline">
              John@recoverylifecollective.com
            </a>
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white/4 border border-white/8 rounded-2xl overflow-hidden hover:border-white/15 transition-colors"
            >
              <button
                className="w-full flex items-center justify-between gap-4 p-6 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-white font-medium text-sm sm:text-base">{faq.q}</span>
                <ChevronDown
                  className={`h-4 w-4 text-[#14b8a6] flex-shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="text-white/60 text-sm leading-relaxed px-6 pb-6">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
