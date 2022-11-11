import Head from "next/head";
import React from "react";
import CVNav from "../components/CVNav";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

function CV({
  works,
  schools,
  techStacks,
}: {
  works: object[];
  schools: object[];
  techStacks: object[];
}): any {
  const imageBuilder = ImageUrlBuilder(client);
  const urlFor = (source: SanityImageSource) => imageBuilder.image(source);

  return (
    <section className="w-full min-h-screen bg-royal dark:bg-darkBG2 pt-3 pb-10 px-5 md:px-10 lg:px-20 lg:pb-20">
      <Head>
        <title>Chukwudubem Osegbe - Resume`</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Chukwudubem Osegbe's Curriculum Vitae"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navabr */}
      <CVNav />

      {/* Work Experience */}
      <section className="w-full min-h-screen mt-10 py-2">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.05 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="text-[1.7rem] md:text-[3rem] text-center text-white font-black my-10"
        >
          WORK EXPERIENCE
        </motion.h1>

        {works.map((work: any) => (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ ease: "easeOut", duration: 1 }}
            key={work._id}
            className="w-full my-4 py-5 px-3 bg-tilesBG dark:bg-gold text-white dark:text-black flex flex-col gap-8 md:flex-row md:justify-between md:items-center"
          >
            {/* First Column */}
            <div className="flex flex-col gap-2 w-full md:w-1/3">
              <p className="font-bold text-[1.1rem]">{work.name}</p>
              <p className="font-medium text-[0.75rem]">{work.location}</p>
            </div>

            {/* Second Column */}
            <div className="flex flex-col gap-2 w-full md:w-1/3 md:justify-center md:items-center">
              <p className="font-semibold text-[0.9rem]">{work.role}</p>
              <p className="font-medium text-[0.75rem]">{work.type}</p>
            </div>

            {/* Third Column */}
            <div className="flex flex-col gap-2 w-full md:w-1/3 md:justify-end md:items-end">
              <p className="font-semibold text-[0.9rem]">{work.duration}</p>
              <div className="font-medium text-[0.75rem]">
                <Link target="_blank" rel="noreferrer" href={work.href}>
                  {work.website}
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Education */}
      <section className="w-full min-h-screen mt-10 py-2">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.05 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="text-[1.7rem] md:text-[3rem] text-center text-white font-black my-10"
        >
          EDUCATION
        </motion.h1>

        {schools.map((school: any) => (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ ease: "easeOut", duration: 1 }}
            key={school._id}
            className="w-full my-4 py-5 px-3 bg-tilesBG dark:bg-gold text-white dark:text-black flex flex-col gap-8 md:flex-row md:justify-between md:items-center"
          >
            {/* First Column */}
            <div className="flex flex-col gap-2 w-full md:w-1/3">
              <p className="font-bold text-[1.1rem]">{school.name}</p>
              <p className="font-medium text-[0.75rem]">{school.location}</p>
            </div>

            {/* Second Column */}
            <div className="flex flex-col gap-2 w-full md:w-1/3 md:justify-center md:items-center">
              <p className="font-semibold text-[0.9rem]">{school.discipline}</p>
              <p className="font-medium text-[0.75rem]">{school.result}</p>
            </div>

            {/* Third Column */}
            <div className="flex flex-col gap-2 w-full md:w-1/3 md:justify-end md:items-end">
              <p className="font-semibold text-[0.9rem]">{school.duration}</p>
              <div className="font-medium text-[0.75rem]">
                <Link target="_blank" rel="noreferrer" href={school.href}>
                  View Transcript
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Tech Stacks Expereince */}
      <section className="w-full pb-2">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.05 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="text-[1.7rem] md:text-[3rem] text-center text-white font-black my-10"
        >
          TECH STACK EXPEREINCE
        </motion.h1>

        <section className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-20 sm:px-10 md:py-10 md:px-20 justify-items-center place-content-center">
          {techStacks.map((techStack: any) => (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ ease: "easeOut", duration: 1 }}
              key={techStack._id}
              className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] p-4 bg-white dark:bg-gold m-0 items-center justify-center flex flex-col gap-5 text-center"
            >
              <Image
                src={`${urlFor(techStack.icon)}`}
                alt={techStack.name}
                width={50}
                height={50}
                priority
                quality={100}
              />

              {/* title */}
              <p className="text-[0.85rem] font-semibold text-royal dark:text-black">
                {techStack.name}
              </p>
            </motion.div>
          ))}
        </section>
      </section>
    </section>
  );
}

var date = new Date();
var dateString = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
  .toISOString()
  .split("T")[0];

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: dateString, //Previously "2022-10-31" just incase any problem occurs, change back to the previous date
  useCdn: true,
  token: process.env.SANITY_TOKEN,
});

export async function getStaticProps() {
  const works = await client.fetch(`*[_type == "workExperience"]`);
  const schools = await client.fetch(`*[_type == "education"]`);
  const techStacks = await client.fetch(`*[_type == "techStack"]`);

  if (!works || !schools || !techStacks) {
    return {
      notfound: true,
    };
  }

  return {
    props: {
      works,
      schools,
      techStacks,
    },
    revalidate: 21000,
  };
}

export default CV;
