"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    text: "This website is amazing! I found exactly what I needed.",
    name: "Alex T.",
    image: "https://i.pravatar.cc/100?img=7", // Replace with actual image
  },
  {
    text: "Highly recommend! The user interface is super easy to navigate.",
    name: "Mia S.",
    image: "https://i.pravatar.cc/100?img=27",
  },
  {
    text: "An excellent platform for finding quality products.",
    name: "Rahul K.",

    image: "https://i.pravatar.cc/100?img=12",
  },
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full max-w-4xl mx-auto p-4 sm:p-6  rounded-lg  relative">
      {/* Left Arrow */}
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2"
        onClick={prevSlide}
      >
        <ArrowLeft className="w-6 h-6 text-gray-300 hover:text-black transition" />
      </button>

      {/* Testimonial Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="text-center py-16"
        >
          <p className="text-gray-200 text-base sm:text-lg italic">
            {testimonials[index].text}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Profile */}
      <div className="sm:mt-6 flex flex-col items-center">
        <motion.img
          key={testimonials[index].image}
          src={testimonials[index].image}
          alt={testimonials[index].name}
          className="sm:w-16 sm:h-16 w-10 h-10 rounded-full"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <h3 className="mt-2 font-semibold text-gray-400">
          {testimonials[index].name}
        </h3>
        <p className="text-gray-400 text-sm">{testimonials[index].role}</p>
      </div>

      {/* Right Arrow */}
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2"
        onClick={nextSlide}
      >
        <ArrowRight className="w-6 h-6 text-gray-300 hover:text-black transition" />
      </button>
    </div>
  );
};

export default Carousel;
