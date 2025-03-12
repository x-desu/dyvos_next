"use client";

import { Cookie } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const CookiesPolicy = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const cookieFloat = {
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
            <motion.div variants={cookieFloat} animate="animate">
              <Cookie className="text-blue-400 h-8 w-8" />
            </motion.div>
            <h1 className="text-4xl font-bold text-blue-400">Cookies Policy</h1>
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
                This Cookies Policy explains how we use cookies and similar
                tracking technologies on our website. By continuing to use our
                website, you consent to the use of cookies as described in this
                policy.
              </p>
            </div>

            {[
              {
                title: "1. What Are Cookies?",
                content: `Cookies are small text files that are placed on your device when you visit our website. They serve various purposes and help us provide you with a better, more personalized browsing experience. These files contain information about your preferences, device, and online activity.`,
              },
              {
                title: "2. Types of Cookies We Use",
                content:
                  "We use the following types of cookies to optimize your experience:",
                list: [
                  {
                    title: "Essential Cookies",
                    desc: "These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt out of these cookies.",
                  },
                  {
                    title: "Performance Cookies",
                    desc: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website's structure and content.",
                  },
                  {
                    title: "Functionality Cookies",
                    desc: "These cookies enable enhanced functionality and personalization. They may be set by us or third-party providers whose services we use on our website.",
                  },
                  {
                    title: "Targeting/Advertising Cookies",
                    desc: "These cookies are used to deliver relevant advertisements and marketing communications. They track your browsing habits and help us understand your interests.",
                  },
                ],
              },
              {
                title: "3. Cookie Management",
                content:
                  "You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences through your browser settings. However, please note that blocking some types of cookies may impact your experience of our website.",
              },
              {
                title: "4. Third-Party Cookies",
                content:
                  "Some of our pages display content from external providers, such as YouTube, Facebook, and Twitter. To view this third-party content, you first have to accept their specific terms and conditions. This includes their cookie policies, which we have no control over.",
              },
              {
                title: "5. Updates to This Policy",
                content:
                  "We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.",
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
                If you have any questions about our Cookie Policy or how we
                handle your data, please don't hesitate to contact us. Our
                dedicated privacy team is here to help:
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

export default CookiesPolicy;
