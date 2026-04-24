"use client";

import Image from "next/image";
import { publicAsset } from "@/lib/assetUrl";

type Size = "sm" | "md" | "lg";

const sizeClass: Record<Size, string> = {
  /* Navbar — largura dominante (logo horizontal) */
  sm: "h-auto w-auto max-w-[220px] object-contain object-left sm:max-w-[260px] md:max-w-[280px]",
  /* Rodapé */
  md: "h-auto w-auto max-w-[260px] object-contain object-left sm:max-w-[300px] md:max-w-[340px]",
  /* Hero */
  lg: "h-auto w-auto max-w-[min(92vw,320px)] object-contain object-left sm:max-w-[400px] md:max-w-[460px] lg:max-w-[500px]",
};

type Props = {
  className?: string;
  priority?: boolean;
  size?: Size;
};

export function BrandLogo({
  className = "",
  priority = false,
  size = "md",
}: Props) {
  return (
    <a
      href="#topo"
      className={`block shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-mustard/50 focus-visible:ring-offset-2 focus-visible:ring-offset-cream ${className}`}
    >
      <Image
        src={publicAsset("/logo-marca.png")}
        alt="Tayane — Direção Criativa"
        width={520}
        height={145}
        className={sizeClass[size]}
        priority={priority}
        sizes="(max-width: 640px) 260px, (max-width: 1024px) 340px, 500px"
      />
    </a>
  );
}
