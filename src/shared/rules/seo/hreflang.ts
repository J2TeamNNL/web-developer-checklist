import { CheckResult } from '@/shared/types';

export async function checkHreflang(): Promise<CheckResult> {
  const hreflangLinks = document.querySelectorAll('link[rel="alternate"][hreflang]');
  
  if (hreflangLinks.length === 0) {
    return {
      id: 'hreflang',
      status: 'na',
      message: 'No hreflang tags found',
      details: 'For multi-language sites, add hreflang tags to indicate language and regional variants.',
      link: 'https://developers.google.com/search/docs/specialty/international/localized-versions',
      description: 'Manage multi-regional and multilingual sites',
    };
  }

  const languages: string[] = [];
  const urls: string[] = [];
  let hasXDefault = false;

  hreflangLinks.forEach((link) => {
    const hreflang = link.getAttribute('hreflang') || '';
    const href = link.getAttribute('href') || '';
    
    if (hreflang === 'x-default') {
      hasXDefault = true;
    }
    
    languages.push(hreflang);
    if (urls.length < 3) {
      urls.push(`${hreflang}: ${href.substring(0, 40)}`);
    }
  });

  if (!hasXDefault && hreflangLinks.length > 1) {
    return {
      id: 'hreflang',
      status: 'na',
      message: `${hreflangLinks.length} hreflang tags found, but missing x-default`,
      details: `Languages: ${languages.join(', ')}. Consider adding hreflang="x-default" for the default page.`,
    };
  }

  return {
    id: 'hreflang',
    status: 'pass',
    message: `Hreflang tags properly configured (${hreflangLinks.length} variants)`,
    details: `Languages: ${languages.slice(0, 10).join(', ')}${languages.length > 10 ? '...' : ''}${hasXDefault ? '. Includes x-default.' : ''}`,
  };
}
