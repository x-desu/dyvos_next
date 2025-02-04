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
      <p className="max-h-64  my-8 lg:text-3xl lg:max-w-7xl line-clamp-6 tracking-wide leading-relaxed text-xl text-center text-black font-lora max-w-6xl">
        At DYVOS, we provide AI-driven solutions that enhance efficiency, secure
        data, and streamline operations. Our intelligent CMS platforms,
        reporting tools, and collaboration systems empower healthcare
        professionals to optimize workflows and improve outcomes. As a new
        company, we bring fresh ideas and cutting-edge technology to
        revolutionize healthcare, ensuring smarter, more effective solutions for
        the future.
      </p>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-8 justify-center items-center ">
          {/*
          <div className="flex flex-col gap-4  items-center justify-center tracking-wider ">
            <h1 className="text-5xl sm:text-7xl text-center font-bold text-white">
              <AnimateNum value={127} />
            </h1>
            <p className="text-black  font-semibold">Awards Received</p>
          </div> */}
          {/* <hr className="w-[1px] h-36 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700" /> */}
          <div className="flex flex-col gap-4 items-center justify-center  tracking-wider ">
            <h1 className="text-5xl sm:text-7xl text-center font-bold text-white w-40">
              <AnimateNum value={109} />
            </h1>
            <p className="text-black font-semibold">Projects Done</p>
          </div>
        </div>

        {/* <hr className="w-64 h-[1px] mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700" /> */}
        <div className="flex  gap-8 justify-center items-center ">
          <div className="flex flex-col gap-4 items-center justify-center  tracking-wider ">
            <h1 className="text-5xl sm:text-7xl text-center font-bold text-white">
              <AnimateNum value={1505} />
            </h1>
            <p className="text-black font-semibold">Cups of Coffee</p>
          </div>
          <hr className="w-[1px] h-36 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700" />
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
