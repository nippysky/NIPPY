import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <section className="w-full h-screen pt-2 overflow-show lg:overflow-hidden">
      <Head>
        <title>Chukwudubem Osegbe</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="NIPPY The Creator. iDesign, iCode, iCreate. UI Designer, Web & Mobile Developer."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
    </section>
  );
}
