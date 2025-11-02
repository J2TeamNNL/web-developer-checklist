import { CheckResult } from '@/shared/types';

export async function checkTwitterCards(): Promise<CheckResult> {
  const requiredTags = ['twitter:card', 'twitter:title'];
  const optionalTags = ['twitter:description', 'twitter:image', 'twitter:site'];
  
  const foundTags: string[] = [];
  const missingRequired: string[] = [];

  requiredTags.forEach((tag) => {
    const meta = document.querySelector(`meta[name="${tag}"]`);
    if (meta) {
      foundTags.push(tag);
    } else {
      missingRequired.push(tag);
    }
  });

  const foundOptional: string[] = [];
  optionalTags.forEach((tag) => {
    const meta = document.querySelector(`meta[name="${tag}"]`);
    if (meta) {
      foundOptional.push(tag);
    }
  });

  if (missingRequired.length === requiredTags.length) {
    return {
      id: 'twitter_cards',
      status: 'fail',
      message: 'No Twitter Card tags found',
      details: 'Add Twitter Card meta tags to optimize how your content appears when shared on Twitter.',
      link: 'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards',
      description: 'Twitter Cards guide',
    };
  }

  if (missingRequired.length > 0) {
    return {
      id: 'twitter_cards',
      status: 'na',
      message: `Missing required tags: ${missingRequired.join(', ')}`,
      details: `Found: ${foundTags.join(', ')}. Also found optional: ${foundOptional.join(', ') || 'none'}`,
    };
  }

  return {
    id: 'twitter_cards',
    status: 'pass',
    message: 'Twitter Cards are properly configured',
    details: `Required tags: ${foundTags.join(', ')}. Optional: ${foundOptional.join(', ') || 'none'}`,
  };
}
