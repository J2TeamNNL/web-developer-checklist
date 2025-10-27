import { CheckResult } from '@/shared/types';

export async function checkOpenGraph(): Promise<CheckResult> {
  const requiredTags = ['title', 'type', 'image', 'url'];
  const foundTags: string[] = [];
  const missingTags: string[] = [];

  requiredTags.forEach((tag) => {
    const element = document.querySelector(`meta[property="og:${tag}"]`);
    if (element) {
      foundTags.push(tag);
    } else {
      missingTags.push(tag);
    }
  });

  const hasAllTags = missingTags.length === 0;

  return {
    id: 'opengraph',
    name: 'check_opengraph',
    status: hasAllTags ? 'pass' : 'fail',
    message: hasAllTags
      ? 'All required OpenGraph tags present'
      : `Missing OpenGraph tags: ${missingTags.join(', ')}`,
    details: {
      found: foundTags,
      missing: missingTags,
    },
    link: 'http://ogp.me/',
    description: 'OpenGraph protocol reference',
  };
}
