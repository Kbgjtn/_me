import bundeAnalyzer from "@next/bundle-analyzer";
import nextMDX from "@next/mdx";
import rehypePlugins from "rehype-plugins";
import remarkPlugins from "remark-plugins";

/** @type {import('next').NextConfig} */

const domain = "https://coocobolo.com";

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self';
  child-src ${domain};
  style-src 'self' ${domain};
  font-src 'self';  
`;

const securityHeaders = [
   {
      key: "X-DNS-Prefetch-Control",
      value: "on",
   },
   {
      key: "Access-Control-Allow-Origin",
      value: domain,
   },
   {
      key: "Permissions-Policy",
      value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
   },
   {
      key: "server",
      value: "coocobolo",
   },
   {
      key: "Strict-Transport-Security",
      value: "max-age=63072000; includeSubDomains; preload",
   },
   {
      key: "X-XSS-Protection",
      value: "0",
   },
   {
      key: "X-Frame-Options",
      value: "SAMEORIGIN",
   },
   {
      key: "X-Content-Type-Options",
      value: "nosniff",
   },
   {
      key: "Referrer-Policy",
      value: "no-referrer",
   },
];

const nextConfig = {
   reactStrictMode: true,
   poweredByHeader: false,
   trailingSlash: true,

   pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
   eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
   },
   async headers() {
      return [
         {
            source: "/:path*",
            headers: securityHeaders,
         },
      ];
   },
};
const withMDX = nextMDX({
   extension: /\.mdx?$/,
   options: {
      providerImportSource: "@mdx-js/react",
      remarkPlugins: [remarkPlugins],
      rehypePlugins: [rehypePlugins],
   },
});

export default withMDX(nextConfig);
