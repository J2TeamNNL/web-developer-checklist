import { CheckResult } from '@/shared/types';

export async function checkXMLSitemap(): Promise<CheckResult> {
  // Check for sitemap link in robots.txt or common locations
  const sitemapLocations = [
    '/sitemap.xml',
    '/sitemap_index.xml',
    '/sitemap-index.xml',
  ];

  let sitemapFound = false;
  let foundUrl = '';

  // Check for sitemap in <link> tags
  const sitemapLink = document.querySelector('link[rel="sitemap"]');
  if (sitemapLink) {
    foundUrl = sitemapLink.getAttribute('href') || '';
    sitemapFound = true;
  }

  // Note: We cannot actually fetch these URLs due to CORS
  // But we can check if they're referenced
  if (sitemapFound) {
    return {
      id: 'xml_sitemap',
      status: 'pass',
      message: 'XML Sitemap link found',
      details: `Sitemap URL: ${foundUrl}`,
      link: 'https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview',
      description: 'Sitemaps overview',
    };
  }

  return {
    id: 'xml_sitemap',
    status: 'na',
    message: 'Cannot detect XML sitemap from page',
    details: `Common locations to check manually: ${sitemapLocations.join(', ')}`,
    link: 'https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap',
    description: 'Build and submit a sitemap',
  };
}
