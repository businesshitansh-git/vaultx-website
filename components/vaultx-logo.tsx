"use client";

import React from "react";
import { motion } from "framer-motion";

interface VaultXLogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

export default function VaultXLogo({
  size = 56,
  className = "",
  showText = false,
}: VaultXLogoProps) {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <motion.div
        className="relative group cursor-pointer"
        whileHover={{ scale: 1.06, rotate: 1 }}
        whileTap={{ scale: 0.95 }}
        style={{ width: size, height: size }}
      >
        {/* Ambient neon/metal glow under logo */}
        <div
          className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-500/30 via-indigo-500/25 to-violet-500/30 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"
        />

        {/* Liquid Glass Container */}
        <div className="relative w-full h-full rounded-2xl p-[1.5px] bg-gradient-to-br from-white/40 via-white/10 to-white/5 shadow-2xl backdrop-blur-md overflow-hidden">
          {/* Inner glass pane */}
          <div className="w-full h-full rounded-2xl bg-gradient-to-b from-slate-900/80 via-slate-950/90 to-black/95 flex items-center justify-center p-2.5">
            <svg
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full drop-shadow-[0_2px_12px_rgba(255,255,255,0.35)]"
            >
              <defs>
                {/* Liquid Chrome Primary Gradient */}
                <linearGradient id="metalChrome" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="25%" stopColor="#e2e8f0" />
                  <stop offset="45%" stopColor="#94a3b8" />
                  <stop offset="65%" stopColor="#f8fafc" />
                  <stop offset="85%" stopColor="#64748b" />
                  <stop offset="100%" stopColor="#ffffff" />
                </linearGradient>

                {/* Glass Reflection Gradient */}
                <linearGradient id="glassReflection" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#ffffff" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>

                {/* Electric Cyan/Purple accent streak */}
                <linearGradient id="accentStreak" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.7" />
                  <stop offset="50%" stopColor="#818cf8" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#c084fc" stopOpacity="0.8" />
                </linearGradient>

                <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Liquid V Wings - Background layer with accent glow */}
              <path
                d="M18 22 L50 82 L82 22 L67 22 L50 60 L33 22 Z"
                fill="url(#accentStreak)"
                opacity="0.6"
              />

              {/* Main Liquid Metal 'V' Monogram */}
              <path
                d="M20 20 L50 78 L80 20 L66 20 L50 56 L34 20 Z"
                fill="url(#metalChrome)"
                stroke="rgba(255,255,255,0.7)"
                strokeWidth="1"
              />

              {/* Inner Cut-out Prism Highlight */}
              <path
                d="M50 78 L50 56 L66 20 L58 20 L46 50 L50 78 Z"
                fill="url(#glassReflection)"
              />

              {/* Futuristic Center Core 'X' Accent Notch */}
              <circle
                cx="50"
                cy="38"
                r="3.5"
                fill="#ffffff"
                filter="url(#softGlow)"
              />
            </svg>
          </div>

          {/* Liquid glass light-sweep shimmer */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
        </div>
      </motion.div>

      {showText && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span className="text-2xl font-black tracking-tight text-white font-mono">
              VAULT
            </span>
            <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-cyan-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">
              X
            </span>
          </div>
          <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold -mt-1">
            Secure Digital Vault
          </span>
        </div>
      )}
    </div>
  );
}
