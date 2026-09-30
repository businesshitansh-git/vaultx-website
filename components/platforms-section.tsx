"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Apple,
  Monitor,
  Download,
  ExternalLink,
  Info,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PlatformsSectionProps {
  onOpenIosGuide: () => void;
}

export default function PlatformsSection({ onOpenIosGuide }: PlatformsSectionProps) {
  const websiteUrl = "https://vaultx-by-hitansh.netlify.app/";
  const apkDownloadPath = "/VaultX-Latest.apk";

  return (
    <section id="platforms" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Frosted Glass Section Header Card with Liquid Refraction */}
      <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 p-6 sm:p-12 rounded-3xl bg-white/[0.04] border border-white/20 backdrop-blur-xl shadow-2xl space-y-3 sm:space-y-4 relative overflow-hidden">
        {/* Specular Top Sheen */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />
        <div
          className="absolute -top-16 left-1/2 -translate-x-1/2 w-96 h-48 rounded-full pointer-events-none opacity-30 blur-2xl"
          style={{
            background: "radial-gradient(ellipse, rgba(56, 189, 248, 0.4) 0%, rgba(99, 102, 241, 0.25) 50%, transparent 75%)",
          }}
        />

        <Badge
          variant="outline"
          className="bg-white/10 border-white/20 text-cyan-300 px-3 py-1 text-[11px] sm:text-xs uppercase tracking-wider backdrop-blur-sm font-semibold relative z-10"
        >
          Download &amp; Access
        </Badge>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] relative z-10">
          Available Everywhere You Need It
        </h2>
        <p className="text-sm sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl mx-auto relative z-10">
          Install the native APK on Android, save the web app to your iPhone home screen via Safari, or launch directly in any desktop browser on Windows.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {/* Android Card with Liquid Blurry Background Orb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-white/[0.04] border border-emerald-500/30 p-8 backdrop-blur-2xl flex flex-col justify-between hover:border-emerald-500/60 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.5)] relative overflow-hidden group"
        >
          {/* Specular Top Sheen */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />

          {/* Liquid Blurry Background Orb matching the middle card */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none opacity-45 blur-2xl transition-opacity duration-500 group-hover:opacity-60"
            style={{
              background:
                "radial-gradient(circle at center, rgba(255, 255, 255, 0.45) 0%, rgba(16, 185, 129, 0.38) 40%, rgba(20, 184, 166, 0.18) 60%, transparent 75%)",
            }}
          />

          <div className="space-y-6 relative z-10">
            <div className="flex items-center justify-between">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                <Smartphone className="w-7 h-7" />
              </div>
              <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/40 font-semibold shadow-sm">
                APK Direct
              </Badge>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Android</h3>
              <p className="text-sm text-slate-200 leading-relaxed font-normal">
                Full native APK package. Direct installation on any Android phone or tablet without store restrictions.
              </p>
            </div>

            <ul className="space-y-2 text-xs text-slate-200">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Package: VaultX-Latest.apk (~85 MB)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Android 8.0 (Oreo) and above</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Offline vault &amp; biometric lock ready</span>
              </li>
            </ul>
          </div>

          <div className="pt-8 relative z-10">
            <a href={apkDownloadPath} download="VaultX-Latest.apk" className="block w-full">
              <Button
                size="lg"
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-full h-[48px] flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(16,185,129,0.45)] transition-all duration-150 active:scale-95 cursor-pointer select-none touch-manipulation group"
              >
                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                <span>Download APK</span>
              </Button>
            </a>
          </div>
        </motion.div>

        {/* iPhone / iOS Card with Liquid Blurry Background Orb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-3xl bg-white/[0.04] border border-cyan-500/30 p-8 backdrop-blur-2xl flex flex-col justify-between hover:border-cyan-500/60 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.5)] relative overflow-hidden group"
        >
          {/* Specular Top Sheen */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />

          {/* Liquid Blurry Background Orb matching the middle card */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none opacity-45 blur-2xl transition-opacity duration-500 group-hover:opacity-60"
            style={{
              background:
                "radial-gradient(circle at center, rgba(255, 255, 255, 0.45) 0%, rgba(6, 182, 212, 0.38) 40%, rgba(99, 102, 241, 0.18) 60%, transparent 75%)",
            }}
          />

          <div className="space-y-6 relative z-10">
            <div className="flex items-center justify-between">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                <Apple className="w-7 h-7" />
              </div>
              <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/40 font-semibold shadow-sm">
                Home Screen PWA
              </Badge>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-2">iPhone &amp; iPad</h3>
              <p className="text-sm text-slate-200 leading-relaxed font-normal">
                Add directly to your iOS Home Screen via Safari. Delivers a native standalone full-screen experience.
              </p>
            </div>

            <ul className="space-y-2 text-xs text-slate-200">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Open in Safari browser</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Tap Share &rarr; &quot;Add to Home Screen&quot;</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>No App Store ID or account needed</span>
              </li>
            </ul>
          </div>

          <div className="pt-8 space-y-2 relative z-10">
            <Button
              onClick={onOpenIosGuide}
              size="lg"
              className="w-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold rounded-full h-[48px] flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(6,182,212,0.45)] transition-all duration-150 active:scale-95 cursor-pointer select-none touch-manipulation group"
            >
              <Info className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>View iPhone Steps</span>
            </Button>
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-xs text-cyan-300 hover:text-cyan-200 py-1 font-medium"
            >
              Or open website directly &rarr;
            </a>
          </div>
        </motion.div>

        {/* Windows Card with Liquid Blurry Background Orb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-3xl bg-white/[0.04] border border-indigo-500/30 p-8 backdrop-blur-2xl flex flex-col justify-between hover:border-indigo-500/60 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.5)] relative overflow-hidden group"
        >
          {/* Specular Top Sheen */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />

          {/* Liquid Blurry Background Orb matching the middle card */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none opacity-45 blur-2xl transition-opacity duration-500 group-hover:opacity-60"
            style={{
              background:
                "radial-gradient(circle at center, rgba(255, 255, 255, 0.45) 0%, rgba(99, 102, 241, 0.4) 40%, rgba(168, 85, 247, 0.2) 60%, transparent 75%)",
            }}
          />

          <div className="space-y-6 relative z-10">
            <div className="flex items-center justify-between">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                <Monitor className="w-7 h-7" />
              </div>
              <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/40 font-semibold shadow-sm">
                Web &amp; Desktop
              </Badge>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Windows &amp; PC</h3>
              <p className="text-sm text-slate-200 leading-relaxed font-normal">
                Launch instantly inside Chrome, Edge, Brave, or Firefox, or install as a progressive desktop application.
              </p>
            </div>

            <ul className="space-y-2 text-xs text-slate-200">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                <span>Zero installation setup required</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                <span>Instant sync across all devices</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                <span>Supports Chrome / Edge App install</span>
              </li>
            </ul>
          </div>

          <div className="pt-8 relative z-10">
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button
                size="lg"
                className="w-full bg-indigo-500 hover:bg-indigo-400 text-white font-bold rounded-full h-[48px] flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(99,102,241,0.45)] transition-all duration-150 active:scale-95 cursor-pointer select-none touch-manipulation group"
              >
                <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                <span>Launch on Windows</span>
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
