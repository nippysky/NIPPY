import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import NIPPY from "../public/Brand/NIPPY_AVATAR.svg";
import Link from "next/link";
import Head from "next/head";

export default function NotFoundPage() {
  return (
    <section className="w-full min-h-screen lg:overflow-hidden flex flex-col">
      <Head>
        <title>Page Not Found</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="m-auto">
        {/* NIPPY's Avatar */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="w-full flex items-center justify-center"
        >
          <Image
            src={NIPPY}
            alt="NIPPY"
            width={250}
            height={250}
            priority
            quality={100}
          />
        </motion.div>

        {/* Error Message */}
        <h1 className="text-center font-normal px-5">
          Hey Dear, I hope you are not lost! It seems that you found yourself in
          a page that I do not have.
        </h1>

        {/* Go Back Home */}
        <div className="w-full px-5 text-center mt-4 font-semibold text-royal dark:text-gold hover:text-black dark:hover:text-white">
          <Link href={"/"}>Kindly, Go Back Home</Link>
        </div>
      </div>
    </section>
  );
}
