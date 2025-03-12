"use client";
import { Menu, X } from "lucide-react";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from 'next/navigation';

const sidebarItemVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      ease: ["easeIn", "easeOut"],
      duration: 2,
      bounce: 1,
      delay: 0.3,
      velocity: 0.5,
      mass: 1.2,
      stiffness: 60,
      visualDuration: 1,
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
};
const sidebarItemInsideVariants = {
  hidden: { opacity: 0, x: 200 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      ease: ["easeIn", "easeOut"],
      duration: 1,
      bounce: 1,
      velocity: 0.5,
      delay: i * 0.2,
      mass: 1.2,
      stiffness: 60,
      visualDuration: 0.5,
      damping: 12,
    },
  }),
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const [targetSection, setTargetSection] = useState(null);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = sectionId === "hero" ? 384 : 0;
      const position = section.offsetTop - offset;
      window.scrollTo({ top: position, behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Handle scroll after route change
    if (targetSection) {
      const timer = setInterval(() => {
        const section = document.getElementById(targetSection);
        if (section) {
          clearInterval(timer);
          const offset = targetSection === "hero" ? 384 : 0;
          const position = section.offsetTop - offset;
          window.scrollTo({ top: position, behavior: "smooth" });
          setTargetSection(null);
        }
      }, 100);

      // Cleanup interval after 3 seconds if section not found
      setTimeout(() => clearInterval(timer), 3000);
      return () => clearInterval(timer);
    }
  }, [targetSection, pathname]);

  const handleNavigation = async (item) => {
    if (item.href) {
      router.push(item.href);
    } else {
      setTargetSection(item.sectionId);
      if (pathname !== '/') {
        await router.push('/');
      } else {
        scrollToSection(item.sectionId);
      }
    }
    
    const drawerCheckbox = document.getElementById("my-drawer-4");
    if (drawerCheckbox) drawerCheckbox.checked = false;
    setIsOpen(false);
  };

  useEffect(() => {
    const drawerCheckbox = document.getElementById("my-drawer-4");
    const handleChange = () => setIsOpen(drawerCheckbox.checked);

    window.addEventListener("scroll", function () {
      const navbar = document.querySelector(".nav");
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });

    drawerCheckbox.addEventListener("change", handleChange);
    return () => drawerCheckbox.removeEventListener("change", handleChange);
  }, []);

  return (
    <div className="drawer drawer-end py-4 px-8 sticky top-0 z-[1000] nav">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex items-center justify-between peer ">
        {/* Page content here */}
        <Link href={"/"}>
          <Image
            src={"/logo.jpeg"}
            height={96}
            width={96}
            alt="Dyvos"
            className="-ml-4 logo"
          />
        </Link>

        <label
          htmlFor="my-drawer-4"
          className="drawer-button flex gap-2  items-center group cursor-pointer label"
        >
          <spam className="text-sky-800 text-sm cursor-pointer group-hover:text-white hover:text-white duration-500  tracking-widest font-medium">
            MENU
          </spam>
          <Menu size={34} strokeWidth={2} />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-72 p-8 flex flex-col gap-5 ">
          {/* Sidebar content here */}
          <motion.div
            variants={sidebarItemVariants}
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            className="flex-col gap-8 "
          >
            <div className="flex justify-between  items-center mb-12">
              <h3 className="text-sky-700 text-xs cursor-pointer  hover:text-white duration-500  tracking-widest font-medium">
                NAVIGATION
              </h3>
              <label
                htmlFor="my-drawer-4"
                className="bg-black p-1.5 rounded-sm cursor-pointer group"
              >
                <X
                  size={14}
                  strokeWidth={5}
                  className="group-hover:text-sky-800 duration-500"
                />
              </label>
            </div>
            {/* Sidebar Menu Items */}
            <motion.ul className="flex flex-col gap-8">
              {[
                { name: "Home", sectionId: "hero" },
                { name: "About", href: "/about" },
                { name: "Services", sectionId: "target-about" },
                { name: "Works", sectionId: "works" },
                { name: "Clients", sectionId: "clients" },
                { name: "Contact", sectionId: "target-project" },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  custom={index}
                  variants={sidebarItemInsideVariants}
                  initial="hidden"
                  animate={isOpen ? "visible" : "hidden"}
                  className="font-medium text-lg text-white"
                >
                  <span
                    onClick={() => handleNavigation(item)}
                    className="cursor-pointer p-0"
                  >
                    {item.name}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            variants={sidebarItemVariants}
            className="mt-8 text-gray-500 leading-6"
          >
            <motion.p className="mt-8 text-gray-500 leading-6">
              Innovative Software Solutions for Your Business Success Empowering
              companies with tailored software solutions to optimize
              performance, enhance efficiency, and drive growth.
            </motion.p>
            <motion.div className="flex gap-4 mt-2">
              <motion.li>
                <SocialIcon
                  network="twitter"
                  bgColor="transparent"
                  style={{
                    height: "36px",
                    width: "36px",
                  }}
                  fgColor="#646464ab"
                />
              </motion.li>
              <motion.li>
                <SocialIcon
                  network="instagram"
                  bgColor="transparent"
                  style={{
                    height: "36px",
                    width: "36px",
                  }}
                  fgColor="#646464ab"
                />
              </motion.li>
              <motion.li>
                <SocialIcon
                  network="facebook"
                  bgColor="transparent"
                  style={{
                    height: "36px",
                    width: "36px",
                  }}
                  fgColor="#646464ab"
                />
              </motion.li>
              <motion.li>
                <SocialIcon
                  bgColor="transparent"
                  url="https://linkedin.com/in/couetilc"
                  style={{
                    height: "36px",
                    width: "36px",
                  }}
                  fgColor="#646464ab"
                />
              </motion.li>
            </motion.div>
          </motion.div>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
