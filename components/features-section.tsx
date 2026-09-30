"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Zap,
  Smartphone,
  KeyRound,
  EyeOff,
  CloudOff,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MetallicButton } from "@/components/ui/metallic-button";

interface FeaturesSectionProps {
  onOpenDownload: () => void;
}

export default function FeaturesSection({ onOpenDownload }: FeaturesSectionProps) {
  const features = [
    {
      icon: <Lock className="w-6 h-6 text-cyan-400" />,
      title: "End-to-End Encryption",
      description:
        "Every byte is encrypted client-side using military-grade AES-256-GCM. Your secrets never leave your device unencrypted.",
      tag: "Security First",
    },
    {
      icon: <EyeOff className="w-6 h-6 text-indigo-400" />,
      title: "Zero-Knowledge Architecture",
      description:
        "Only you hold the master encryption key. Even server hosts or database administrators cannot view or decipher your vault.",
      tag: "Pure Privacy",
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-400" />,
      title: "Lightning-Fast Access",
      description:
        "Engineered with liquid-smooth responsiveness and instantaneous search to access your credentials in milliseconds.",
      tag: "Ultra Responsive",
    },
    {
      icon: <CloudOff className="w-6 h-6 text-emerald-400" />,
      title: "Offline Vault Mode",
      description:
        "Full local cache capability ensures you can access your essential passwords and encrypted data anytime, anywhere—even without internet.",
      tag: "Always Available",
    },
    {
      icon: <KeyRound className="w-6 h-6 text-violet-400" />,
      title: "Smart Credential Manager",
      description:
        "Store passwords, secure notes, 2FA backup codes, identity keys, and payment credentials inside categorized, taggable folders.",
      tag: "Organized",
    },
    {
      icon: <Smartphone className="w-6 h-6 text-pink-400" />,
      title: "Universal Cross-Platform",
      description:
        "Available on Android via native APK, iPhone via Home Screen PWA, and Windows / Mac via modern browser apps.",
      tag: "Multi-Platform",
    },
  ];

  return (
    <section id="features" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Frosted Glass Section Header Card matching reference style */}
      <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 p-6 sm:p-12 rounded-3xl bg-white/[0.04] border border-white/20 backdrop-blur-xl shadow-2xl space-y-3 sm:space-y-4 relative overflow-hidden">
        {/* Specular Top Sheen */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />
        <div
          className="absolute -top-16 left-1/2 -translate-x-1/2 w-96 h-48 rounded-full pointer-events-none opacity-30 blur-2xl"
          style={{
            background:
              "radial-gradient(ellipse, rgba(56, 189, 248, 0.4) 0%, rgba(99, 102, 241, 0.25) 50%, transparent 75%)",
          }}
        />

        <Badge
          variant="outline"
          className="bg-white/10 border-white/20 text-cyan-300 px-3 py-1 text-[11px] sm:text-xs uppercase tracking-wider backdrop-blur-sm font-semibold relative z-10"
        >
          <Sparkles className="w-3.5 h-3.5 mr-1.5 inline" />
          The New Standard in Digital Security
        </Badge>

        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] relative z-10">
          What is <span className="metal-text">VaultX</span> &amp; Why It Matters
        </h2>

        <p className="text-sm sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl mx-auto relative z-10">
          In an era of relentless data breaches and invasive tracking, <strong className="text-white font-semibold">VaultX</strong> gives you uncompromised digital sovereignty. It is your personal encrypted haven for sensitive passwords, confidential notes, private keys, and digital assets.
        </p>
      </div>

      {/* Feature Grid with Matching Frosted Glass Styling */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <Card className="h-full bg-white/[0.04] border-white/20 hover:border-white/40 backdrop-blur-2xl transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.5)] group relative overflow-hidden rounded-2xl">
              {/* Specular Top Sheen */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />

              {/* Liquid blurry background orb */}
              <div
                className="absolute -top-8 -right-8 w-48 h-48 rounded-full pointer-events-none opacity-35 blur-xl group-hover:opacity-55 transition-opacity"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(255, 255, 255, 0.35) 0%, rgba(56, 189, 248, 0.25) 45%, transparent 70%)",
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <CardHeader className="space-y-3 pb-3 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    {feature.icon}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-300 bg-white/10 px-2.5 py-1 rounded-full border border-white/15">
                    {feature.tag}
                  </span>
                </div>
                <CardTitle className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors drop-shadow-sm">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <CardDescription className="text-slate-200 text-sm leading-relaxed font-normal">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Showcase Banner Card - Updated with exact Frosted Glass Style from Reference Image */}
      <div className="rounded-3xl p-6 sm:p-12 bg-white/[0.04] border border-white/20 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] relative overflow-hidden">
        {/* Specular Top Sheen */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />

        {/* Dual Liquid Blurry Background Orbs */}
        <div
          className="absolute -top-16 -left-16 w-80 h-80 rounded-full pointer-events-none opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255, 255, 255, 0.4) 0%, rgba(16, 185, 129, 0.35) 45%, transparent 75%)",
          }}
        />
        <div
          className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full pointer-events-none opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255, 255, 255, 0.4) 0%, rgba(6, 182, 212, 0.35) 45%, transparent 75%)",
          }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
          <div className="space-y-4">
            <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 px-3 py-1 font-semibold text-[11px] sm:text-xs">
              <ShieldCheck className="w-3.5 h-3.5 mr-1.5 inline" />
              Unbreakable Peace of Mind
            </Badge>
            <h3 className="text-xl sm:text-3xl font-bold text-white drop-shadow-sm">
              Built for speed, styled with liquid precision.
            </h3>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              VaultX replaces clunky legacy password utilities with an ultra-fluid, liquid-metal interface. Experience effortless security designed by Hitansh Andraskar that respects your privacy from day one.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <MetallicButton
                label="Get VaultX"
                onClick={onOpenDownload}
                bandCount={4}
                zoom={7}
                idleSpeed={0.8}
              />
              <span className="text-xs text-slate-300 font-medium">
                Instant setup • No card needed
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="p-3.5 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 text-center shadow-md backdrop-blur-sm">
              <div className="text-2xl sm:text-4xl font-black text-white font-mono">
                256<span className="text-cyan-400 text-sm sm:text-lg">bit</span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-300 mt-1 font-medium">
                AES-GCM Encryption
              </p>
            </div>

            <div className="p-3.5 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 text-center shadow-md backdrop-blur-sm">
              <div className="text-2xl sm:text-4xl font-black text-white font-mono">
                0%
              </div>
              <p className="text-[11px] sm:text-xs text-slate-300 mt-1 font-medium">
                Telemetry &amp; Tracking
              </p>
            </div>

            <div className="p-3.5 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 text-center shadow-md backdrop-blur-sm">
              <div className="text-2xl sm:text-4xl font-black text-white font-mono">
                3+
              </div>
              <p className="text-[11px] sm:text-xs text-slate-300 mt-1 font-medium">
                Major Platforms Supported
              </p>
            </div>

            <div className="p-3.5 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 text-center shadow-md backdrop-blur-sm">
              <div className="text-2xl sm:text-4xl font-black text-emerald-400 font-mono">
                100%
              </div>
              <p className="text-[11px] sm:text-xs text-slate-300 mt-1 font-medium">
                Zero-Knowledge Privacy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
