import Head from "next/head";
import { useState } from "react";
import PullToRefresh from "../components/modules/pull-on-refresh/PullOnRefresh";
import Book from "../components/templates/book/book";
import Footer from "../components/templates/footer/footer";
import Me from "../components/templates/home/me";
import Project from "../components/templates/project/project";

const projects: Project[] = [
	{
		id: 1,
		title: "djasklf",
		description: "",
		imageUrl: `https://i.stack.imgur.com/Z25DI.png`,
	},
	{
		id: 2,
		title: "djasklf",
		description: "",
		imageUrl: `https://i.stack.imgur.com/Z25DI.png`,
	},
	{
		id: 3,
		title: "djasklf",
		description: "",
		imageUrl: `https://i.stack.imgur.com/Z25DI.png`,
	},
	{
		id: 4,
		title: "djasklf",
		description: "",
		imageUrl: `https://i.stack.imgur.com/Z25DI.png`,
	},
	{
		id: 5,
		title: "djasklf",
		description: "",
		imageUrl: `https://i.stack.imgur.com/Z25DI.png`,
	},
	{
		id: 6,
		title: "djasklf",
		description: "",
		imageUrl: `https://i.stack.imgur.com/Z25DI.png`,
	},
	{
		id: 7,
		title: "djasklf",
		description: "",
		imageUrl: `https://i.stack.imgur.com/Z25DI.png`,
	},
	{
		id: 8,
		title: "djasklf",
		description: "",
		imageUrl: `https://i.stack.imgur.com/Z25DI.png`,
	},
	{
		id: 9,
		title: "djasklf",
		description: "",
		imageUrl: `https://i.stack.imgur.com/Z25DI.png`,
	},
	{
		id: 10,
		title: "djasklf",
		description: "",
		imageUrl: `https://i.stack.imgur.com/Z25DI.png`,
	},
	{
		id: 11,
		title: "djasklf",
		description: "",
		imageUrl: `https://i.stack.imgur.com/Z25DI.png`,
	},
	{
		id: 12,
		title: "djasklf",
		description: "",
		imageUrl: `https://i.stack.imgur.com/Z25DI.png`,
	},
	{
		id: 13,
		title: "djasklf",
		description: "",
		imageUrl: `https://i.stack.imgur.com/Z25DI.png`,
	},
	{
		id: 14,
		title: "djasklf",
		description: "",
		imageUrl: `https://i.stack.imgur.com/Z25DI.png`,
	},
	{
		id: 15,
		title: "djasklf",
		description: "",
		imageUrl: `https://i.stack.imgur.com/Z25DI.png`,
	},
	{
		id: 16,
		title: "djasklf",
		description: "",
		imageUrl: `https://i.stack.imgur.com/Z25DI.png`,
	},
	{
		id: 17,
		title: "djasklf",
		description: "",
		imageUrl: `https://i.stack.imgur.com/Z25DI.png`,
	},
	{
		id: 18,
		title: "djasklf",
		description: "",
		imageUrl: `https://i.stack.imgur.com/Z25DI.png`,
	},
	{
		id: 19,
		title: "djasklf",
		description: "",
		imageUrl: `https://i.stack.imgur.com/Z25DI.png`,
	},
	{
		id: 20,
		title: "djasklf",
		description: "",
		imageUrl: `https://i.stack.imgur.com/Z25DI.png`,
	},
	{
		id: 21,
		title: "djasklf",
		description: "",
		imageUrl: `https://i.stack.imgur.com/Z25DI.png`,
	},
	{
		id: 22,
		title: "djasklf",
		description: "",
		imageUrl: `https://i.stack.imgur.com/Z25DI.png`,
	},
	{
		id: 23,
		title: "djasklf",
		description: "",
		imageUrl: `https://i.stack.imgur.com/Z25DI.png`,
	},
	{
		id: 24,
		title: "djasklf",
		description: "",
		imageUrl: `https://i.stack.imgur.com/Z25DI.png`,
	},
	{
		id: 25,
		title: "djasklf",
		description: "",
		imageUrl: `https://i.stack.imgur.com/Z25DI.png`,
	},
	{
		id: 26,
		title: "djasklf",
		description: "",
		imageUrl: `https://i.stack.imgur.com/Z25DI.png`,
	},
	{
		id: 27,
		title: "djasklf",
		description: "",
		imageUrl: `https://i.stack.imgur.com/Z25DI.png`,
	},
	{
		id: 28,
		title: "djasklf",
		description: "",
		imageUrl: `https://i.stack.imgur.com/Z25DI.png`,
	},
	{
		id: 29,
		title: "djasklf",
		description: "",
		imageUrl: `https://i.stack.imgur.com/Z25DI.png`,
	},
	{
		id: 30,
		title: "djasklf",
		description: "",
		imageUrl: `https://i.stack.imgur.com/Z25DI.png`,
	},
	{
		id: 31,
		title: "djasklf",
		description: "",
		imageUrl: `https://i.stack.imgur.com/Z25DI.png`,
	},
	{
		id: 32,
		title: "djasklf",
		description: "",
		imageUrl: `https://i.stack.imgur.com/Z25DI.png`,
	},
];

export default function Home() {
	return (
		<>
			<Head>
				<title>Daffa Requelme</title>
				<meta name="description" content="Naufal Daffa Ryquelme" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
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
				<Me />
				<Book />
				<Project />
				<Footer />
			</main>
		</>
	);
}
