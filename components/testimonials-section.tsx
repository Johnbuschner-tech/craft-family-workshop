"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "The CRAFT Workshop enabled me to help my family member who was struggling with substance use, and also taught me the importance of taking care of myself. I am now able to provide mentorship at my church to other families experiencing similar issues.",
    name: "Maureen O.",
    role: "Child Care Professional",
    stars: 5,
  },
  {
    quote:
      "As a pastor and advocate, I am now able to empower family members in my congregation to be able to influence their loved ones who are struggling to overcome their addiction.",
    name: "James M.",
    role: "Minister & Recovery Advocate",
    stars: 5,
  },
  {
    quote:
      "After completing this workshop I understood the importance of taking better care of myself so I could interact and collaborate with my son more calmly, and help him want to change his behaviors.",
    name: "Wendy F.",
    role: "Healthcare Provider",
    stars: 5,
  },
  {
    quote:
      "This workshop taught me that my husband and I must have clear boundaries when dealing with my daughter, but we can also support her with compassion and understanding and present treatment options she can agree to.",
    name: "Dorothy M.",
    role: "Retired Teacher, K-12",
    stars: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-[#0f1e35] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-[#14b8a6] text-sm font-semibold tracking-widest uppercase">What Participants Say</span>
          <h2 className="text-4xl font-bold text-white mt-3 mb-4">
            Real Families. Real Outcomes.
          </h2>
          <div className="flex justify-center items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-[#f59e0b] text-[#f59e0b]" />
            ))}
            <span className="text-white/60 text-sm ml-2">4.7 out of 5.0 stars average rating</span>
          </div>
          <p className="text-white/55 text-lg">
            Workshop graduates consistently report improved communication, reduced anxiety, and
            greater confidence in supporting their loved ones toward recovery.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/8 rounded-2xl p-7 hover:border-white/15 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.stars)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-[#f59e0b] text-[#f59e0b]" />
                ))}
              </div>
              <p className="text-white/80 text-base leading-relaxed italic mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#14b8a6]/20 flex items-center justify-center">
                  <span className="text-[#14b8a6] font-bold text-sm">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
