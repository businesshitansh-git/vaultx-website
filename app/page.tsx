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
      {/* Zero-cost radial gradient ambient lighting - 90+ FPS optimized */}
      <div
        className="fixed top-1/4 -left-32 w-[450px] h-[450px] rounded-full pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(circle, rgba(14, 165, 233, 0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="fixed top-2/3 -right-32 w-[450px] h-[450px] rounded-full pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%)",
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
