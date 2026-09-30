"use client";

import React, { useState, useEffect } from "react";
import { LiquidMetal } from "@paper-design/shaders-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface LiquidMetalHeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  primaryCtaLabel: string;
  secondaryCtaLabel?: string;
  onPrimaryCtaClick: () => void;
  onSecondaryCtaClick?: () => void;
  features?: string[];
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
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24">
      {/* 90+ FPS Ultra-Optimized 3D Liquid Metal Sphere */}
      {mounted && (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
          {/* Zero-cost radial gradient ambient aura */}
          <div
            className="w-[500px] h-[500px] sm:w-[620px] sm:h-[620px] absolute rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(99, 102, 241, 0.22) 0%, rgba(56, 189, 248, 0.15) 35%, transparent 70%)",
            }}
          />

          {/* Hardware-accelerated GPU floating orb container */}
          <div
            className="w-[440px] h-[440px] sm:w-[540px] sm:h-[540px] relative flex items-center justify-center animate-orb-float rounded-full overflow-hidden"
            style={{
              WebkitMaskImage:
                "radial-gradient(circle at center, black 58%, transparent 70%)",
              maskImage:
                "radial-gradient(circle at center, black 58%, transparent 70%)",
              transform: "translateZ(0)",
            }}
          >
            <LiquidMetal
              shape="circle"
              scale={0.75}
              colorBack="#000000"
              colorTint="#ffffff"
              speed={0.75}
              minPixelRatio={1}
              maxPixelCount={220000}
              softness={0.12}
              distortion={0.06}
              repetition={2}
              shiftRed={0.3}
              shiftBlue={0.3}
              contour={0.35}
              angle={70}
              style={{
                width: "100%",
                height: "100%",
                pointerEvents: "none",
              }}
            />
          </div>
        </div>
      )}

      {/* Hero Foreground Content */}
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          className="text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {badge && (
            <motion.div className="flex justify-center" variants={itemVariants}>
              <Badge
                variant="secondary"
                className="bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors duration-200 backdrop-blur-sm px-4 py-1.5 text-xs sm:text-sm font-medium tracking-wide shadow-md"
              >
                {badge}
              </Badge>
            </motion.div>
          )}

          <motion.div className="space-y-6" variants={itemVariants}>
            <h1
              role="heading"
              aria-level={1}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight tracking-tight drop-shadow-[0_4px_25px_rgba(0,0,0,0.95)]"
            >
              {title}
            </h1>

            <p className="max-w-3xl mx-auto text-lg sm:text-xl lg:text-2xl text-slate-100/90 leading-relaxed font-normal drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
              {subtitle}
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2"
            variants={itemVariants}
          >
            <Button
              onClick={onPrimaryCtaClick}
              size="lg"
              className="bg-white text-black hover:bg-slate-100 transition-all duration-200 shadow-[0_0_25px_rgba(255,255,255,0.25)] text-base sm:text-lg px-8 py-6 font-bold rounded-2xl active:scale-95"
            >
              {primaryCtaLabel}
            </Button>

            {secondaryCtaLabel && onSecondaryCtaClick && (
              <Button
                onClick={onSecondaryCtaClick}
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-200 backdrop-blur-sm text-base sm:text-lg px-8 py-6 font-semibold rounded-2xl bg-black/50 shadow-md active:scale-95"
              >
                {secondaryCtaLabel}
              </Button>
            )}
          </motion.div>

          {features.length > 0 && (
            <motion.div className="pt-10 sm:pt-14" variants={itemVariants}>
              <Card className="bg-black/60 border-white/15 backdrop-blur-md shadow-xl max-w-4xl mx-auto rounded-2xl overflow-hidden">
                <div className="p-6 sm:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-center text-center p-2 rounded-xl"
                      >
                        <p className="text-white font-medium text-base sm:text-lg tracking-wide">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
