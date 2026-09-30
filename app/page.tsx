"use client";

import React, { useState } from "react";
import SiteHeader from "@/components/site-header";
import LiquidMetalHero from "@/components/ui/liquid-metal-hero";
import VaultXLogo from "@/components/vaultx-logo";
import FeaturesSection from "@/components/features-section";
import PlatformsSection from "@/components/platforms-section";
import DownloadDialog from "@/components/download-dialog";
import SiteFooter from "@/components/site-footer";
import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <main className="relative min-h-screen text-white selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Sticky Header with Frosted Glass */}
      <SiteHeader onOpenDownload={() => openDownloadModal("android")} />

      {/* Hero Section with Silky Liquid Metal Canvas & Glass Cards */}
      <LiquidMetalHero
        badge="✨ Next-Generation Security Vault"
        title="VAULT X"
        subtitle="Uncompromising privacy meets fluid liquid-metal aesthetics. The ultimate encrypted vault for your passwords, private keys, and digital life."
        primaryCtaLabel="Download App"
        secondaryCtaLabel="Launch Web App"
        onPrimaryCtaClick={() => openDownloadModal("android")}
        onSecondaryCtaClick={handleLaunchWebApp}
        features={[
          "Zero-Knowledge Encryption",
          "Fluid Liquid Aesthetics",
          "Cross-Platform Sync",
        ]}
      >
        {/* Sleek Liquid Glass V Emblem */}
        <motion.div
          className="flex justify-center my-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <VaultXLogo size={76} showText={false} />
        </motion.div>
      </LiquidMetalHero>

      {/* Features & What is VaultX Section */}
      <FeaturesSection onOpenDownload={() => openDownloadModal("android")} />

      {/* Platforms & Direct Download Section */}
      <PlatformsSection onOpenIosGuide={() => openDownloadModal("ios")} />

      {/* Quick Launch Callout Banner */}
      <section className="relative py-20 px-6 max-w-5xl mx-auto text-center z-10">
        <div className="relative rounded-3xl p-10 sm:p-14 bg-white/[0.04] border border-white/15 backdrop-blur-2xl shadow-[0_10px_50px_rgba(0,0,0,0.5)] overflow-hidden">
          <div className="relative z-10 space-y-6">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to Experience Liquid Security?
            </h3>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light">
              Experience the speed and security of VaultX. Zero setup fees, zero tracker scripts, and full encryption out of the box.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
              <Button
                onClick={() => openDownloadModal("android")}
                size="lg"
                className="bg-white hover:bg-slate-200 text-slate-950 font-bold px-8 py-6 rounded-2xl shadow-xl flex items-center gap-2 group text-base"
              >
                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                <span>Get App for Device</span>
              </Button>

              <Button
                onClick={handleLaunchWebApp}
                variant="outline"
                size="lg"
                className="border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-6 rounded-2xl backdrop-blur-md flex items-center gap-2 text-base"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Open in Browser</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Hitansh Andraskar credits */}
      <SiteFooter />

      {/* Download Modal Dialog */}
      <DownloadDialog
        isOpen={downloadOpen}
        onClose={() => setDownloadOpen(false)}
        defaultPlatform={initialPlatform}
      />
    </main>
  );
}
