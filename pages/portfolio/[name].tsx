import React from "react";
import Navbar from "../../components/Navbar";
import PortfolioDetailsPage from "../../components/PortfolioDetailsPage";
import Head from "next/head";
import { BiDesktop, BiMobile } from "react-icons/bi";
import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export default function PortfolioDetails(props: { loadedProject: any }): any {
  const { loadedProject } = props;
  const imageBuilder = ImageUrlBuilder(client);
  const urlFor = (source: SanityImageSource) => imageBuilder.image(source);

  return (
    <section className="w-full bg-white dark:bg-darkBG2">
      <Head>
        <title>Chukwudubem Osegbe - Projects</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navabar */}
      <div className="py-2">
        <Navbar />
      </div>

      {/* Project Details */}
      <PortfolioDetailsPage
        title={loadedProject.name}
        projectType={loadedProject.isWeb ? "WEB DESIGN" : "MOBILE DESIGN"}
        icon={
          loadedProject.isWeb ? <BiDesktop size={25} /> : <BiMobile size={25} />
        }
        desc={loadedProject.desc}
        headImage={`${urlFor(loadedProject.headerImage)}`}
        github={loadedProject.githubHref}
        liveLink={loadedProject.liveHref}
        techUsed={loadedProject.techUsed}
        behance={loadedProject.behanceHref}
      />
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

export async function getStaticProps(context: { params: any }) {
  const projects = await client.fetch(`*[_type == "portfolio"]`);
  const { params } = context;
  const projectId = params.name;
  const project = projects.find(
    (project: { name: string }) => project.name === projectId
  );

  if (!project) {
    return {
      notfound: true,
    };
  }

  return {
    props: {
      loadedProject: project,
    },
    revalidate: 21000,
  };
}

export async function getStaticPaths() {
  const projects = await client.fetch(`*[_type == "portfolio"]`);
  const ids = projects.map((project: { name: string }) => project.name);
  const pathsWithParams = ids.map((id: any) => ({ params: { name: id } }));

  return {
    paths: pathsWithParams,
    fallback: "blocking",
  };
}
