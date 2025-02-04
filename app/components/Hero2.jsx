"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Hero2 = () => {
  const vidRef = useRef(null);

  useEffect(() => {
    const video = vidRef.current;
    if (!video) return;

    video.addEventListener("loadedmetadata", () => {
      const duration = video.duration || 1; // Prevent issues if duration is unavailable

      gsap.to(video, {
        currentTime: duration, // Animate video playback as user scrolls
        ease: "none",
        scrollTrigger: {
          trigger: "#video",
          start: "top+=24rem top",
          end: "bottom top",
          scrub: 1, // Sync video progress with scroll
          pin: true, // Keep video fixed while scrolling
        },
      });

      ScrollTrigger.refresh(); // Ensures GSAP correctly initializes
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Cleanup on unmount
    };
  }, []);

  return (
    <div className="h-screen w-full overflow-hidden -mt-24">
      <video
        className="w-full h-screen object-cover will-change-transform"
        ref={vidRef}
        src="/vid.mp4"
        preload="auto"
        playsInline
        muted
        id="video"
      ></video>
    </div>
  );
};
export default Hero2;
