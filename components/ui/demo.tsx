"use client";

import MetallicButton from "@/components/ui/metallic-button";

const settings = {
  label: "Get Started",
  viewMode: "text",
  baseColor: "#000000",
  sheenColor: "#ffffff",
  bandCount: 4,
  edgeBlur: 0.5,
  flowAngle: 45,
  zoom: 8,
  warp: 0,
  redFringe: 0.3,
  blueFringe: 0.3,
  idleSpeed: 0.6,
  hoverSpeed: 1,
  clickSpeed: 2.4,
};

export default function MetallicButtonDemo(props: Partial<typeof settings>) {
  const s = { ...settings, ...props };
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-background">
      <MetallicButton
        label={s.label}
        viewMode={s.viewMode as "text" | "icon"}
        baseColor={s.baseColor}
        sheenColor={s.sheenColor}
        bandCount={s.bandCount}
        edgeBlur={s.edgeBlur}
        flowAngle={s.flowAngle}
        zoom={s.zoom}
        warp={s.warp}
        redFringe={s.redFringe}
        blueFringe={s.blueFringe}
        idleSpeed={s.idleSpeed}
        hoverSpeed={s.hoverSpeed}
        clickSpeed={s.clickSpeed}
      />
    </main>
  );
}
