import { CheckResult } from '@/shared/types';

export async function checkCSP(): Promise<CheckResult> {
  // Check for CSP in meta tag
  const cspMeta = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
  const cspContent = cspMeta?.getAttribute('content') || '';

  // Note: Cannot check HTTP headers from content script
  if (!cspMeta) {
    return {
      id: 'csp',
      status: 'fail',
      message: 'No Content Security Policy found',
      details: 'Add a CSP meta tag or HTTP header to protect against XSS and injection attacks.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP',
      description: 'Content Security Policy guide',
    };
  }

  // Basic validation
  const hasDefaultSrc = cspContent.includes('default-src');
  const hasScriptSrc = cspContent.includes('script-src');
  
  if (!hasDefaultSrc && !hasScriptSrc) {
    return {
      id: 'csp',
      status: 'na',
      message: 'CSP found but may be incomplete',
      details: `CSP: ${cspContent.substring(0, 100)}... Missing default-src or script-src directives.`,
    };
  }

  return {
    id: 'csp',
    status: 'pass',
    message: 'Content Security Policy is configured',
    details: `CSP directives found: ${cspContent.substring(0, 150)}...`,
  };
}
