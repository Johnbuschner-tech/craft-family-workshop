"use client";

import { motion } from "framer-motion";
import { CheckCircle, Globe, Users, Calendar, BookOpen, Headphones, Download } from "lucide-react";

const deliverables = [
  { icon: Headphones, text: "16+ hours of live expert facilitation per cohort" },
  { icon: BookOpen, text: "Downloadable resources & practicum workbooks for each lesson" },
  { icon: Users, text: "1-on-1 support from a CRAFT specialist available to families" },
  { icon: Globe, text: "Live in-person or online delivery — your choice" },
  { icon: Calendar, text: "Flexible scheduling customized to your facility's calendar" },
  { icon: Download, text: "Presentation slides provided for client family reference" },
];

const outcomes = [
  {
    value: "70%",
    label: "Treatment Engagement Rate",
    detail: "CRAFT-trained families successfully guide their loved one to choose treatment",
  },
  {
    value: "↓ Anxiety",
    label: "Reduced Family Distress",
    detail: "Participants report significant reductions in anxiety and depression — regardless of their loved one's choices",
  },
  {
    value: "12",
    label: "Rotating Weekly Topics",
    detail: "Clients' families can join at any session point — continuous enrollment model",
  },
];

export function ProgramSection() {
  return (
    <section id="program" className="bg-[#0f1e35] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: What it is */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#14b8a6] text-sm font-semibold tracking-widest uppercase">The Solution</span>
            <h2 className="text-4xl font-bold text-white mt-3 mb-6 leading-tight">
              A Turnkey Family Support Program —<br />
              <span className="text-[#14b8a6]">Powered by the CRAFT Method</span>
            </h2>
            <p className="text-white/65 text-lg leading-relaxed mb-6">
              The <strong className="text-white">Community Reinforcement and Family Training (CRAFT)</strong> approach
              is among the most empirically validated family intervention strategies in existence — yet vastly underutilized.
              Backed by decades of peer-reviewed research by Dr. Robert Meyers (University of New Mexico), it outperforms
              traditional Al-Anon and intervention approaches by 3–5x.
            </p>
            <p className="text-white/65 text-lg leading-relaxed mb-8">
              We bring this curriculum directly to your clients' family members through weekly live workshops —
              fully facilitated by NJ-certified CRAFT specialists. Your facility adds a powerful clinical differentiator
              with zero additional staffing overhead.
            </p>

            <div className="space-y-3">
              {deliverables.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 text-white/75"
                >
                  <div className="w-8 h-8 bg-[#14b8a6]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-4 w-4 text-[#14b8a6]" />
                  </div>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Outcomes + How it works */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Outcomes */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-7 space-y-5">
              <h3 className="text-white font-bold text-lg">Measurable Outcomes for Your Facility</h3>
              {outcomes.map((o, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="text-2xl font-black text-[#14b8a6] min-w-16">{o.value}</div>
                  <div>
                    <p className="text-white font-semibold text-sm">{o.label}</p>
                    <p className="text-white/50 text-sm mt-0.5 leading-relaxed">{o.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* How it works for your facility */}
            <div className="bg-gradient-to-br from-[#14b8a6]/10 to-[#38bdf8]/5 border border-[#14b8a6]/20 rounded-3xl p-7">
              <h3 className="text-white font-bold text-lg mb-4">How It Works for Your Facility</h3>
              <ol className="space-y-4">
                {[
                  { step: "01", text: "We customize a weekly session schedule around your facility's calendar and client census." },
                  { step: "02", text: "Your clinical team refers families directly to the workshop — we handle enrollment and facilitation." },
                  { step: "03", text: "Families attend live (in-person or virtual) weekly sessions taught by certified CRAFT specialists." },
                  { step: "04", text: "Families leave equipped to engage, set boundaries, and invite their loved ones to sustained recovery." },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-[#14b8a6] font-black text-lg leading-none pt-0.5 min-w-6">{item.step}</span>
                    <p className="text-white/70 text-sm leading-relaxed">{item.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
