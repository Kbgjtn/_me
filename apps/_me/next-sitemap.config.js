/** @type {import('next-sitemap').IConfig} */
module.exports = {
   siteUrl: 'https://www.coocobolo.com',
   priority: 0.6,
   generateRobotsTxt: true,
   generateIndexSitemap: false,
   transform: async (config, path) => {
      const defaultValue = (priority) => ({
         loc: path,
         changefreq: config.changefreq,
         priority: priority || config.priority,
         lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
         alternateRefs: config.alternateRefs ?? [],
      });

      if (path === '/') {
         return defaultValue(1.0);
      }

      if (path === '/posts') {
         return defaultValue(0.9);
      }

      return defaultValue();
   },
};
