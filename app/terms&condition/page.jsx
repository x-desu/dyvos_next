"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import gif from "../opengraph-image.gif";
import Footer from "../components/Footer";
const TermsAndConditions = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div className="min-h-screen bg-base-200 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Image
            src={gif}
            alt="Background Pattern"
            fill
            sizes="100vw"
            className="opacity-10 object-cover"
          />
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-6 lg:px-8 bg-base-100/90 backdrop-blur-sm rounded-xl shadow-xl border border-gray-200/10"
        >
          <div className="py-12">
            <h1 className="text-5xl font-bold text-center text-primary mb-4">
              Terms and Conditions
            </h1>

            <p className="text-center text-gray-500 mb-12">
              Last updated: January 2025
            </p>

            <div className="space-y-8">
              <motion.div
                variants={fadeIn}
                transition={{ delay: 0.2 }}
                className="prose max-w-none"
              >
                <p className="text-lg text-gray-600">
                  Please read these Terms and Conditions ("Terms", "Terms and
                  Conditions") carefully before using the DYVOS website (the
                  "Service") operated by DYVOS ("us", "we", or "our").
                </p>
              </motion.div>

              <motion.section
                variants={fadeIn}
                transition={{ delay: 0.3 }}
                className="space-y-4"
              >
                <h2 className="text-3xl font-semibold text-primary">
                  1. Definitions
                </h2>
                <p className="text-gray-600">
                  For the purposes of these Terms and Conditions, the following
                  definitions apply:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>
                    <span className="font-semibold">"Service"</span> refers to
                    the services provided by DYVOS through the website.
                  </li>
                  <li>
                    <span className="font-semibold">"User"</span> refers to any
                    individual or entity that accesses or uses the Service.
                  </li>
                  <li>
                    <span className="font-semibold">"Content"</span> refers to
                    any content, including text, images, video, audio, and other
                    material shared on the website.
                  </li>
                </ul>
              </motion.section>

              <motion.section
                variants={fadeIn}
                transition={{ delay: 0.4 }}
                className="space-y-4"
              >
                <h2 className="text-3xl font-semibold text-primary">
                  2. Acceptance of Terms
                </h2>
                <p className="text-gray-600">
                  By accessing and using our Service, you agree to be bound by
                  these Terms and Conditions. If you do not agree to these
                  Terms, please do not use our Service.
                </p>
              </motion.section>

              <motion.section
                variants={fadeIn}
                transition={{ delay: 0.5 }}
                className="space-y-4"
              >
                <h2 className="text-3xl font-semibold text-primary">
                  3. User Obligations
                </h2>
                <p className="text-gray-600">
                  As a user of the Service, you agree to the following
                  obligations:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>
                    You will not use the Service for any unlawful purpose.
                  </li>
                  <li>
                    You will comply with all applicable laws and regulations.
                  </li>
                  <li>
                    You will not upload or share any content that is harmful or
                    illegal.
                  </li>
                  <li>
                    You will respect the intellectual property rights of others.
                  </li>
                  <li>
                    You will not engage in any activity that disrupts the
                    Service.
                  </li>
                </ul>
              </motion.section>

              <motion.section
                variants={fadeIn}
                transition={{ delay: 0.6 }}
                className="space-y-4"
              >
                <h2 className="text-3xl font-semibold text-primary">
                  4. Privacy Policy
                </h2>
                <p className="text-gray-600">
                  Your use of the Service is also governed by our Privacy
                  Policy. Please review the Privacy Policy to understand how we
                  collect, use, and protect your information.
                </p>
              </motion.section>

              <motion.section
                variants={fadeIn}
                transition={{ delay: 0.7 }}
                className="space-y-4"
              >
                <h2 className="text-3xl font-semibold text-primary">
                  5. User Account
                </h2>
                <p className="text-gray-600">
                  You may be required to create an account to access certain
                  features of the Service. You agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>
                    Provide accurate and up-to-date information when creating
                    your account.
                  </li>
                  <li>
                    Maintain the confidentiality of your account credentials.
                  </li>
                  <li>
                    Notify us immediately of any unauthorized use of your
                    account.
                  </li>
                </ul>
              </motion.section>

              <motion.section
                variants={fadeIn}
                transition={{ delay: 0.8 }}
                className="space-y-4"
              >
                <h2 className="text-3xl font-semibold text-primary">
                  6. Intellectual Property
                </h2>
                <p className="text-gray-600">
                  The content provided on the Service is the property of DYVOS
                  or its licensors. All content is protected by copyright and
                  intellectual property laws. You may not use any content from
                  the Service without prior written permission from DYVOS.
                </p>
              </motion.section>

              <motion.section
                variants={fadeIn}
                transition={{ delay: 0.9 }}
                className="space-y-4"
              >
                <h2 className="text-3xl font-semibold text-primary">
                  7. Limitation of Liability
                </h2>
                <p className="text-gray-600">
                  In no event shall DYVOS be liable for any indirect,
                  incidental, special, consequential, or punitive damages, or
                  any loss of profits or revenues, whether incurred directly or
                  indirectly, or any loss of data, use, goodwill, or other
                  intangible losses, resulting from:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Your use or inability to use the Service.</li>
                  <li>Unauthorized access to or alteration of your data.</li>
                  <li>
                    Statements or conduct of any third party on the Service.
                  </li>
                </ul>
              </motion.section>

              <motion.section
                variants={fadeIn}
                transition={{ delay: 1 }}
                className="space-y-4"
              >
                <h2 className="text-3xl font-semibold text-primary">
                  8. Termination
                </h2>
                <p className="text-gray-600">
                  DYVOS reserves the right to terminate or suspend your account
                  and access to the Service, without prior notice, if you
                  violate any of these Terms and Conditions. Upon termination,
                  your right to use the Service will immediately cease, and you
                  must delete any content or materials downloaded from the
                  Service.
                </p>
              </motion.section>

              <motion.section
                variants={fadeIn}
                transition={{ delay: 1.1 }}
                className="space-y-4"
              >
                <h2 className="text-3xl font-semibold text-primary">
                  9. Modifications
                </h2>
                <p className="text-gray-600">
                  We may revise and update these Terms and Conditions at any
                  time. Any changes will be posted on this page with an updated
                  "Last updated" date. By continuing to use the Service after
                  such changes, you accept the revised Terms and Conditions.
                </p>
              </motion.section>

              <motion.section
                variants={fadeIn}
                transition={{ delay: 1.2 }}
                className="space-y-4"
              >
                <h2 className="text-3xl font-semibold text-primary">
                  10. Governing Law
                </h2>
                <p className="text-gray-600">
                  These Terms and Conditions shall be governed by and construed
                  in accordance with the laws of the jurisdiction in which DYVOS
                  is based, without regard to its conflict of law principles.
                </p>
              </motion.section>

              <motion.section
                variants={fadeIn}
                transition={{ delay: 1.3 }}
                className="space-y-4"
              >
                <h2 className="text-3xl font-semibold text-primary">
                  11. Contact Us
                </h2>
                <p className="text-gray-600">
                  If you have any questions about these Terms and Conditions,
                  please contact us at{" "}
                  <a
                    href="mailto:info@dyvos.co"
                    className="text-primary hover:text-primary-focus transition-colors"
                  >
                    info@dyvos.co
                  </a>
                </p>
              </motion.section>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
