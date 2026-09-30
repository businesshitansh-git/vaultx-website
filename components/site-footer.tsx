"use client";

import React from "react";
import VaultXLogo from "@/components/vaultx-logo";
import { ShieldCheck, Heart, Sparkles, ExternalLink, ArrowUp } from "lucide-react";

export default function SiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/15 bg-black/40 backdrop-blur-md pt-12 sm:pt-16 pb-8 sm:pb-12 overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[340px] sm:w-[700px] h-[200px] sm:h-[300px] bg-gradient-to-t from-indigo-500/20 via-cyan-500/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Logo & Pitch */}
          <div className="md:col-span-2 space-y-4">
            <VaultXLogo size={48} showText={true} />
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              VaultX is a fluid, zero-knowledge personal security vault engineered to safeguard your digital life across Android, iOS, and Desktop with cutting-edge cryptographic design.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Client-side encryption • Zero telemetry • Private by default</span>
            </div>
          </div>

          {/* Quick Platform Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Platforms
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href="/VaultX-Latest.apk"
                  download="VaultX-Latest.apk"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Android APK (v1.0.0)
                </a>
              </li>
              <li>
                <a
                  href="#platforms"
                  className="hover:text-cyan-400 transition-colors"
                >
                  iPhone &amp; iPad (Safari PWA)
                </a>
              </li>
              <li>
                <a
                  href="https://vaultx-by-hitansh.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-400 transition-colors inline-flex items-center gap-1"
                >
                  <span>Windows Web App</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Key Features
                </a>
              </li>
              <li>
                <a href="#platforms" className="hover:text-white transition-colors">
                  Install Guides
                </a>
              </li>
              <li>
                <button
                  onClick={scrollToTop}
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Back to top</span>
                  <ArrowUp className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} VaultX. All rights reserved.
          </p>

          {/* Prominent Hitansh credit as requested */}
          <div className="flex items-center gap-2 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full bg-black/50 border border-white/20 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 animate-pulse flex-shrink-0" />
            <span className="text-[11px] sm:text-sm font-medium text-slate-200">
              Designed &amp; developed by{" "}
              <strong className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 font-bold">
                Hitansh Andraskar
              </strong>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
