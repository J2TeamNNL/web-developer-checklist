import { CheckResult } from '@/shared/types';

export async function checkRobotsMeta(): Promise<CheckResult> {
  const robotsMeta = document.querySelector('meta[name="robots"]');
  const content = robotsMeta?.getAttribute('content')?.toLowerCase() || '';

  if (!robotsMeta) {
    return {
      id: 'robots_meta',
      status: 'pass',
      message: 'No robots meta tag (default: indexable)',
      details: 'Page will be indexed by search engines by default.',
    };
  }

  // Check for blocking directives
  const hasNoIndex = content.includes('noindex');
  const hasNoFollow = content.includes('nofollow');

  if (hasNoIndex && hasNoFollow) {
    return {
      id: 'robots_meta',
      status: 'fail',
      message: 'Page blocked from indexing and following',
      details: `Meta robots: ${content}. This page will not be indexed and links won't be followed.`,
    };
  }

  if (hasNoIndex) {
    return {
      id: 'robots_meta',
      status: 'fail',
      message: 'Page blocked from indexing',
      details: `Meta robots: ${content}. Search engines won't index this page.`,
    };
  }

  if (hasNoFollow) {
    return {
      id: 'robots_meta',
      status: 'na',
      message: 'Links set to nofollow',
      details: `Meta robots: ${content}. Search engines won't follow links on this page.`,
    };
  }

  return {
    id: 'robots_meta',
    status: 'pass',
    message: 'Robots meta tag allows indexing',
    details: `Meta robots: ${content}`,
  };
}
