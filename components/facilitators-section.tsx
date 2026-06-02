"use client";

import { motion } from "framer-motion";
import { Shield, Award, Users } from "lucide-react";

const facilitators = [
  {
    name: "John Buschner",
    title: "Lead Facilitator",
    credentials: [
      "Certified Peer Recovery Specialist — State of NJ",
      "MA in Criminology — Rutgers University",
      "CRAFT Trained by Dr. Robert Meyers, PhD (creator of CRAFT) — 2020",
      "Certified Total Family Interventionist",
      "10+ years personal long-term sobriety",
    ],
    bio: "John is a Peer Recovery Coach and certified substance use and mental health peer support specialist in the State of NJ. He completed CRAFT training with Robert Meyers, PhD — the creator of the CRAFT method — in 2020, and has been teaching families this empowering curriculum for several years. As a person in long-term recovery, John brings a unique combination of clinical knowledge and lived experience to every session.",
    initial: "JB",
    color: "from-[#14b8a6] to-[#38bdf8]",
  },
  {
    name: "Vance Mulholland",
    title: "Co-Facilitator",
    credentials: [
      "Certified Peer Recovery Specialist — NJ",
      "8+ years in addiction treatment, recovery & prevention",
      "CRAFT Trained by Dr. Robert Meyers, PhD (creator of CRAFT) — 2020",
      "Member, Sussex County Mental Health Board",
      "LACADA (Local Advisory Council for Alcohol & Drug Abuse) since 2015",
      "CPRS Instructor since 2017 — 15+ years facilitation experience",
    ],
    bio: "Vance brings more than 8 years of direct experience in addiction treatment, recovery and prevention. He has been teaching the Certified Peer Recovery Specialist course since 2017 and serves on multiple county substance use and mental health support boards in NJ. He is passionate about equipping communities, families, and allies with the tools needed to effectively support people in recovery.",
    initial: "VM",
    color: "from-[#a78bfa] to-[#818cf8]",
  },
];

export function FacilitatorsSection() {
  return (
    <section id="facilitators" className="bg-[#111e30] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-[#14b8a6] text-sm font-semibold tracking-widest uppercase">Your Facilitation Team</span>
          <h2 className="text-4xl font-bold text-white mt-3 mb-4">
            Expert-Led. Credentialed. Experienced.
          </h2>
          <p className="text-white/55 text-lg">
            Your clients' families will be guided by NJ-certified CRAFT specialists who have
            trained directly with the creator of the method and bring years of lived and clinical experience.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {facilitators.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white/4 border border-white/8 rounded-3xl p-8 hover:border-white/15 transition-colors"
            >
              {/* Header */}
              <div className="flex items-center gap-5 mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white font-black text-lg">{f.initial}</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl">{f.name}</h3>
                  <p className="text-[#14b8a6] text-sm font-medium">{f.title}</p>
                </div>
              </div>

              {/* Bio */}
              <p className="text-white/60 text-sm leading-relaxed mb-6">{f.bio}</p>

              {/* Credentials */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-white/40 text-xs font-semibold uppercase tracking-wider mb-3">
                  <Shield className="h-3.5 w-3.5" />
                  <span>Credentials & Certifications</span>
                </div>
                {f.credentials.map((c, j) => (
                  <div key={j} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-1.5 flex-shrink-0" />
                    <span className="text-white/65 text-sm">{c}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-wrap justify-center gap-6"
        >
          {[
            { icon: Award, text: "CRAFT Certified by Dr. Robert Meyers, PhD" },
            { icon: Shield, text: "NJ Peer Recovery Specialist Certified" },
            { icon: Users, text: "Hundreds of Families Trained" },
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-2.5 bg-white/4 border border-white/10 rounded-full px-5 py-2.5">
              <badge.icon className="h-4 w-4 text-[#14b8a6]" />
              <span className="text-white/70 text-sm">{badge.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
