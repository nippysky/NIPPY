import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { BsSunFill, BsBriefcaseFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { HiChatBubbleLeftRight } from "react-icons/hi2";

// Import Icons
import logoRoyal from "../public/Brand/NIPPYSKY_ROYAL.svg";
import logoGold from "../public/Brand/NIPPYSKY_GOLD.svg";
import Form from "./Form";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [contactMenu, setContactMenu] = useState(false);
  const [mounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  if (!mounted) return null;

  if (contactMenu === true) {
    // Disable Scroll
    typeof document !== "undefined" &&
      (document.body.style.overflow = "hidden");
  } else {
    // Enable Scroll
    typeof document !== "undefined" && (document.body.style.overflow = "auto");
  }

  return (
    <section>
      <motion.header
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ ease: "easeOut", duration: 1 }}
        className="w-full px-5 md:px-10 lg:px-20 flex items-center justify-between"
      >
        {/* Logo */}
        <div className="w-1/2">
          <Link href={"/"}>
            <span>
              <Image
                src={theme == "dark" ? logoGold : logoRoyal}
                alt={theme == "dark" ? "NIPPYSKY_GOLD" : "NIPPYSKY_ROYAL"}
                width={50}
                height={50}
              />
            </span>
          </Link>
        </div>

        {/* Menu */}
        <nav className="w-1/2 flex items-center justify-end gap-6 md:gap-10 md:text-royal dark:md:text-gold md:font-semibold">
          <div className="flex gap-3">
            <button>
              <Link href={"/portfolio"}>
                <span className=" text-royal dark:text-gold">
                  <BsBriefcaseFill size={20} />
                </span>
              </Link>
            </button>

            <span className="hidden md:flex md:hover:text-black md:hover:border-b-2 border-royal dark:md:hover:text-white dark:border-gold">
              <Link href={"/portfolio"}>Portfolio</Link>
            </span>
          </div>

          <div
            onClick={() => setContactMenu(true)}
            className="flex gap-3 cursor-pointer"
          >
            <button>
              <span className=" text-royal dark:text-gold">
                <HiChatBubbleLeftRight size={22} />
              </span>
            </button>
            <span className="hidden md:flex md:hover:text-black md:hover:border-b-2 border-royal dark:md:hover:text-white dark:border-gold">
              Reach Me
            </span>
          </div>

          {/* Theme Toggle */}
          <div>
            <button
              className="flex gap-3 text-royal dark:text-gold"
              onClick={() => {
                if (theme === "light") {
                  setTheme("dark");
                } else {
                  setTheme("light");
                }
              }}
            >
              {theme === "dark" ? (
                <BsSunFill size={22} />
              ) : (
                <MdDarkMode size={22} />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/*CONTACT MENU MODAL */}
      {contactMenu && (
        <motion.section
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="fixed bg-white dark:bg-black inset-0 z-50 h-screen overflow-auto lg:overflow-hidden px-5 lg:px-20"
        >
          <div className="w-full h-[50px] flex justify-between items-center text-royal dark:text-gold font-semibold">
            {/* TITlE */}
            <div>
              <span className="bg-gradient-to-r from-royalGrad1 via-royalGrad3 to-royalGrad3 dark:from-goldenGrad1 dark:via-goldenGrad3 dark:to-goldenGrad3 text-gradient text-[1.5rem] lg:text-[2rem] font-extrabold">
                Contact NIPPY
              </span>
            </div>
            {/* END OF TITLE */}

            {/* CLOSE BUTTON */}
            <div
              className="flex w-[100px] h-[45px] items-center justify-center cursor-pointer pt-1"
              onClick={() => setContactMenu(false)}
            >
              <span className="relative right-1">Close</span>
              <span>
                <IoClose
                  size={30}
                  color={theme === "dark" ? "#FFBC00" : "#4169E1"}
                />
              </span>
            </div>
            {/* END OF CLOSE BUTTON */}
          </div>

          <section className="flex flex-col justify-center w-full">
            {/* FORM */}
            <Form />
            <div className="text-center text-black dark:text-white mt-10 pb-10">
              <p>
                Alternatively, you can send me an email on{" "}
                <span className="font-semibold text-royal dark:text-gold hover:text-black dark:hover:text-white">
                  <Link href={"mailto:nsinfo247@gmail.com"}>
                    nsinfo247@gmail.com
                  </Link>
                </span>
              </p>
            </div>
          </section>
        </motion.section>
      )}
      {/* END OF CONTACT MENU MODAL */}
    </section>
  );
}
