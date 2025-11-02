import { CheckResult } from '@/shared/types';

export async function checkMixedContent(): Promise<CheckResult> {
  // Only check on HTTPS pages
  if (location.protocol !== 'https:') {
    return {
      id: 'mixed_content',
      status: 'na',
      message: 'Not applicable (page is not HTTPS)',
      details: 'Mixed content check only applies to HTTPS pages.',
    };
  }

  const httpResources: string[] = [];

  // Check images
  document.querySelectorAll('img').forEach((img) => {
    if (img.src.startsWith('http://')) {
      httpResources.push(`img: ${img.src.substring(0, 50)}`);
    }
  });

  // Check scripts
  document.querySelectorAll('script[src]').forEach((script) => {
    const src = script.getAttribute('src') || '';
    if (src.startsWith('http://')) {
      httpResources.push(`script: ${src.substring(0, 50)}`);
    }
  });

  // Check stylesheets
  document.querySelectorAll('link[rel="stylesheet"]').forEach((link) => {
    const href = link.getAttribute('href') || '';
    if (href.startsWith('http://')) {
      httpResources.push(`css: ${href.substring(0, 50)}`);
    }
  });

  // Check iframes
  document.querySelectorAll('iframe').forEach((iframe) => {
    if (iframe.src.startsWith('http://')) {
      httpResources.push(`iframe: ${iframe.src.substring(0, 50)}`);
    }
  });

  if (httpResources.length === 0) {
    return {
      id: 'mixed_content',
      status: 'pass',
      message: 'No mixed content detected',
      details: 'All resources are loaded over HTTPS.',
      link: 'https://web.dev/what-is-mixed-content/',
      description: 'What is mixed content?',
    };
  }

  return {
    id: 'mixed_content',
    status: 'fail',
    message: `Found ${httpResources.length} HTTP resource(s) on HTTPS page`,
    details: `Mixed content detected:\n${httpResources.slice(0, 5).join('\n')}${httpResources.length > 5 ? `\n...and ${httpResources.length - 5} more` : ''}`,
    link: 'https://web.dev/what-is-mixed-content/',
    description: 'Fix mixed content',
  };
}
