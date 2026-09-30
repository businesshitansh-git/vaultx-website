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
      {/* Ambient background blur lights to eliminate harsh black spots across the site */}
      <div className="fixed top-1/4 -left-32 w-96 h-96 bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed top-2/3 -right-32 w-96 h-96 bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-10 left-1/3 w-80 h-80 bg-violet-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

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
