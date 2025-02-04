"use client";
import { motion, useAnimation, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const [displayNumber, setDisplayNumber] = useState(0);

  useEffect(() => {
    if (isInView) {
      controls.start({
        number: value,
        transition: { duration: 2, ease: "easeOut" },
      });
    }
  }, [isInView, controls, value]);

  return (
    <motion.span
      ref={ref}
      animate={controls}
      initial={{ number: 0 }}
      onUpdate={(latest) => setDisplayNumber(Math.round(latest.number))}
    >
      {displayNumber}
    </motion.span>
  );
};

export default AnimatedNumber;
