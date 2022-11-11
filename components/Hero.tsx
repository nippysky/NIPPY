import NIPPY from "../public/Brand/NIPPY_AVATAR.svg";
import Image from "next/image";
import Link from "next/link";
import SocialIcons from "../components/SocialIcons";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section>
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ ease: "easeOut", duration: 1 }}
        className="w-full text-center mt-20 md:mt-14 px-5 md:px-10 lg:px-20"
      >
        <h1 className="text-[2rem] md:text-[4rem] font-black text-black dark:text-white">
          NIPPY THE CREATOR
        </h1>
        <h2 className="text-[1.35rem] md:text-[1.6rem] font-semibold text-black dark:text-white">
          UI Designer, Mobile & Web Developer
        </h2>
        <h3 className="text-[1.2rem] md:text-[1.5rem] font-medium text-royal dark:text-gold tracking-widest mt-3">
          iDesign, iCode, iCreate
        </h3>
      </motion.div>

      {/* Bottom Section */}
      <section className="w-full lg:h-[50%] flex flex-col lg:flex-row lg:fixed lg:bottom-0 mt-10">
        {/* NIPPY's Avatar */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="w-full lg:w-1/3 bg-royal dark:bg-gold flex items-center justify-center"
        >
          <Image
            src={NIPPY}
            alt="NIPPY"
            width={350}
            height={350}
            priority
            quality={100}
          />
        </motion.div>

        {/* SUMMARY */}
        <div className="w-full lg:w-2/3 bg-white dark:bg-darkBG px-5 py-5 lg:px-20 lg:py-10 flex flex-col lg:justify-between">
          <motion.h3
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ ease: "easeOut", duration: 1 }}
            className="text-[1.2rem] md:text-[1.7rem] font-medium text-black dark:text-white"
          >
            Hi, I am Chukwudubem Osegbe. I love to design and develop clean
            responsive user interface for Mobile and Web
          </motion.h3>

          {/* Social Icons And  Resume */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ ease: "easeOut", duration: 1 }}
            className="w-full flex flex-col lg:flex-row lg:justify-between lg:items-center"
          >
            <SocialIcons />
            <div className="w-full lg:w-1/2 flex lg:justify-end font-semibold mb-10 lg:mb-0 ">
              <span className="text-royal dark:text-gold hover:text-black dark:hover:text-white">
                <Link href={"/cv"}>Curriculum Vitae</Link>
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </section>
  );
}
