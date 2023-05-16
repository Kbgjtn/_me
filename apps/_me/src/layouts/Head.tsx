import Head from 'next/head';

const DocHead = (props: any) => (
   <>
      <Head>
         <title>{props.title}</title>
         <link rel="icon" href="/tortuga.ico" />
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
