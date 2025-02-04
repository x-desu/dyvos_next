"use client";
import GradientText from "@/app/ui/GradientText";
import Form from "next/form";
import RotatingText from "@/app/ui/RotatingText";
import { submitForm } from "@/utils/actions";
import { useFormStatus } from "react-dom";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
export function FormButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="hover:scale-105 duration-300 active:scale-95"
    >
      <GradientText
        colors={["#40f2ff", "#bfd2ff", "#206e9b", "#2867fa", "#002077"]}
        animationSpeed={12}
        showBorder={true}
        className="custom-class w-full px-4 py-2"
      >
        {pending ? "Submitting..." : "Submit"}
      </GradientText>
    </button>
  );
}

const ContactForm = () => {
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const { pending } = useFormStatus();

  const handleSubmit = async (formData) => {
    if (!formData) return;

    try {
      const response = await submitForm(formData);
      setMessage(response);
      toast("Email sent", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } catch (err) {
      toast("Error", {
        icon: "",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      setError("Failed to submit the form. Please try again.");
    }
  };
  console.log(error);
  return (
    <div className="bg-black/5 text-white py-12 px-4 md:px-6 lg:px-12 w-full  rounded-xl">
      <div className="sm:max-w-5xl mx-auto grid md:grid-cols-2 gap-10 ">
        {/* Left: Contact Form */}
        <div className="">
          <h3 className="text-2xl font-bold flex items-center gap-2 tracking-wider text-white mb-6">
            Send us
            <RotatingText
              texts={["a Message", "your info", "anything", "your needs"]}
              mainClassName="px-2 bg-transparent sm:px-2 md:px-3  text-white overflow-hidden py-0.5 sm:py-1 md:py-1 justify-center rounded-2xl"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={5000}
            />
          </h3>
          <Form
            action={handleSubmit}
            className="space-y-4 flex flex-col gap-2 mt-8"
          >
            <input
              required
              type="text"
              placeholder="Your Name"
              name="name"
              className="w-full bg-transparent border-b border-gray-500 text-white p-2 focus:outline-none focus:border-green-500"
            />

            <input
              required
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full bg-transparent border-b border-gray-500 text-white p-2 focus:outline-none focus:border-green-500"
            />

            <input
              required
              type="text"
              placeholder="Subject"
              name="subject"
              className="w-full bg-transparent border-b border-gray-500 text-white p-2 focus:outline-none focus:border-green-500"
            />

            <textarea
              required
              placeholder="Your Message"
              name="message"
              className="w-full min-h-48 bg-transparent border-b border-gray-500 text-white p-2 focus:outline-none focus:border-green-500 h-24"
            ></textarea>

            <FormButton />
          </Form>
        </div>
        <Toaster position="bottom-right" reverseOrder={false} />
        {/* Right: Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-6">
            CONTACT INFO
          </h3>
          <div className="space-y-4 text-gray-400">
            <div>
              <h4 className="text-green-400 font-medium">Email Us At</h4>
              <p>info@dyvostech.com</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-behance"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
