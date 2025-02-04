"use client";
import LogoWall from "@/app/ui/LogoWall";
import Carousel from "@/app/components/Carousel";
import GradientText from "@/app/ui/GradientText";
const logoImgs = [
  { imgUrl: "/logo.jpeg", altText: "Dyvos Logo" },
  { imgUrl: "/logo.jpeg", altText: "Dyvos Logo" },
  { imgUrl: "/logo.jpeg", altText: "Dyvos Logo" },
  { imgUrl: "/logo.jpeg", altText: "Dyvos Logo" },
  { imgUrl: "/logo.jpeg", altText: "Dyvos Logo" },
  { imgUrl: "/logo.jpeg", altText: "Dyvos Logo" },
  { imgUrl: "/logo.jpeg", altText: "Dyvos Logo" },
];
const Section4 = () => {
  return (
    <div className="h-screen mt-16 py-16 px-12 sm:px-24 " id="clients">
      <div className=" flex flex-col items-center justify-center">
        <h3 className="mb-4 text-base tracking-widest text-sky-500 font-semibold">
          Dyvos
        </h3>
        <h1 className="text-center tracking-wider leading-snug text-2xl sm:text-4xl font-medium">
          Innovative AI Solutions Tailored for Healthcare Needs
        </h1>
        <div className="flex w-full items-center justify-center mb-8">
          <div className="sm:max-w-3xl max-w-sm">
            <LogoWall
              items={logoImgs}
              direction="horizontal"
              pauseOnHover={true}
              size="clamp(4rem, 4rem + 15vmin, 25rem)"
              duration="30s"
              bgColor="#1d232a"
              bgAccentColor="#1d232a"
            />
          </div>
        </div>
        <hr className="w-full h-[1px] mx-auto my-4  bg-gray-100 border-0 rounded-sm  dark:bg-gray-700" />
        <Carousel />
      </div>
      <div className="absolute right-1/2 translate-x-1/2">
        <hr className="w-[2px] h-[104px] mx-auto  mb-4 bg-sky-500 border-0 rounded-sm  dark:bg-sky-700" />
        <GradientText
          colors={["#40f2ff", "#3370ff", "#40b9ff", "#2867fa", "#40ff90"]}
          animationSpeed={10}
          showBorder={false}
          className="custom-class"
        >
          Contact us
        </GradientText>
      </div>
    </div>
  );
};
export default Section4;
