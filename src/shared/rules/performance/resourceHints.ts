import { CheckResult } from '@/shared/types';

export async function checkResourceHints(): Promise<CheckResult> {
  const preconnects = document.querySelectorAll('link[rel="preconnect"]');
  const preloads = document.querySelectorAll('link[rel="preload"]');
  const prefetches = document.querySelectorAll('link[rel="prefetch"]');
  const dnsPrefetches = document.querySelectorAll('link[rel="dns-prefetch"]');

  const totalHints = preconnects.length + preloads.length + prefetches.length + dnsPrefetches.length;

  if (totalHints === 0) {
    return {
      id: 'resource_hints',
      status: 'na',
      message: 'No resource hints found',
      details: 'Consider adding preconnect/preload/dns-prefetch to optimize resource loading.',
    };
  }

  const hints = [];
  if (preconnects.length > 0) hints.push(`preconnect: ${preconnects.length}`);
  if (preloads.length > 0) hints.push(`preload: ${preloads.length}`);
  if (prefetches.length > 0) hints.push(`prefetch: ${prefetches.length}`);
  if (dnsPrefetches.length > 0) hints.push(`dns-prefetch: ${dnsPrefetches.length}`);

  return {
    id: 'resource_hints',
    status: 'pass',
    message: 'Resource hints are used',
    details: `Found ${totalHints} hints: ${hints.join(', ')}`,
  };
}
