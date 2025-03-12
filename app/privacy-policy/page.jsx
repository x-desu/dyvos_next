"use client";

import { Shield } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const shieldFloat = {
    animate: {
      y: [0, -10, 0],
      rotate: [-5, 5, -5],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-gray-100">
        <div className="p-16 sm:px-6 lg:col-span-3 lg:px-8 max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
          <motion.div
            className="flex items-center space-x-3 mb-8"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <motion.div variants={shieldFloat} animate="animate">
              <Shield className="text-blue-400 h-8 w-8" />
            </motion.div>
            <h1 className="text-4xl font-bold text-blue-400">Privacy Policy</h1>
          </motion.div>

          <motion.p
            className="text-center mb-8 text-gray-400"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
          >
            Last updated: January 2025
          </motion.p>

          <motion.div
            className="space-y-8"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.3 }}
          >
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed">
                At DYVOS, we value your privacy and are committed to protecting your
                personal information. This Privacy Policy outlines the types of data we
                collect, how we use it, and the steps we take to protect your information.
                By using our website and services, you agree to the collection and use of
                information as described in this policy.
              </p>
            </div>

            {[
              {
                title: "1. Information We Collect",
                content: "We may collect the following types of information when you use our services:",
                list: [
                  {
                    title: "Personal Information",
                    desc: "This includes details such as your name, email address, phone number, and other information that you provide when creating an account or using our services.",
                  },
                  {
                    title: "Usage Data",
                    desc: "We may collect information on how you access and use our website, such as IP address, browser type, and device information.",
                  },
                  {
                    title: "Cookies",
                    desc: "We use cookies to enhance your experience. Please refer to our Cookies section for more details.",
                  },
                  {
                    title: "Third-Party Data",
                    desc: "We may collect information from third-party services that you link to our platform, such as social media accounts or payment gateways.",
                  },
                ],
              },
              {
                title: "2. How We Use Your Data",
                content: "We use the information we collect for the following purposes:",
                list: [
                  {
                    title: "Service Provision",
                    desc: "To provide and maintain our services.",
                  },
                  {
                    title: "Personalization",
                    desc: "To personalize your experience and improve our website.",
                  },
                  {
                    title: "Communication",
                    desc: "To communicate with you, respond to inquiries, and provide customer support.",
                  },
                  {
                    title: "Marketing",
                    desc: "To send you promotional emails and newsletters (you can opt out at any time).",
                  },
                ],
              },
              {
                title: "3. Data Security",
                content: "We implement various security measures to protect your personal information:",
                list: [
                  {
                    title: "Encryption",
                    desc: "We use industry-standard encryption to protect your data during transmission.",
                  },
                  {
                    title: "Access Controls",
                    desc: "We maintain strict access controls and authentication procedures.",
                  },
                  {
                    title: "Regular Audits",
                    desc: "We conduct regular security audits and updates to ensure data protection.",
                  },
                  {
                    title: "Data Backups",
                    desc: "We maintain secure backups of your data to prevent loss.",
                  },
                ],
              },
              {
                title: "4. Your Rights",
                content: "You have certain rights regarding your personal data:",
                list: [
                  {
                    title: "Access Rights",
                    desc: "You have the right to request access to the personal data we hold about you.",
                  },
                  {
                    title: "Correction Rights",
                    desc: "You can request corrections to inaccurate or incomplete personal data.",
                  },
                  {
                    title: "Deletion Rights",
                    desc: "You can request the deletion of your personal data, subject to certain exceptions.",
                  },
                  {
                    title: "Opt-Out Rights",
                    desc: "You can opt out of receiving promotional communications at any time.",
                  },
                ],
              },
            ].map((section, index) => (
              <motion.div
                key={section.title}
                initial="initial"
                animate="animate"
                variants={fadeInUp}
                transition={{ delay: 0.4 + index * 0.2 }}
                className="bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <h2 className="text-2xl font-semibold text-blue-400 mb-4">
                  {section.title}
                </h2>
                <div className="text-gray-300 leading-relaxed mb-4">
                  {section.content}
                </div>
                {section.list && (
                  <ul className="space-y-4">
                    {section.list.map((item, i) => (
                      <motion.li
                        key={item.title}
                        custom={i}
                        initial="hidden"
                        animate="visible"
                        variants={listItemVariants}
                        className="bg-gray-700 p-4 rounded-md"
                      >
                        <strong className="text-blue-300 block mb-2">
                          {item.title}
                        </strong>
                        <span className="text-gray-300">{item.desc}</span>
                      </motion.li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}

            <motion.div
              className="mt-12 p-8 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.8 }}
            >
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                If you have any questions about our Privacy Policy or how we handle your
                data, please don't hesitate to contact us. Our dedicated privacy team
                is here to help:
              </p>
              <div className="space-y-2 text-gray-300">
                <p>
                  <strong className="text-blue-300">Email:</strong>{" "}
                  <a
                    href="mailto:privacy@dyvos.com"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    info@dyvos.com
                  </a>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;