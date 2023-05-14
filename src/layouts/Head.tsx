import Head from "next/head";
import config from "../../blog.config";

const DocHead = (props: any) => (
	<>
		<Head>
			<title>{props.title}</title>
			<link rel="icon" type="image/x-icon" href="/favicon.ico" />
			<link rel="canonical" href={props.url} />
			<meta name="description" content={props.description} />
			<meta property="og:title" content={props.title} />
			<meta property="og:description" content={props.description} />
			{props.imageUrl && (
				<meta property="og:image" content={props.imageUrl} />
			)}
			{props.imageAlt && (
				<meta property="og:image:alt" content={props.imageAlt} />
			)}
			<meta property="og:url" content={props.url} />
			<meta
				name="twitter:card"
				content={props.imageUrl ? "summary_large_image" : "summary"}
			/>
			<meta name="twitter:site" content={""} />
			<meta name="twitter:creator" content={""} />
			<meta name="twitter:title" content={""} />
			<meta name="twitter:description" content={props.description} />
			{props.imageUrl && (
				<meta property="twitter:image" content={props.imageUrl} />
			)}
			{props.imageAlt && (
				<meta property="twitter:image:alt" content={props.imageAlt} />
			)}
		</Head>
	</>
);

export interface DocHead {
	title: string;
	description: string;
	url: string;
	imageUrl: string;
	imageAlt: string;
	twitter: string;
}