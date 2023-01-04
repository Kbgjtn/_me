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
		key: "X-DNS-Prefetch-Control",
		value: "on",
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
		value: "origin-when-cross-origin",
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
	httpAgentOptions: {
		keepAlive: false,
	},
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
	webpack(config) {
		const fileLoaderRule = config.module.rules.find(
			(rule) => rule.test && rule.test.test(".svg")
		);
		fileLoaderRule.exclude = /\.svg$/;
		config.module.rules.push({
			test: /\.svg$/,
			loader: require.resolve("@svgr/webpack"),
		});
		return config;
	},
};

module.exports = nextConfig;
