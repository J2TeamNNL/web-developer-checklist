import { CheckResult } from '@/shared/types';

export async function checkCanonicalUrl(): Promise<CheckResult> {
  const canonical = document.querySelector('link[rel="canonical"]');
  const href = canonical?.getAttribute('href');

  if (!canonical || !href) {
    return {
      id: 'canonical_url',
      status: 'fail',
      message: 'No canonical URL found',
      details: 'Add <link rel="canonical" href="..."> to specify the preferred version of this page.',
    };
  }

  // Check if canonical URL is absolute
  const isAbsolute = href.startsWith('http://') || href.startsWith('https://');
  
  if (!isAbsolute) {
    return {
      id: 'canonical_url',
      status: 'fail',
      message: 'Canonical URL is relative',
      details: `Found: ${href}. Canonical URLs should be absolute (include protocol and domain).`,
    };
  }

  // Check if canonical points to current page
  const currentUrl = window.location.href.split('?')[0].split('#')[0];
  const canonicalUrl = href.split('?')[0].split('#')[0];

  return {
    id: 'canonical_url',
    status: 'pass',
    message: 'Canonical URL is properly set',
    details: `Canonical: ${href}${canonicalUrl !== currentUrl ? ' (cross-domain canonical)' : ''}`,
  };
}
