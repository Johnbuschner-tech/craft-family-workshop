"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

export function NavHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f1e35]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#14b8a6] flex items-center justify-center">
              <span className="text-white font-bold text-sm">RC</span>
            </div>
            <div>
              <p className="text-white font-bold text-sm leading-none">Recovery Life Collective</p>
              <p className="text-[#14b8a6] text-xs">CRAFT Family Workshop</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {[
              { label: "The Problem", id: "problem" },
              { label: "The Program", id: "program" },
              { label: "Curriculum", id: "curriculum" },
              { label: "Facilitators", id: "facilitators" },
              { label: "FAQ", id: "faq" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-white/70 hover:text-white text-sm transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:9144008108" className="flex items-center gap-1.5 text-white/70 hover:text-white text-sm transition-colors">
              <Phone className="h-3.5 w-3.5" />
              <span>914-400-8108</span>
            </a>
            <Button
              onClick={() => scrollTo("enroll")}
              className="bg-[#14b8a6] hover:bg-[#0d9488] text-white text-sm px-4 py-2 h-8 rounded-full"
            >
              Partner With Us
            </Button>
          </div>

          {/* Mobile menu toggle — explicit data-testid for reliable selection */}
          <button
            data-testid="mobile-menu-btn"
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div data-testid="mobile-menu" className="md:hidden bg-[#0f1e35] border-t border-white/10 px-4 py-4 space-y-3">
          {[
            { label: "The Problem", id: "problem" },
            { label: "The Program", id: "program" },
            { label: "Curriculum", id: "curriculum" },
            { label: "Facilitators", id: "facilitators" },
            { label: "FAQ", id: "faq" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="block text-white/80 text-sm py-2 w-full text-left"
            >
              {item.label}
            </button>
          ))}
          <Button
            onClick={() => scrollTo("enroll")}
            className="w-full bg-[#14b8a6] hover:bg-[#0d9488] text-white mt-2"
          >
            Partner With Us
          </Button>
        </div>
      )}
    </header>
  );
}
