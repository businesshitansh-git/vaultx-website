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
    <main className="relative min-h-screen bg-black text-white selection:bg-white/20 selection:text-white">
      {/* Top Header */}
      <SiteHeader onOpenDownload={() => openDownloadModal("android")} />

      {/* Hero Section - Matching 21st.dev liquid metal sphere hero */}
      <LiquidMetalHero
        badge="✨ Next Generation UI"
        title="Fluid Design Excellence"
        subtitle="Experience the future of web interfaces with liquid metal aesthetics that adapt, flow, and captivate. Built for modern applications that demand both beauty and performance."
        primaryCtaLabel="Start Building"
        secondaryCtaLabel="View Examples"
        onPrimaryCtaClick={() => openDownloadModal("android")}
        onSecondaryCtaClick={handleLaunchWebApp}
        features={[
          "Seamless Animations",
          "Responsive Excellence",
          "Modern Architecture",
        ]}
      />

      {/* Product Information & What is VaultX */}
      <FeaturesSection onOpenDownload={() => openDownloadModal("android")} />

      {/* Platform Download Hub */}
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
