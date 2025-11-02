import { CheckResult } from '@/shared/types';

export async function checkBrokenLinks(): Promise<CheckResult> {
  const links = document.querySelectorAll('a[href]');
  const suspiciousLinks: string[] = [];
  
  if (links.length === 0) {
    return {
      id: 'broken_links',
      status: 'na',
      message: 'No links found on page',
      details: 'No <a> tags to check.',
    };
  }

  links.forEach((link) => {
    const href = link.getAttribute('href') || '';
    
    // Check for obviously broken patterns
    if (href === '#' || href === '' || href === 'javascript:void(0)') {
      suspiciousLinks.push(`Empty/placeholder: ${link.textContent?.substring(0, 30)}`);
    } else if (href.startsWith('http://') && location.protocol === 'https:') {
      // Already covered by mixed content check
    } else if (href.includes('localhost') || href.includes('127.0.0.1')) {
      suspiciousLinks.push(`Local URL: ${href.substring(0, 50)}`);
    } else if (href.includes('example.com') || href.includes('test.com')) {
      suspiciousLinks.push(`Placeholder URL: ${href.substring(0, 50)}`);
    }
  });

  // Note: Cannot actually test HTTP status from content script due to CORS
  if (suspiciousLinks.length > 0) {
    return {
      id: 'broken_links',
      status: 'na',
      message: `Found ${suspiciousLinks.length} suspicious link(s)`,
      details: `Potential issues:\n${suspiciousLinks.slice(0, 5).join('\n')}${suspiciousLinks.length > 5 ? `\n...and ${suspiciousLinks.length - 5} more` : ''}`,
      link: 'https://validator.w3.org/checklink',
      description: 'W3C Link Checker',
    };
  }

  return {
    id: 'broken_links',
    status: 'pass',
    message: `Scanned ${links.length} links, no obvious issues found`,
    details: 'For comprehensive link checking, use external tools like W3C Link Checker.',
    link: 'https://validator.w3.org/checklink',
    description: 'W3C Link Checker',
  };
}
