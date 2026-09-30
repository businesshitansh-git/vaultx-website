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
      {/* 90+ FPS Zero-cost ambient lighting layers to eliminate black spots and voids */}
      <div
        className="fixed top-0 left-1/4 w-[750px] h-[650px] rounded-full pointer-events-none -z-10 opacity-70 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(99, 102, 241, 0.22) 0%, rgba(14, 165, 233, 0.15) 45%, transparent 70%)",
        }}
      />
      <div
        className="fixed top-1/3 -left-48 w-[650px] h-[650px] rounded-full pointer-events-none -z-10 opacity-60 blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, rgba(168, 85, 247, 0.18) 0%, rgba(59, 130, 246, 0.12) 50%, transparent 70%)",
        }}
      />
      <div
        className="fixed top-2/3 -right-48 w-[700px] h-[700px] rounded-full pointer-events-none -z-10 opacity-60 blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.16) 0%, rgba(14, 165, 233, 0.15) 45%, transparent 70%)",
        }}
      />
      <div
        className="fixed bottom-0 left-1/3 w-[800px] h-[600px] rounded-full pointer-events-none -z-10 opacity-50 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(99, 102, 241, 0.18) 0%, rgba(168, 85, 247, 0.12) 50%, transparent 70%)",
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
          "Military AES-256 Encryption",
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
