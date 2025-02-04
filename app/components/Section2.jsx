"use client";
import Spline from "@splinetool/react-spline/next";
import dynamic from "next/dynamic";
import { PaintbrushVertical } from "lucide-react";
import { Bot, Power, GraduationCap, Brain } from "lucide-react";
import Typewriter from "@/components/fancy/typewriter";
const AnimationGradient = dynamic(
  () => import("@/components/fancy/AnimationGradient"),
  {
    ssr: false,
  }
);

const Section2 = () => {
  const colors = ["#0f4563", "#257688", "#25829c", "#000000"];
  return (
    <div id="target-about" className=" w-full h-full py-4 sm:py-16 relative ">
      <AnimationGradient
        colors={colors}
        speed={0.05}
        blur="light"
        className="absolute inset-0 z-0"
      />

      {/* <div className="absolute top-20 h-full w-full  z-0 pointWer-events-none">
        <Spline
          className="w-full h-full object-cover"
          scene="https://prod.spline.design/pxFQQeBdVnFNwV8o/scene.splinecode"
        />
      </div> */}
      {/* <div className="w-64 h-24 absolute bg-[#1d232a] -bottom-16 right-0"></div> */}
      <div className="sm:py-24 py-16 px-8 sm:px-16  relative z-10">
        <div className="flex flex-col  items-center justify-center">
          <h3 className="mb-4 text-base tracking-widest text-sky-500 font-semibold">
            WHAT WE DO
          </h3>
          <h1 className="text-center tracking-wider leading-snug text-2xl sm:text-4xl font-medium whitespace-pre-wrap ">
            <span className="">
              {`We’ve`} got everything you need to launch and grow your
            </span>
            <Typewriter
              text={[" business", " enterprise", " apps/web"]}
              speed={150}
              className=""
              initialDelay={10}
              waitTime={1500}
              deleteSpeed={150}
              cursorChar={"_"}
            />
          </h1>
        </div>
        <hr className="w-80 mx-auto h-[1px] my-8 bg-gray-100  rounded-sm md:my-10 dark:bg-gray-700" />
        <div className="grid grid-cols-2 grid-rows-2 place-items-center gap-4 justify-center gap-y-12 sm:gap-y-24 ">
          <div className="flex gap-4 items-start max-w-2xl ">
            <Bot
              strokeWidth={3}
              size={64}
              className="sm:w-44 w-96 -mt-3 sm:-mt-4"
            />
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-semibold">AI in Diagnosis</h3>
              <p className="text-base  xl:text-4xl  line-clamp-6 ">
                Leveraging AI for early and accurate diagnosis, improving
                patient outcomes through advanced imaging and predictive
                analytics.
              </p>
            </div>
          </div>

          <div className="flex gap-4 max-w-2xl items-start">
            <Power
              strokeWidth={3}
              size={64}
              className="sm:w-44 w-96 -mt-3 sm:-mt-4"
            />
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl  font-semibold line-clamp-2">
                AI-Enabled CMS
              </h3>
              <p className="text-base  xl:text-4xl line-clamp-6">
                Streamline healthcare operations with AI-powered Content
                Management Systems for efficient record-keeping and data
                insights.
              </p>
            </div>
          </div>

          <div className="flex gap-4 max-w-2xl items-start">
            <GraduationCap
              strokeWidth={3}
              size={64}
              className="sm:w-44 w-96 -mt-3 sm:-mt-4"
            />
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-semibold line-clamp-2">
                Cross-Training Solutions
              </h3>
              <p className="text-base xl:text-4xl line-clamp-6">
                Equip healthcare professionals with AI-driven tools and training
                for adapting to evolving technologies and practices.
              </p>
            </div>
          </div>

          <div className="flex gap-4 max-w-2xl items-start">
            <Brain
              size={64}
              strokeWidth={3}
              className="sm:w-44 w-96 -mt-3 sm:-mt-4"
            />
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-semibold line-clamp-2">
                Health care Tech
              </h3>
              <p className="text-base xl:text-4xl line-clamp-6">
                Integrating cutting-edge healthcare technologies for smarter and
                more efficient patient care delivery systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section2;
