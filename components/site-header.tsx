"use client";

import React, { useState, useEffect } from "react";
import VaultXLogo from "@/components/vaultx-logo";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Menu, X } from "lucide-react";

interface SiteHeaderProps {
  onOpenDownload: () => void;
}

export default function SiteHeader({ onOpenDownload }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <VaultXLogo size={42} showText={true} />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
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

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            onClick={onOpenDownload}
            className="bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl px-5 py-2 font-medium backdrop-blur-md shadow-md flex items-center gap-2 group transition-all"
          >
            <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            <span>Get VaultX</span>
          </Button>
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

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-white/10 backdrop-blur-2xl px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-300 hover:text-white"
            >
              Features
            </a>
            <a
              href="#platforms"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-300 hover:text-white"
            >
              Platforms
            </a>
            <a
              href="https://vaultx-by-hitansh.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-medium text-cyan-400 flex items-center gap-1.5"
            >
              <span>Live Web App</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </nav>

          <Button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenDownload();
            }}
            className="w-full bg-white text-black font-semibold py-3 rounded-xl flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>Download App</span>
          </Button>
        </div>
      )}
    </header>
  );
}
