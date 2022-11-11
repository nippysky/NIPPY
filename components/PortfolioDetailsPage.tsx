import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioDetailsPage(props: {
  title: string;
  projectType: string;
  icon: any;
  desc: string;
  headImage: any;
  github: string;
  liveLink: string;
  techUsed: string;
  behance: string;
}) {
  const {
    title,
    projectType,
    icon,
    desc,
    headImage,
    github,
    liveLink,
    techUsed,
    behance,
  } = props;
  return (
    <section className="w-full bg-white dark:bg-darkBG2 px-5 md:px-12 lg:px-36 py-20">
      {/* HEADER */}
      <div className="flex justify-between">
        <h1 className="font-bold text-black dark:text-white text-[1.4rem]">
          {title}
        </h1>
        <div className="flex gap-3 items-center">
          <span className="font-semibold text-black dark:text-white">
            {projectType}
          </span>
          <span>{icon}</span>
        </div>
      </div>

      {/* HEADER IMAGE */}
      <div className="lg:px-40 md:px-10 w-full my-10">
        <Image
          src={headImage}
          alt={"Project Image"}
          width={1000}
          height={670}
          priority
        />
      </div>

      {/* BUTTONS */}
      <div className="flex gap-20 justify-center items-center">
        <div>
          <button className="cursor-pointer bg-royal dark:bg-gold text-white dark:text-black px-3 py-2 font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
            <Link target="_blank" rel="noreferrer" href={github}>
              View Code
            </Link>
          </button>
        </div>

        <div>
          <button className="cursor-pointer bg-royal dark:bg-gold text-white dark:text-black px-3 py-2 font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
            <Link target="_blank" rel="noreferrer" href={liveLink}>
              Preview Live
            </Link>
          </button>
        </div>
      </div>

      <section className="w-full lg:px-40 md:px-10">
        {/* DESCRIPTION */}
        <div className="my-12">
          <h1 className="font-semibold text-[1.2rem] text-black dark:text-white my-4">
            Description
          </h1>
          <p>{desc}</p>
        </div>

        {/* METHOD AND TECH USED */}
        <div>
          <h1 className="font-semibold text-[1.2rem] text-black dark:text-white my-4">
            Method And Tech Used
          </h1>
          <p>{techUsed}</p>
        </div>

        {/* BEHANCE BUTTON */}
        <button className="w-full cursor-pointer bg-royal dark:bg-gold text-white dark:text-black px-3 py-2 font-semibold my-10 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
          <Link target="_blank" rel="noreferrer" href={behance}>
            View More Images
          </Link>
        </button>
      </section>
    </section>
  );
}
