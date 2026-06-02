"use client";

import { Phone, Mail, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#070f1c] border-t border-white/8 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#14b8a6] flex items-center justify-center">
              <span className="text-white font-bold text-sm">RC</span>
            </div>
            <div>
              <p className="text-white font-bold text-sm leading-none">Recovery Life Collective LLC</p>
              <p className="text-[#14b8a6] text-xs">CRAFT Family Workshop</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="mailto:John@recoverylifecollective.com"
              className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors"
            >
              <Mail className="h-4 w-4" />
              John@recoverylifecollective.com
            </a>
            <a
              href="tel:9144008108"
              className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors"
            >
              <Phone className="h-4 w-4" />
              914-400-8108
            </a>
            <a
              href="https://recoverylifecollective.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              recoverylifecollective.com
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Recovery Life Collective LLC. All rights reserved.
          </p>
          <p className="text-white/25 text-xs">
            CRAFT method developed by Dr. Robert Meyers, PhD — University of New Mexico.
          </p>
        </div>
      </div>
    </footer>
  );
}
