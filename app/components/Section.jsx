"use client";

import AnimateNum from "@/app/components/AnimateNum";
import { useScroll, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";

const Section = () => {
  const snapRef = useRef();
  const componentRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: componentRef,
    offset: ["start end", "end center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 0], { clamp: false });
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  return (
    <motion.div
      ref={componentRef}
      style={{ y, opacity }}
      className="bg-[#1e465f]  p-8 flex flex-col items-center justify-center relative z-20 py-28 h-full"
    >
      <h3 className="font-bold text-black tracking-widest">HELLO THERE</h3>
      <h1 className="font-semibold text-5xl  text-white py-4">We Are Dyvos</h1>
      <hr className="w-96 h-[1px]  my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700" />
      <p className="max-h-64 my-4 line-clamp-6 tracking-wide leading-relaxed text-xl text-center text-black font-lora max-w-6xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
      </p>

      <div className="flex gap-4">
        <div className="flex flex-col gap-8 justify-center items-center ">
          <div className="flex flex-col gap-4  items-center justify-center tracking-wider ">
            <h1 className="text-5xl sm:text-7xl text-center font-bold text-white">
              <AnimateNum value={127} />
            </h1>
            <p className="text-black  font-semibold">Awards Received</p>
          </div>
          {/* <hr className="w-[1px] h-36 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700" /> */}
          <div className="flex flex-col gap-4 items-center justify-center  tracking-wider ">
            <h1 className="text-5xl sm:text-7xl text-center font-bold text-white w-40">
              <AnimateNum value={1505} />
            </h1>
            <p className="text-black font-semibold">Cups of Coffee</p>
          </div>
        </div>

        <hr className="w-[1px] h-64 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700" />
        <div className="flex flex-col gap-8 justify-center items-center ">
          <div className="flex flex-col gap-4 items-center justify-center  tracking-wider ">
            <h1 className="text-5xl sm:text-7xl text-center font-bold text-white">
              <AnimateNum value={109} />
            </h1>
            <p className="text-black font-semibold">Projects Done</p>
          </div>
          {/* <hr className="w-[1px] h-36 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700" /> */}
          <div className="flex flex-col gap-4 items-center justify-center tracking-wider ">
            <h1 className="text-5xl sm:text-7xl text-center font-bold text-white  w-40">
              {" "}
              <AnimateNum value={102} />
            </h1>
            <p className="text-black font-semibold">Happy Clients</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Section;
