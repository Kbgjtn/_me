import Head from "next/head";
import Book from "../components/templates/book/book";
import Me from "../components/templates/home/me";

export default function Home() {
	return (
		<>
			<Head>
				<title>DaffaRqlme</title>
				<meta name="description" content="Hi, here i'm daffa!" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<meta property="og:title" content="Hi, here i'm daffa!" />
				<meta
					property="og:description"
					content="About - Hi, here i'm daffa!"
				/>
				<meta property="og:url" content="https://coocobolo.com/" />
				<meta property="og:type" content="website"></meta>
				<meta httpEquiv="X-UA-Compatible" content="ie=edge" />
				<link rel="icon" href="/tortuga.ico" />
			</Head>
			<main className="w-screen h-screen">
				<Me />
				<Book />
			</main>
		</>
	);
}
