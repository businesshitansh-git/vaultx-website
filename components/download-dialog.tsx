"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  Apple,
  Monitor,
  Download,
  ExternalLink,
  CheckCircle2,
  Share,
  PlusSquare,
  ShieldCheck,
  X,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface DownloadDialogProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlatform?: "android" | "ios" | "windows";
}

export default function DownloadDialog({
  isOpen,
  onClose,
  defaultPlatform = "android",
}: DownloadDialogProps) {
  const [platform, setPlatform] = useState<"android" | "ios" | "windows">(
    defaultPlatform
  );

  useEffect(() => {
    if (defaultPlatform) {
      setPlatform(defaultPlatform);
    }
  }, [defaultPlatform, isOpen]);

  const websiteUrl = "https://vaultx-by-hitansh.netlify.app/";
  const apkDownloadPath = "/VaultX-Version-2.2.apk";

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
          className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-3xl bg-slate-950/85 border border-white/25 backdrop-blur-2xl shadow-[0_0_80px_rgba(0,0,0,0.85)] z-10 my-auto overflow-hidden"
        >
          {/* Specular Top Sheen */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />

          {/* Liquid blurry ambient backlight */}
          <div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full pointer-events-none opacity-30 blur-3xl"
            style={{
              background:
                "radial-gradient(circle at center, rgba(255, 255, 255, 0.4) 0%, rgba(56, 189, 248, 0.3) 40%, rgba(99, 102, 241, 0.2) 65%, transparent 80%)",
            }}
          />

          {/* Header subtle glow */}
          <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-indigo-500/15 via-cyan-500/10 to-transparent pointer-events-none" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors z-20"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-4 sm:p-8">
            {/* Title & subtitle */}
            <div className="text-center mb-5 sm:mb-6">
              <Badge
                variant="outline"
                className="mb-2 bg-indigo-950/50 border-indigo-500/30 text-indigo-300 px-2.5 py-0.5 text-[11px] sm:text-xs"
              >
                <Sparkles className="w-3.5 h-3.5 mr-1 text-cyan-400 inline" />
                Cross-Platform Access
              </Badge>
              <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-white">
                Get <span className="metal-text">VaultX</span> for Your Device
              </h2>
              <p className="text-xs sm:text-base text-slate-400 mt-1">
                Choose your platform to install or launch VaultX instantly.
              </p>
            </div>

            {/* Platform Selector Tabs */}
            <div className="grid grid-cols-3 gap-1 sm:gap-2 p-1 sm:p-1.5 bg-white/[0.04] rounded-2xl border border-white/10 mb-5 sm:mb-6">
              <button
                onClick={() => setPlatform("android")}
                className={`flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 px-2 rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 active:scale-95 touch-manipulation cursor-pointer select-none ${
                  platform === "android"
                    ? "bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border border-emerald-500/30 shadow-lg"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                }`}
              >
                <Smartphone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Android</span>
              </button>

              <button
                onClick={() => setPlatform("ios")}
                className={`flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 px-2 rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 active:scale-95 touch-manipulation cursor-pointer select-none ${
                  platform === "ios"
                    ? "bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-cyan-300 border border-cyan-500/30 shadow-lg"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                }`}
              >
                <Apple className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>iPhone</span>
              </button>

              <button
                onClick={() => setPlatform("windows")}
                className={`flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 px-2 rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 active:scale-95 touch-manipulation cursor-pointer select-none ${
                  platform === "windows"
                    ? "bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 border border-indigo-500/30 shadow-lg"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                }`}
              >
                <Monitor className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Windows</span>
              </button>
            </div>

            {/* Platform Content Panes */}
            <div>
              {/* ANDROID TAB */}
              {platform === "android" && (
                <motion.div
                  key="android"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-5"
                >
                  <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-left space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-white text-lg">
                          VaultX for Android
                        </span>
                        <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 text-xs">
                          APK Direct (v2.2)
                        </Badge>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-400">
                        Package: VaultX-Version-2.2.apk • Size: ~86.5 MB • OS: Android 8.0+
                      </p>
                    </div>

                    <a
                      href={apkDownloadPath}
                      download="VaultX-Version-2.2.apk"
                      className="w-full sm:w-auto"
                    >
                      <Button
                        size="lg"
                        className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-6 py-5 rounded-xl shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 group transition-all"
                      >
                        <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                        Download APK (v2.2)
                      </Button>
                    </a>
                  </div>

                  {/* Installation steps for Android */}
                  <div className="space-y-3 rounded-2xl bg-white/[0.02] border border-white/5 p-4 sm:p-5">
                    <h4 className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      Quick 3-Step Installation:
                    </h4>
                    <ol className="space-y-2.5 text-xs sm:text-sm text-slate-400">
                      <li className="flex items-start gap-2.5">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs flex items-center justify-center font-bold">
                          1
                        </span>
                        <span>
                          Tap <strong>Download APK</strong> to save the package to your phone.
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs flex items-center justify-center font-bold">
                          2
                        </span>
                        <span>
                          Open your phone notifications or Downloads folder and tap <strong>VaultX-Version-2.2.apk</strong>.
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs flex items-center justify-center font-bold">
                          3
                        </span>
                        <span>
                          Tap <strong>Install</strong>. (If requested, toggle <em>&quot;Allow from this source&quot;</em> in Android Settings).
                        </span>
                      </li>
                    </ol>
                  </div>
                </motion.div>
              )}

              {/* IPHONE / IOS TAB */}
              {platform === "ios" && (
                <motion.div
                  key="ios"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-5"
                >
                  <div className="p-5 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-left space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-white text-lg">
                          VaultX for iPhone & iPad
                        </span>
                        <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 text-xs">
                          PWA / Home Screen
                        </Badge>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-400">
                        Full native feel • No App Store download required • Instant launch
                      </p>
                    </div>

                    <a
                      href={websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto"
                    >
                      <Button
                        size="lg"
                        className="w-full sm:w-auto bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold px-6 py-5 rounded-xl shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 group transition-all"
                      >
                        <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                        Open Web App
                      </Button>
                    </a>
                  </div>

                  {/* Step by step visual instructions for iPhone */}
                  <div className="space-y-3 rounded-2xl bg-white/[0.02] border border-white/5 p-4 sm:p-5">
                    <h4 className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                      <Apple className="w-4 h-4 text-cyan-400" />
                      How to Install on iPhone (Safari):
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                      <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-center flex flex-col items-center">
                        <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-2">
                          <ExternalLink className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-bold text-white mb-1">
                          Step 1
                        </span>
                        <p className="text-xs text-slate-400 leading-tight">
                          Open VaultX in <strong>Safari</strong> on your iPhone.
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-center flex flex-col items-center">
                        <div className="w-9 h-9 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-2">
                          <Share className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-bold text-white mb-1">
                          Step 2
                        </span>
                        <p className="text-xs text-slate-400 leading-tight">
                          Tap the <strong>Share button</strong> in Safari toolbar.
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-center flex flex-col items-center">
                        <div className="w-9 h-9 rounded-lg bg-violet-500/10 text-violet-400 flex items-center justify-center mb-2">
                          <PlusSquare className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-bold text-white mb-1">
                          Step 3
                        </span>
                        <p className="text-xs text-slate-400 leading-tight">
                          Select <strong>&quot;Add to Home Screen&quot;</strong> and tap Add.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* WINDOWS TAB */}
              {platform === "windows" && (
                <motion.div
                  key="windows"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-5"
                >
                  <div className="p-5 rounded-2xl bg-indigo-950/20 border border-indigo-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-left space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-white text-lg">
                          VaultX for Windows
                        </span>
                        <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30 text-xs">
                          Browser & Desktop PWA
                        </Badge>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-400">
                        Launch directly in Chrome, Edge, Brave, or Firefox.
                      </p>
                    </div>

                    <a
                      href={websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto"
                    >
                      <Button
                        size="lg"
                        className="w-full sm:w-auto bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold px-6 py-5 rounded-xl shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 group transition-all"
                      >
                        <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                        Launch VaultX
                      </Button>
                    </a>
                  </div>

                  <div className="space-y-3 rounded-2xl bg-white/[0.02] border border-white/5 p-4 sm:p-5">
                    <h4 className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                      <Monitor className="w-4 h-4 text-indigo-400" />
                      Optional: Install as Windows Desktop App
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      When you open VaultX in Google Chrome or Microsoft Edge on Windows, click the <strong>&quot;Install App&quot;</strong> icon in the address bar (top right). You will get a standalone desktop window, desktop shortcut, and taskbar pin!
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
