import { CheckResult } from '@/shared/types';

export async function checkViewport(): Promise<CheckResult> {
  const viewport = document.querySelector<HTMLMetaElement>('head > meta[name="viewport"]');
  const hasViewport = viewport !== null;
  const content = viewport?.content || '';

  return {
    id: 'viewport',
    name: 'check_viewport',
    status: hasViewport ? 'pass' : 'fail',
    message: hasViewport ? 'Viewport meta tag found' : 'No viewport meta tag',
    details: content,
    link: 'https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag',
    description: 'Using the viewport meta tag',
  };
}
