import { CheckResult } from '@/shared/types';

export async function checkPageTitle(): Promise<CheckResult> {
  const title = document.querySelector('title');
  const titleText = title?.textContent?.trim() || '';

  if (!titleText) {
    return {
      id: 'page_title',
      status: 'fail',
      message: 'Page title is missing',
      details: 'Add a <title> tag to describe this page for search engines and browsers.',
    };
  }

  const length = titleText.length;

  // Check length (optimal: 50-60 characters)
  if (length < 30) {
    return {
      id: 'page_title',
      status: 'fail',
      message: 'Page title too short',
      details: `Title: "${titleText}" (${length} chars). Recommended: 50-60 characters.`,
    };
  }

  if (length > 70) {
    return {
      id: 'page_title',
      status: 'na',
      message: 'Page title too long',
      details: `Title: "${titleText}" (${length} chars). Google may truncate titles over 60 characters.`,
    };
  }

  return {
    id: 'page_title',
    status: 'pass',
    message: 'Page title is well-optimized',
    details: `Title: "${titleText}" (${length} chars)`,
  };
}
