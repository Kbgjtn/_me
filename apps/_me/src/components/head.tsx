import useCurrentUrl from '@/hooks/useCurrentPath';
import NextHead from 'next/head';

interface HeadProps {
   title: string;
   description: string;
   ogImage: string;
   override?: boolean;
   structuredData?: string;
}

function Head({
   title,
   description,
   ogImage,
   override = false,
   structuredData = '',
}: HeadProps) {
   const currentUrl = useCurrentUrl();
   const htmlTitle = override ? title : `${title} — Daffa Requelme`;

   return (
      <NextHead>
         <title>{htmlTitle}</title>
         <meta name="description" content={description} />
         <link rel="icon" href="/favicon.ico" />

         {/* seo */}
         <link rel="canonical" href={currentUrl} />

         {/* og image */}
         <meta property="og:image" content={ogImage} />
         <meta property="og:image:width" content="1200" />
         <meta property="og:image:height" content="630" />
         <meta
            property="og:image:alt"
            content={`Image with "${title}" text.`}
         />

         {/* twitter card */}
         <meta name="twitter:card" content="summary_large_image" />
         <meta name="twitter:site" content="@coocobolo" />
         <meta name="twitter:creator" content="@coocobolo" />
         <meta name="twitter:title" content={title} />
         <meta name="twitter:description" content={description} />
         <meta name="twitter:image" content={ogImage} />
         <meta
            name="twitter:image:alt"
            content={`Image with "${title}" text.`}
         />

         {/* structured data */}
         {structuredData && (
            <script type="application/ld+json">{structuredData}</script>
         )}
      </NextHead>
   );
}

export default Head;
