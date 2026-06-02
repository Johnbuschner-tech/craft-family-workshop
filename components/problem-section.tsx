"use client";

import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, Users, XCircle } from "lucide-react";

const problems = [
  {
    icon: XCircle,
    title: "Families Unknowingly Enable",
    description:
      "Without structured guidance, family members default to enabling behaviors — removing consequences, covering up, and emotionally rescuing — that delay treatment and extend active addiction.",
    color: "text-red-400",
    bg: "bg-red-400/10",
  },
  {
    icon: TrendingDown,
    title: "Higher Dropout & Relapse Risk",
    description:
      "Clients whose family members lack communication and boundary-setting skills are significantly more likely to leave treatment AMA or relapse within 90 days of discharge.",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
  },
  {
    icon: AlertTriangle,
    title: "Family Burnout Undermines Recovery",
    description:
      "Anxiety, depression, and resentment in family members creates a toxic home environment that your clients return to after treatment — erasing clinical progress.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
  {
    icon: Users,
    title: "Missed Admissions Opportunity",
    description:
      "Families calling your admissions line are your highest-value referral source. Without a structured family program, you have no engagement pathway for concerned family members who aren't ready to force the conversation.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="bg-[#111e30] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[#14b8a6] text-sm font-semibold tracking-widest uppercase">The Gap in Care</span>
          <h2 className="text-4xl font-bold text-white mt-3 leading-tight">
            Your Clients' Families Are Struggling —<br />
            <span className="text-white/60">And Most Facilities Offer Them Nothing</span>
          </h2>
          <p className="text-white/60 text-lg mt-4 leading-relaxed">
            Research consistently shows that family involvement is one of the strongest predictors
            of treatment success — yet most treatment centers leave families without structured,
            evidence-based support.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white/4 border border-white/8 rounded-2xl p-6 hover:border-white/15 transition-colors"
            >
              <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-4`}>
                <item.icon className={`h-6 w-6 ${item.color}`} />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bridge statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-[#14b8a6]/10 to-[#38bdf8]/10 border border-[#14b8a6]/20 rounded-3xl p-8 text-center"
        >
          <p className="text-white text-xl font-medium leading-relaxed">
            The CRAFT Family Support Workshop closes this gap — and your facility delivers it
            without adding a single hour of clinical staff time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
