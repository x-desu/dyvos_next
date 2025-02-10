"use client"; // ✅ Needed for useState and useEffect

import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section6 from "./components/Section6";
import Footer from "./components/Footer";
import Loading from "./loading";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1500); // Show for 1 second
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <Loading />;
  }

  return (
    <>
      <Hero />
      <Section />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section6 />
      <Footer />
    </>
  );
}
