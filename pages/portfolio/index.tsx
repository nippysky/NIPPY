import Head from "next/head";
import React from "react";
import Navbar from "../../components/Navbar";
import PortfolioHero from "../../components/PortfolioHero";
import { BiDesktop, BiMobile } from "react-icons/bi";
import { createClient } from "next-sanity";
import PortfolioCard from "../../components/PortfolioCard";
import Link from "next/link";

export default function Portfolio({ projects }: { projects: object[] }): any {
  return (
    <section className="w-full pt-2 bg-white dark:bg-black">
      <Head>
        <title>Chukwudubem Osegbe - Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Chukwudubem Osegbe Portfolio, detailing works which includes User Interface Design, Web & Mobile Development."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Portfolio Hero */}
      <PortfolioHero />

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="w-full px-5 md:px-10 lg:px-20 py-20 bg-mainBG dark:bg-darkBG2 grid md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {projects.map((project: any) => (
          <Link href={`/portfolio/${project.name}`} key={project._id}>
            <span>
              <PortfolioCard
                title={project.name}
                icon={
                  project.isWeb ? (
                    <BiDesktop size={25} />
                  ) : (
                    <BiMobile size={25} />
                  )
                }
                desc={project.desc}
                github={project.githubHref}
                url={project.liveHref}
                detailLink={`/portfolio/${project.name}`}
              />
            </span>
          </Link>
        ))}
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
  const projects = await client.fetch(`*[_type == "portfolio"]`);

  if (!projects) {
    return {
      notfound: true,
    };
  }

  return {
    props: {
      projects,
    },
    revalidate: 21000,
  };
}
