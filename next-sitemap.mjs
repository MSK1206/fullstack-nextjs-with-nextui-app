/** @type {import('next-sitemap').IConfig} */
const nextsitemapConfig = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
}

export default nextsitemapConfig