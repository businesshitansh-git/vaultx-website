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
      <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 p-6 sm:p-12 rounded-3xl bg-black/40 border border-white/15 backdrop-blur-md shadow-2xl space-y-3 sm:space-y-4">
        <Badge
          variant="outline"
          className="bg-white/10 border-white/20 text-cyan-300 px-3 py-1 text-[11px] sm:text-xs uppercase tracking-wider backdrop-blur-sm font-semibold"
        >
          <Sparkles className="w-3.5 h-3.5 mr-1.5 inline" />
          The New Standard in Digital Security
        </Badge>

        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
          What is <span className="metal-text">VaultX</span> &amp; Why It Matters
        </h2>

        <p className="text-sm sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl mx-auto">
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
            <Card className="h-full bg-black/40 border-white/15 hover:border-white/30 backdrop-blur-md transition-all duration-300 shadow-xl group relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <CardHeader className="space-y-3 pb-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-300 bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
                    {feature.tag}
                  </span>
                </div>
                <CardTitle className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors drop-shadow-sm">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-slate-300 text-sm leading-relaxed font-normal">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Showcase Banner Card - Updated with exact Frosted Glass Style from Reference Image */}
      <div className="rounded-3xl p-6 sm:p-12 bg-black/40 border border-white/15 backdrop-blur-md shadow-2xl relative overflow-hidden">
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
