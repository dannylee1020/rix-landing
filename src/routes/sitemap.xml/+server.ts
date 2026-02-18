import type { RequestHandler } from './$types';

const SITE_URL = 'https://tryrix.com';

const pages = [
	{ path: '/', lastmod: '2026-02-18' },
	{ path: '/privacy', lastmod: '2026-02-18' },
	{ path: '/terms', lastmod: '2026-02-18' }
];

export const GET: RequestHandler = () => {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((page) => `  <url>
    <loc>${SITE_URL}${page.path}</loc>
    <lastmod>${page.lastmod}</lastmod>
  </url>`).join('\n')}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600'
		}
	});
};
