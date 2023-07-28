/* eslint-disable @typescript-eslint/no-var-requires */
// The Prismic API endpoint
const { repositoryName } = require('./slicemachine.config.json');
const API_ENDPOINT = `https://${repositoryName}.cdn.prismic.io/api/v2`;

// The hostname of the website, for example it would be https://example.com
const SITE_URL = process.env.VERCEL_URL;
const BASE_URL = `https://${SITE_URL}`;
const isProduction = process.env.VERCEL_ENV === 'production';

const linkResolver = (doc) => {
	switch (doc.type) {
		case 'pages':
		case 'redirect_link':
			return doc.uid ? `/${doc.uid.replaceAll('_', '/')}` : '/';
		default:
			return '/';
	}
};

const withPrismicSitemap = require('@reecem/prismic-sitemap')({
	linkResolver: linkResolver,
	apiEndpoint: API_ENDPOINT,
	hostname: BASE_URL,
	optionsMapPerDocumentType: {
		pages: { changefreq: 'monthly', priority: 1 },
		redirect_link: { changefreq: 'monthly', priority: 1 }
	},
	documentTypes: ['pages', 'redirect_link']
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	// i18n: {
	// 	locales: ['en', 'is'],
	// 	defaultLocale: 'en',
	// 	localeDetection: false
	// },
	images: {
		domains: ['images.prismic.io']
	}
};

module.exports = isProduction ? withPrismicSitemap(nextConfig) : nextConfig;
