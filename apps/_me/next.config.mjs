import bundeAnalyzer from '@next/bundle-analyzer';
import nextMDX from '@next/mdx';


/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self';
  child-src coocobolo.com;
  style-src 'self' coocobolo.com;
  font-src 'self';  
`;

const securityHeaders = [
   {
      key: 'X-DNS-Prefetch-Control',
      value: 'on',
   },
   {
      key: 'Access-Control-Allow-Origin',
      value: 'https://www.coocobolo.com',
   },
   {
      key: 'Permissions-Policy',
      value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
   },
   {
      key: 'Server',
      value: 'coocobolo',
   },
   {
      key: 'Strict-Transport-Security',
      value: 'max-age=63072000; includeSubDomains; preload',
   },
   {
      key: 'X-XSS-Protection',
      value: '0',
   },
   {
      key: 'X-Frame-Options',
      value: 'SAMEORIGIN',
   },
   {
      key: 'X-Content-Type-Options',
      value: 'nosniff',
   },
   {
      key: 'Referrer-Policy',
      value: 'no-referrer',
   },
   // {
   // 	key: "Content-Security-Policy",
   // 	value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
   // },
];

const nextConfig = {
   reactStrictMode: true,
   swcMinify: true,
   poweredByHeader: false,
   trailingSlash: true,
   pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
   eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
   },
   async headers() {
      return [
         {
            source: '/:path*',
            headers: securityHeaders,
         },
      ];
   },
   webpack: async (config) => {
      config.resolve.alias = {
         ...config.resolve.alias,
      };

      config.resolve = {
         ...config.resolve,

         fallback: {
            ...config.resolve.fallback,
            child_process: false,
            fs: false,
            // 'builtin-modules': false,
            // worker_threads: false,
         },
      };
      return config;
   },
};

const withBundleAnalyzer = bundeAnalyzer({
   enabled: process.env.ANALYZE === 'true',
});

const withMDX = nextMDX({
   extension: /\.mdx?$/,
   options: {
      providerImportSource: '@mdx-js/react',
   },
});

export default withBundleAnalyzer(withMDX(nextConfig));