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
      <div className="h-screen bg-base-200">
        {/* Parallax Hero Section */}
        <div className="relative h-96 sm:h-1/3 bg-fixed bg-center bg-cover">
          <div className="hidden sm:block">
            <video
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              src="/video.mp4"
              autoPlay
              loop
              muted
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
            <h1 className="text-white text-4xl font-bold">About Dyvos</h1>
          </div>
        </div>

        {/* About Content Section */}
        <section className="py-12 text-center bg-neutral-950 text-stone-100 px-8 lg:px-4">
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            At Dyvos, we’re more than just a service provider. We’re a team of
            dedicated professionals committed to supporting your business at
            every step. Whether it’s managing financial operations or scaling
            your growth, we are here to help.
          </p>
        </section>

        {/* Parallax Vision Section */}
        <div className="relative h-80 sm:h-1/3 bg-fixed bg-center bg-cover">
          <div className="hidden sm:block">
            <video
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              src="/video.mp4"
              autoPlay
              loop
              muted
            />
          </div>
          <div className="block sm:hidden">
            <Image
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              src="/about.png"
              alt="Our Vision"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <h2 className="text-white text-3xl font-bold">Our Vision</h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
