"use client";

import React, { useMemo, useRef } from "react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import { useDimensions } from "@/hooks/use-debounced-dimensions";

interface AnimatedGradientProps {
  colors: string[];
  speed?: number;
  blur?: "light" | "medium" | "heavy";
}

const generateRandomValues = () => {
  return {
    top: `${Math.random() * 50}%`,
    left: `${Math.random() * 50}%`,
    tx1: Math.random() - 0.5,
    ty1: Math.random() - 0.5,
    tx2: Math.random() - 0.5,
    ty2: Math.random() - 0.5,
    tx3: Math.random() - 0.5,
    ty3: Math.random() - 0.5,
    tx4: Math.random() - 0.5,
    ty4: Math.random() - 0.5,
  };
};

const AnimatedGradientComponent: React.FC<AnimatedGradientProps> = ({
  colors,
  speed = 5,
  blur = "light",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dimensions = useDimensions(containerRef);

  const circleSize = useMemo(
    () => Math.max(dimensions.width, dimensions.height),
    [dimensions.width, dimensions.height]
  );

  const blurClass =
    blur === "light"
      ? "blur-2xl"
      : blur === "medium"
      ? "blur-3xl"
      : "blur-[100px]";

  const randomValues = useMemo(
    () => colors.map(() => generateRandomValues()),
    [colors]
  );

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <div className={cn(`absolute inset-0`, blurClass)}>
        {colors.map((color, index) => (
          <svg
            key={index}
            className="absolute animate-background-gradient will-change-transform"
            style={
              {
                top: randomValues[index].top,
                left: randomValues[index].left,
                "--background-gradient-speed": `${1 / speed}s`,
                "--tx-1": randomValues[index].tx1,
                "--ty-1": randomValues[index].ty1,
                "--tx-2": randomValues[index].tx2,
                "--ty-2": randomValues[index].ty2,
                "--tx-3": randomValues[index].tx3,
                "--ty-3": randomValues[index].ty3,
                "--tx-4": randomValues[index].tx4,
                "--ty-4": randomValues[index].ty4,
              } as React.CSSProperties
            }
            width={circleSize * 1.2}
            height={circleSize * 1.2}
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="50" fill={color} />
          </svg>
        ))}
      </div>
    </div>
  );
};

const AnimatedGradient = dynamic(
  () => Promise.resolve(AnimatedGradientComponent),
  {
    ssr: false,
  }
);

export default AnimatedGradient;
