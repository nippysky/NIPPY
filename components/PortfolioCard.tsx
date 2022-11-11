import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PortfolioCard(props: {
  title: string;
  icon: any;
  desc: string;
  github: string;
  url: string;
  detailLink: string;
}) {
  const { title, icon, desc, github, url, detailLink } = props;
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ ease: "easeOut", duration: 1 }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.1 },
      }}
      className="w-full bg-white dark:bg-gold text-black py-6 px-6"
    >
      {/* TOP LAYER */}
      <div className="flex justify-between items-center">
        {/* Project Title */}
        <div>
          <h3 className="font-bold text-[1.4rem]">{title}</h3>
        </div>

        {/* Icon */}
        <div>{icon}</div>
      </div>

      {/* MIDDLE LAYER */}
      <div className="w-full my-6">
        <p>{desc.substring(0, 100) + "..."}</p>

        {/* D&D */}
        <div className="flex gap-4 my-5">
          <div className="bg-blue-500 px-2 py-1 flex justify-center items-center text-white text-[0.7rem] font-semibold">
            DESIGN
          </div>
          <div className="bg-pink-500 px-2 py-1 flex justify-center items-center text-white text-[0.7rem] font-semibold">
            DEVELOPMENT
          </div>
        </div>
      </div>

      {/* BOTTOM LAYER */}
      <div className="flex justify-between items-center mt-8">
        <div className="flex gap-4">
          {/* github */}
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
            className="text-royal dark:text-black hover:text-black dark:hover:text-white"
          >
            <Link target="_blank" rel="noreferrer" href={github}>
              <FaGithub size={23} />
            </Link>
          </motion.div>

          {/* external link */}
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
            className="text-royal dark:text-black hover:text-black dark:hover:text-white"
          >
            <Link target="_blank" rel="noreferrer" href={url}>
              <HiOutlineExternalLink size={23} />
            </Link>
          </motion.div>
        </div>

        {/* view full details */}
        <div className="text-royal dark:text-black hover:text-black dark:hover:text-white font-semibold">
          <Link href={detailLink}>View Full Details</Link>
        </div>
      </div>
    </motion.div>
  );
}
