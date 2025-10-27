import { CheckResult } from '@/shared/types';

export async function checkFriendlyUrls(): Promise<CheckResult> {
  const hasQueryParams = location.href.includes('?');
  const isFriendly = !hasQueryParams;

  return {
    id: 'friendly_urls',
    name: 'check_friendly_urls',
    status: isFriendly ? 'pass' : 'fail',
    message: isFriendly
      ? 'URL is friendly (no query parameters)'
      : 'URL contains query parameters',
    link: 'http://www.techterms.com/definition/friendly_url',
    description: 'Explanation and guide',
  };
}
