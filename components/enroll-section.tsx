"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, Phone, Mail } from "lucide-react";
import { useState } from "react";

export function EnrollSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="enroll" className="bg-gradient-to-b from-[#111e30] to-[#0a1628] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: CTA copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#14b8a6] text-sm font-semibold tracking-widest uppercase">Partner With Us</span>
            <h2 className="text-4xl font-bold text-white mt-3 mb-6 leading-tight">
              Ready to Add CRAFT to Your Facility's Programming?
            </h2>
            <p className="text-white/65 text-lg leading-relaxed mb-8">
              Fill out the form and a member of our team will reach out within 1 business day
              to discuss your facility's needs, client census, and how we'll structure the program.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "No clinical staffing overhead — we handle all facilitation",
                "Fully customizable schedule — built around your calendar",
                "Live, virtual, or hybrid delivery formats",
                "Ongoing facilitator support beyond the workshop",
                "Slide decks and workbooks provided to all participants",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#14b8a6] flex-shrink-0" />
                  <span className="text-white/75 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3 border-t border-white/10 pt-8">
              <p className="text-white/40 text-sm uppercase tracking-wider font-semibold">Prefer to reach out directly?</p>
              <a
                href="mailto:John@recoverylifecollective.com"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
              >
                <Mail className="h-4 w-4 text-[#14b8a6]" />
                <span className="group-hover:underline">John@recoverylifecollective.com</span>
              </a>
              <a
                href="tel:9144008108"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
              >
                <Phone className="h-4 w-4 text-[#14b8a6]" />
                <span className="group-hover:underline">914-400-8108</span>
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {submitted ? (
              <div className="bg-[#14b8a6]/10 border border-[#14b8a6]/30 rounded-3xl p-12 text-center">
                <div className="w-16 h-16 bg-[#14b8a6]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-[#14b8a6]" />
                </div>
                <h3 className="text-white text-2xl font-bold mb-3">Request Received!</h3>
                <p className="text-white/60 leading-relaxed">
                  Thank you for your interest in partnering with Recovery Life Collective.
                  We'll be in touch within 1 business day to discuss next steps.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-5"
              >
                <h3 className="text-white font-bold text-xl mb-2">Request a Consultation</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label className="text-white/70 text-sm">First Name *</Label>
                    <Input
                      required
                      placeholder="First"
                      className="bg-white/5 border-white/15 text-white placeholder:text-white/30 focus:border-[#14b8a6]"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-white/70 text-sm">Last Name *</Label>
                    <Input
                      required
                      placeholder="Last"
                      className="bg-white/5 border-white/15 text-white placeholder:text-white/30 focus:border-[#14b8a6]"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label className="text-white/70 text-sm">Facility / Organization Name *</Label>
                  <Input
                    required
                    placeholder="e.g. Sunrise Recovery Center"
                    className="bg-white/5 border-white/15 text-white placeholder:text-white/30 focus:border-[#14b8a6]"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-white/70 text-sm">Your Role / Title *</Label>
                  <Input
                    required
                    placeholder="e.g. Clinical Director, CEO, Program Manager"
                    className="bg-white/5 border-white/15 text-white placeholder:text-white/30 focus:border-[#14b8a6]"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-white/70 text-sm">Work Email *</Label>
                  <Input
                    required
                    type="email"
                    placeholder="you@facility.com"
                    className="bg-white/5 border-white/15 text-white placeholder:text-white/30 focus:border-[#14b8a6]"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-white/70 text-sm">Phone Number</Label>
                  <Input
                    type="tel"
                    placeholder="(555) 000-0000"
                    className="bg-white/5 border-white/15 text-white placeholder:text-white/30 focus:border-[#14b8a6]"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-white/70 text-sm">Approximate number of families you'd like to enroll</Label>
                  <Input
                    placeholder="e.g. 5–15 per cohort"
                    className="bg-white/5 border-white/15 text-white placeholder:text-white/30 focus:border-[#14b8a6]"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#14b8a6] hover:bg-[#0d9488] text-white py-6 text-base rounded-xl font-semibold"
                >
                  Request a Consultation →
                </Button>
                <p className="text-white/30 text-xs text-center">
                  We'll respond within 1 business day. No commitment required.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
