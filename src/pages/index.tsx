import Head from "next/head";
import Book from "../components/templates/book/book";
import Me from "../components/templates/home/me";

export default function Home() {
	return (
		<>
			<Head>
				<title>DaffaRqlme</title>
				<meta name="description" content="Hi, here i'm daffa" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/tortuga.ico" />
			</Head>
			<main className="w-screen h-screen">
				<Me />
				<Book />
			</main>
		</>
	);
}
