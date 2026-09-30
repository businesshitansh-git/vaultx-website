"use client";

import React, { useState, useEffect } from "react";
import { LiquidMetal } from "@paper-design/shaders-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

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

  // Throttled mouse parallax for lag-free buttery smooth 60fps tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 45, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 45, damping: 25 });

  const orbTranslateX = useTransform(springX, [-0.5, 0.5], [-20, 20]);
  const orbTranslateY = useTransform(springY, [-0.5, 0.5], [-20, 20]);

  useEffect(() => {
    setMounted(true);

    let rafId: number;
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const normalizedX = e.clientX / window.innerWidth - 0.5;
        const normalizedY = e.clientY / window.innerHeight - 0.5;
        mouseX.set(normalizedX);
        mouseY.set(normalizedY);
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [mouseX, mouseY]);

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24">
      {/* Persistent 3D Liquid Metal Sphere - Stays visible as you scroll down */}
      {mounted && (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
          <motion.div
            style={{ x: orbTranslateX, y: orbTranslateY }}
            animate={{
              y: [-10, 10, -10],
              scale: [1, 1.02, 1],
            }}
            transition={{
              y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
              scale: { repeat: Infinity, duration: 8, ease: "easeInOut" },
            }}
            className="w-[450px] h-[450px] sm:w-[560px] sm:h-[560px] lg:w-[640px] lg:h-[640px] relative flex items-center justify-center will-change-transform"
          >
            {/* Ambient soft glow aura behind and around the sphere to eliminate harsh blackness */}
            <div className="absolute -inset-8 rounded-full bg-gradient-to-tr from-cyan-500/25 via-indigo-500/20 to-violet-500/25 blur-3xl pointer-events-none opacity-80" />
            <div className="absolute -inset-16 rounded-full bg-indigo-600/10 blur-[100px] pointer-events-none" />

            <LiquidMetal
              shape="circle"
              scale={0.75}
              colorBack="#000000"
              colorTint="#ffffff"
              speed={0.75}
              minPixelRatio={1}
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
          </motion.div>
        </div>
      )}

      {/* Hero Foreground Content */}
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          className="text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {badge && (
            <motion.div className="flex justify-center" variants={itemVariants}>
              <Badge
                variant="secondary"
                className="bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors duration-300 backdrop-blur-md px-4 py-1.5 text-xs sm:text-sm font-medium tracking-wide shadow-lg"
              >
                {badge}
              </Badge>
            </motion.div>
          )}

          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.h1
              role="heading"
              aria-level={1}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight tracking-tight drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)]"
              variants={itemVariants}
            >
              {title}
            </motion.h1>

            <motion.p
              className="max-w-3xl mx-auto text-lg sm:text-xl lg:text-2xl text-slate-100/90 leading-relaxed font-normal drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]"
              variants={itemVariants}
            >
              {subtitle}
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2"
            variants={buttonVariants}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={onPrimaryCtaClick}
                size="lg"
                className="bg-white text-black hover:bg-slate-100 transition-all duration-300 shadow-[0_0_35px_rgba(255,255,255,0.3)] text-base sm:text-lg px-8 py-6 font-bold rounded-2xl"
              >
                {primaryCtaLabel}
              </Button>
            </motion.div>

            {secondaryCtaLabel && onSecondaryCtaClick && (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={onSecondaryCtaClick}
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-md text-base sm:text-lg px-8 py-6 font-semibold rounded-2xl bg-black/40 shadow-lg"
                >
                  {secondaryCtaLabel}
                </Button>
              </motion.div>
            )}
          </motion.div>

          {features.length > 0 && (
            <motion.div className="pt-10 sm:pt-14" variants={itemVariants}>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                <Card className="bg-black/50 border-white/15 backdrop-blur-xl shadow-2xl max-w-4xl mx-auto rounded-2xl overflow-hidden">
                  <div className="p-6 sm:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {features.map((feature, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center justify-center text-center p-2 rounded-xl bg-white/[0.02]"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.6,
                            delay: 0.6 + index * 0.1,
                          }}
                        >
                          <p className="text-white font-medium text-base sm:text-lg tracking-wide">
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
