import Head from "next/head";
import Book from "@/components/templates/book/book";
import Footer from "@/components/templates/footer/footer";
import Me from "@/components/templates/home/me";
import Project from "@/components/templates/project/project";
import ScrollProgressY from "@/components/modules/scrollProgress/scrollProgress";

export default function Home() {
  return (
    <>
      <Head>
        <title>Daffa Requelme</title>
        <meta name="description" content="Naufal Daffa Ryquelme" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Hi, here i'm daffa!" />
        <meta
          property="og:description"
          content="hii, i'm a student at Binus University (Comp. Science), nice to meet you, budz!!:))"
        />
        <meta property="og:url" content="https://coocobolo.com/" />
        <meta property="og:type" content="website"></meta>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="icon" href="/tortuga.ico" />
      </Head>
      <main className="w-screen h-screen scroll-smooth">
        <ScrollProgressY />
        <Me />
        <Project />
        <Book />
        <Footer />
      </main>
    </>
  );
}
