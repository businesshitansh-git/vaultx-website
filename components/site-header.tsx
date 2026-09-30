"use client";

import React, { useState, useEffect } from "react";
import VaultXLogo from "@/components/vaultx-logo";
import { MetallicButton } from "@/components/ui/metallic-button";
import { ExternalLink, Menu, X } from "lucide-react";

interface SiteHeaderProps {
  onOpenDownload: () => void;
}

export default function SiteHeader({ onOpenDownload }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let prevScrolled = false;
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== prevScrolled) {
        prevScrolled = isScrolled;
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-3 sm:py-4 px-3 sm:px-6 lg:px-8">
      {/* Translucent Liquid Glass Navigation Bar */}
      <div
        className={`max-w-7xl mx-auto px-5 sm:px-6 py-2.5 rounded-2xl transition-all duration-300 flex items-center justify-between relative overflow-hidden backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] ${
          scrolled
            ? "bg-white/[0.08] border-white/25 shadow-2xl"
            : "bg-white/[0.04] border-white/15"
        }`}
        style={{
          background: scrolled
            ? "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)"
            : "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)",
        }}
      >
        {/* Specular Liquid Glass Top Sheen Reflection */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />

        {/* Logo */}
        <a href="#" className="flex items-center gap-3 relative z-10 flex-shrink-0">
          <VaultXLogo size={36} showText={true} />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 relative z-10">
          <a
            href="#features"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Features
          </a>
          <a
            href="#platforms"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Platforms
          </a>
          <a
            href="https://vaultx-by-hitansh.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-1.5"
          >
            <span>Live Web App</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* WebGL Metallic Button */}
        <div className="hidden md:flex items-center relative z-10 flex-shrink-0 pl-2">
          <MetallicButton
            label="Get VaultX"
            onClick={onOpenDownload}
            bandCount={4}
            zoom={7}
            idleSpeed={0.8}
            hoverSpeed={1.2}
          />
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer with Liquid Glass */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-7xl bg-slate-950/85 border border-white/25 backdrop-blur-2xl rounded-2xl p-5 space-y-4 shadow-2xl relative overflow-hidden">
          {/* Specular Top Sheen */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />

          {/* Liquid blurry glow */}
          <div
            className="absolute -top-12 left-1/2 -translate-x-1/2 w-72 h-36 rounded-full pointer-events-none opacity-35 blur-2xl"
            style={{
              background:
                "radial-gradient(circle at center, rgba(255, 255, 255, 0.4) 0%, rgba(56, 189, 248, 0.3) 40%, rgba(99, 102, 241, 0.2) 65%, transparent 80%)",
            }}
          />

          <nav className="flex flex-col space-y-3 relative z-10">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-white py-1 transition-colors"
            >
              Features
            </a>
            <a
              href="#platforms"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-white py-1 transition-colors"
            >
              Platforms
            </a>
            <a
              href="https://vaultx-by-hitansh.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-medium text-cyan-400 flex items-center gap-1.5 py-1"
            >
              <span>Live Web App</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </nav>

          <div className="pt-2 flex justify-center">
            <MetallicButton
              label="Get VaultX"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDownload();
              }}
              bandCount={4}
              zoom={7}
              idleSpeed={0.8}
            />
          </div>
        </div>
      )}
    </header>
  );
}
