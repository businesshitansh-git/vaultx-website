"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import LiquidMetalCanvas from "@/components/ui/liquid-metal-canvas";

interface LiquidMetalHeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  primaryCtaLabel: string;
  secondaryCtaLabel?: string;
  onPrimaryCtaClick: () => void;
  onSecondaryCtaClick?: () => void;
  features?: string[];
  children?: React.ReactNode;
}

export default function LiquidMetalHero({
  badge,
  title,
  subtitle,
  primaryCtaLabel,
  secondaryCtaLabel,
  onPrimaryCtaClick,
  onSecondaryCtaClick,
  features = [],
  children,
}: LiquidMetalHeroProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.15,
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-28 pb-16 px-6">
      {/* Silky molten liquid metal WebGL canvas */}
      {mounted && <LiquidMetalCanvas speed={1.1} />}

      {/* Specular glass atmosphere */}
      <div className="fixed inset-0 pointer-events-none z-[1] bg-gradient-to-b from-black/25 via-transparent to-black/70" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          className="text-center space-y-6 sm:space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {badge && (
            <motion.div className="flex justify-center" variants={itemVariants}>
              <Badge
                variant="secondary"
                className="bg-white/10 text-slate-100 border border-white/20 hover:bg-white/15 transition-all duration-300 backdrop-blur-xl px-4 py-1.5 text-xs sm:text-sm font-medium tracking-wide shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
              >
                {badge}
              </Badge>
            </motion.div>
          )}

          {children}

          <motion.div className="space-y-4" variants={itemVariants}>
            <motion.h1
              role="heading"
              aria-level={1}
              className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.08] drop-shadow-[0_4px_30px_rgba(0,0,0,0.85)] font-mono"
              variants={itemVariants}
            >
              {title}
            </motion.h1>

            <motion.p
              className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-200/90 leading-relaxed font-light drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
              variants={itemVariants}
            >
              {subtitle}
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2"
            variants={buttonVariants}
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Button
                onClick={onPrimaryCtaClick}
                size="lg"
                className="bg-white text-slate-950 hover:bg-slate-100 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.25)] text-base sm:text-lg px-8 py-6 font-bold rounded-2xl"
              >
                {primaryCtaLabel}
              </Button>
            </motion.div>

            {secondaryCtaLabel && onSecondaryCtaClick && (
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <Button
                  onClick={onSecondaryCtaClick}
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/15 hover:border-white/50 transition-all duration-300 backdrop-blur-xl text-base sm:text-lg px-8 py-6 font-semibold rounded-2xl bg-white/[0.05] shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
                >
                  {secondaryCtaLabel}
                </Button>
              </motion.div>
            )}
          </motion.div>

          {features.length > 0 && (
            <motion.div className="pt-8 sm:pt-12" variants={itemVariants}>
              <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.3 }}>
                <Card className="bg-white/[0.06] border-white/15 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.6)] max-w-4xl mx-auto rounded-3xl overflow-hidden">
                  <div className="p-6 sm:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                      {features.map((feature, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center justify-center text-center p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all"
                          initial={{ opacity: 0, x: -15 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.5 + index * 0.1,
                          }}
                        >
                          <p className="text-white font-medium text-sm sm:text-base tracking-wide">
                            {feature}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
