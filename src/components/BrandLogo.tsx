import React from "react";
import { ThemeMode } from "../types";

interface BrandLogoProps {
  theme?: ThemeMode;
  variant?: "full" | "mark-only" | "stacked";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  theme = "warm-light",
  variant = "full",
  size = "md",
  className = "",
}) => {
  // Size configurations
  const markDimensions = {
    sm: { w: 26, h: 26, stroke: 2.2 },
    md: { w: 34, h: 34, stroke: 2.5 },
    lg: { w: 46, h: 46, stroke: 3.0 },
    xl: { w: 72, h: 72, stroke: 4.0 },
  }[size];

  const logoWidth = {
    sm: 142,
    md: 190,
    lg: 250,
    xl: 360,
  }[size];

  if (variant === "mark-only") {
    return (
      <div
        className={`inline-flex overflow-hidden select-none ${className}`}
        style={{ width: markDimensions.w, height: markDimensions.h }}
      >
        <img
          src="/logo1.png"
          alt="DX Studio"
          className="h-full max-w-none object-contain object-left"
          style={{ width: logoWidth }}
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <img
        src="/logo1.png"
        alt="DX Studio"
        width={logoWidth}
        className="h-auto object-contain"
      />
    </div>
  );
};
