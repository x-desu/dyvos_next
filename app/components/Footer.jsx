"use client";

import Image from "next/image";
import AnimatedGradient from "@/components/fancy/AnimationGradient";
import Link from "next/link";
const Footer = () => {
  const colors = ["#061f2c", "#10333b", "#093966", "#000000"];
  return (
    <>
      <footer className="footer  bg-base-200 text-base-content p-10 hidden sm:footer">
        <aside>
          <img src="/logo.jpeg" className="w-16 -ml-2 object-cover" />
          <p>
            Dyvos
            <br />
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link href={"/about"} className="link link-hover">
            About us
          </Link>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <Link href={"/terms&condition"} className="link link-hover">
            Terms of use
          </Link>
          <Link href={"/privacy-policy"} className="link link-hover">
            Privacy policy
          </Link>
          <Link href={"/cookies"} className="link link-hover">
            Cookie policy
          </Link>
        </nav>
      </footer>

      <footer className="footer relative bg-black text-white flex flex-col items-center sm:hidden footer-center   p-10">
        <AnimatedGradient
          colors={colors}
          speed={0.05}
          blur="medium"
          className="absolute inset-0 z-0"
        />
        <aside className="relative z-10">
          <Image
            src={"/logo.jpeg"}
            height={96}
            width={96}
            alt="Dyvos"
            className=" logo"
          />
          <p className="font-bold">
            DYVOS
            <br />
          </p>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav className="relative z-10">
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
};
export default Footer;
