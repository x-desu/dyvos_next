"use client";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

const Hero = () => {
  const heroRef = useRef(null);
  const scrollY = useRef(0);
  const scrollToSection = () => {
    document
      .getElementById("target-project")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSection2 = () => {
    document
      .getElementById("target-about")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  // 1. Set up Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    const handleScroll = ({ scroll }) => {
      scrollY.current = scroll;
    };

    lenis.on("scroll", handleScroll);

    const resetScroll = () => {
      lenis.scrollTo(0); // Scroll to the top on load
    };

    resetScroll(); // Call it immediately after lenis setup

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // 2. Create parallax effects using Lenis scroll position
  const backgroundY = useTransform(
    () => scrollY.current * 0.3 // Background moves at 30% scroll speed
  );

  const contentY = useTransform(
    () => scrollY.current * 0.1 // Content moves at 10% scroll speed
  );

  return (
    <motion.section
      ref={heroRef}
      className="relative h-screen w-full pt-24"
      style={{
        y: contentY, // Move content downward on scroll
      }}
    >
      {/* Parallax Background Image */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          y: backgroundY,
          scale: 1.1, // Compensate for movement
        }}
      >
        <Image
          src="/pexelsbg3.jpg"
          fill
          alt="Dyvos"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div
        className="relative flex flex-col px-8 sm:px-24 h-full justify-center items-start text-gray-200 z-10 "
        id="hero"
      >
        <h1 className="tracking-widest text-base sm:text-lg py-4 px-1">
          WELCOME TO DYVOS
        </h1>
        <p className="font-medium text-3xl md:text-5xl lg:text-6xl leading-snug lg:leading-normal lg:tracking-wider max-w-xs sm:max-w-2xl lg:max-w-4xl">
          We are a creative group of people who design influential brands and
          digital experiences.
        </p>
        <div className="flex gap-8 mt-24">
          <button
            onClick={scrollToSection}
            className="px-3 py-1.5 sm:px-6 sm:py-2 text-base border-2 tracking-wide font-medium border-white hover:bg-white hover:text-black cursor-pointer"
          >
            START A PROJECT
          </button>
          <button
            onClick={scrollToSection2}
            className="px-3 py-1.5 sm:px-6 sm:py-2 text-base border-2 tracking-wide font-medium border-white hover:bg-white hover:text-black"
          >
            MORE ABOUT US
          </button>
        </div>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 opacity-60 pointer-events-none" />
    </motion.section>
  );
};

export default Hero;
