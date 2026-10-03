import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "VaultX | The Fluid Digital Vault by Hitansh Andraskar",
  description:
    "Secure your passwords, credentials, and digital assets with military-grade zero-knowledge encryption and fluid liquid-metal aesthetics. Available on Android, iPhone, and Windows.",
  keywords: [
    "VaultX",
    "Password Manager",
    "Encrypted Vault",
    "Zero Knowledge",
    "Hitansh Andraskar",
    "Security",
    "Android APK",
    "iOS PWA",
  ],
  authors: [{ name: "Hitansh Andraskar" }],
  openGraph: {
    title: "VaultX — Fluid Security. Total Privacy.",
    description:
      "Next-generation digital security vault designed & developed by Hitansh Andraskar.",
    url: "https://vaultx-by-hitansh.vercel.app/",
    siteName: "VaultX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
