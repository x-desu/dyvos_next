"use client";

import Image from "next/image";
// import { motion } from "motion/react";
export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-black ">
      <Image src="/opengraph-image.gif" alt="logo" width={150} height={150} />
      <div className="h-4" />

      {/* Animated Bars */}
      {/* <div className="flex gap-2 items-center">
        {[
          { height: "h-4", delay: 0 }, // Left (Small)
          { height: "h-8", delay: 0.2 }, // Middle (Big)
          { height: "h-4", delay: 0.4 }, // Right (Small)
        ].map((bar, i) => (
          <motion.div
            key={i}
            className={`w-2 ${bar.height} bg-sky-800 rounded-full`}
            initial={{ x: 0, opacity: 0.5 }}
            animate={{ x: [-0.5, 1, -0.5], opacity: [0.5, 1, 0.5] }} // Wave + Fade effect
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: bar.delay, // Staggered animation
            }}
          />
        ))}
      </div> */}
    </div>
  );
}
