import React from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { IoCodeWorking } from "react-icons/io5";
import { MdDesignServices } from "react-icons/md";

export default function PortfolioHero() {
  const { theme } = useTheme();
  return (
    <section className="w-full bg-white dark:bg-black px-5 md:px-10 lg:px-20 py-20">
      <div className="w-full flex">
        {/* Heading */}
        <div className="w-full lg:w-[65%] text-center lg:text-left">
          <h1 className="text-[2rem] md:text-[3rem] lg:text-[4rem] font-black text-black dark:text-white">
            The Projects I am <br className="hidden lg:flex" /> Proud Of
          </h1>
          <h3 className="text-[1.2rem] md:text-[1.4rem] lg:text-[1.7rem] font-medium text-black dark:text-white mt-8">
            These are projects that I started from{" "}
            <br className="hidden lg:flex" /> scratch as an idea, or exercise at
            least <br className="hidden lg:flex" /> 60% of my skillset on.
          </h3>
        </div>

        {/* Images */}
        <div className="hidden lg:flex lg:flex-col lg:w-[35%] text-royal dark:text-gold">
          <div className="flex justify-start">
            <span className="rotate-[-45deg]">
              <IoCodeWorking size={200} />
            </span>
          </div>

          <div className="flex justify-end">
            <MdDesignServices size={200} />
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="flex gap-6 flex-col lg:flex-row justify-between items-center mt-10">
        {/* Github */}
        <div className="text-royal dark:text-gold hover:text-black dark:hover:text-white font-semibold">
          <Link
            target="_blank"
            rel="noreferrer"
            href={"https://github.com/nippysky"}
          >
            View All Dev Projects On Github
          </Link>
        </div>

        {/* Scroll Down */}
        <div className="text-royal dark:text-gold hidden lg:flex">
          <Link href={"#portfolio"}>
            <HiOutlineChevronDoubleDown size={30} />
          </Link>
        </div>

        {/* Behance */}
        <div className="text-royal dark:text-gold hover:text-black dark:hover:text-white font-semibold">
          <Link
            target="_blank"
            rel="noreferrer"
            href={"https://www.behance.net/nippysky"}
          >
            View All Design Projects On Behance
          </Link>
        </div>
      </div>
    </section>
  );
}
