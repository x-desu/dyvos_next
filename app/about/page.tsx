import { Metadata } from "next";
import Image from "next/image";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About Dyvos Tech",
  description: "Learn more about Dyvos Tech and our mission to innovate.",
};

const AboutPage = () => {
  return (
    <>
      <div className="bg-base-200">
        {/* Parallax Hero Section */}
        <div className="relative h-[50vh] lg:h-[70vh] bg-fixed bg-center bg-cover">
          <div className="hidden sm:block">
            <Image
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              src="/about.png"
              alt="About Dyvos"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <div className="block sm:hidden">
            <Image
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              src="/about.png"
              alt="About Dyvos"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <h1 className="text-white text-5xl lg:text-6xl font-bold">About Dyvos</h1>
          </div>
        </div>

        {/* About Content Section */}
        <section className="py-20 lg:py-32 text-center bg-neutral-950 text-stone-100 px-8 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">Who We Are</h2>
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
              At Dyvos, we're more than just a service provider. We're a team of
              dedicated professionals committed to supporting your business at
              every step. Whether it's managing financial operations or scaling
              your growth, we are here to help.
            </p>
          </div>
        </section>

        {/* Parallax Vision Section */}
        <div className="relative h-[50vh] lg:h-[70vh] bg-fixed bg-center bg-cover">
          <Image
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            src="/about.png"
            alt="Our Vision"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <h2 className="text-white text-4xl lg:text-5xl font-bold">Our Vision</h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
