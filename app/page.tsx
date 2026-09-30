"use client";

import React, { useState } from "react";
import SiteHeader from "@/components/site-header";
import LiquidMetalHero from "@/components/ui/liquid-metal-hero";
import FeaturesSection from "@/components/features-section";
import PlatformsSection from "@/components/platforms-section";
import DownloadDialog from "@/components/download-dialog";
import SiteFooter from "@/components/site-footer";

export default function HomePage() {
  const [downloadOpen, setDownloadOpen] = useState(false);
  const [initialPlatform, setInitialPlatform] = useState<"android" | "ios" | "windows">("android");

  const openDownloadModal = (platform: "android" | "ios" | "windows" = "android") => {
    setInitialPlatform(platform);
    setDownloadOpen(true);
  };

  const handleLaunchWebApp = () => {
    window.open("https://vaultx-by-hitansh.netlify.app/", "_blank");
  };

  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white/20 selection:text-white overflow-hidden">
      {/* Top Header Liquid Glass Refraction Backlight */}
      <div
        className="fixed top-0 inset-x-0 h-44 pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(ellipse 90% 120% at 50% -20%, rgba(56, 189, 248, 0.35), rgba(99, 102, 241, 0.28), transparent 75%)",
        }}
      />
      {/* Zero-cost ambient lighting layers that illuminate all sections on scroll */}
      <div
        className="fixed top-0 left-1/4 w-[750px] sm:w-[950px] h-[650px] sm:h-[850px] rounded-full pointer-events-none -z-10 opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(99, 102, 241, 0.28) 0%, rgba(14, 165, 233, 0.15) 45%, transparent 75%)",
          transform: "translate3d(0,0,0)",
        }}
      />
      <div
        className="fixed top-1/4 -left-36 w-[650px] sm:w-[850px] h-[650px] sm:h-[850px] rounded-full pointer-events-none -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(168, 85, 247, 0.22) 0%, rgba(59, 130, 246, 0.14) 45%, transparent 75%)",
          transform: "translate3d(0,0,0)",
        }}
      />
      <div
        className="fixed top-1/2 -right-36 w-[700px] sm:w-[900px] h-[700px] sm:h-[900px] rounded-full pointer-events-none -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, rgba(14, 165, 233, 0.15) 45%, transparent 75%)",
          transform: "translate3d(0,0,0)",
        }}
      />
      <div
        className="fixed bottom-0 left-1/4 w-[800px] sm:w-[1000px] h-[600px] sm:h-[800px] rounded-full pointer-events-none -z-10 opacity-50"
        style={{
          background:
            "radial-gradient(circle, rgba(99, 102, 241, 0.22) 0%, rgba(168, 85, 247, 0.14) 45%, transparent 75%)",
          transform: "translate3d(0,0,0)",
        }}
      />

      {/* Top Header */}
      <SiteHeader onOpenDownload={() => openDownloadModal("android")} />

      {/* Hero Section with Moving 3D Liquid Metal Sphere that stays visible on scroll */}
      <LiquidMetalHero
        badge="✨ Next-Generation Security Vault"
        title="VaultX Digital Fortress"
        subtitle="The fluid, zero-knowledge personal security vault engineered to safeguard your passwords, private notes, and digital life. Total privacy, absolute sovereignty."
        primaryCtaLabel="Download VaultX"
        secondaryCtaLabel="Launch Web App"
        onPrimaryCtaClick={() => openDownloadModal("android")}
        onSecondaryCtaClick={handleLaunchWebApp}
        features={[
          "Zero-Knowledge Privacy",
          "Made By Hitansh",
          "Cross-Platform Sync",
        ]}
      />

      {/* Product Details & What is VaultX */}
      <FeaturesSection onOpenDownload={() => openDownloadModal("android")} />

      {/* Multi-Platform Download Section */}
      <PlatformsSection onOpenIosGuide={() => openDownloadModal("ios")} />

      {/* Footer with Hitansh Andraskar credits */}
      <SiteFooter />

      {/* Multi-Platform Download Dialog */}
      <DownloadDialog
        isOpen={downloadOpen}
        onClose={() => setDownloadOpen(false)}
        defaultPlatform={initialPlatform}
      />
    </main>
  );
}
