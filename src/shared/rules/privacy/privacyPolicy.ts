import { CheckResult } from '@/shared/types';

export async function checkPrivacyPolicy(): Promise<CheckResult> {
  // Check for privacy policy links
  const privacyKeywords = [
    'privacy',
    'privacy policy',
    'privacy-policy',
    'privacypolicy',
    'datenschutz', // German
    'privacidad', // Spanish
    'vie privée', // French
  ];

  const links = document.querySelectorAll('a[href]');
  let privacyLink: HTMLAnchorElement | null = null;

  for (const link of Array.from(links)) {
    const href = (link.getAttribute('href') || '').toLowerCase();
    const text = (link.textContent || '').toLowerCase();

    if (privacyKeywords.some((keyword) => href.includes(keyword) || text.includes(keyword))) {
      privacyLink = link as HTMLAnchorElement;
      break;
    }
  }

  if (!privacyLink) {
    return {
      id: 'privacy_policy',
      status: 'fail',
      message: 'No privacy policy link found',
      details: 'GDPR and many jurisdictions require a privacy policy. Add a link in your footer.',
      link: 'https://gdpr.eu/privacy-notice/',
      description: 'Privacy policy requirements',
    };
  }

  const href = privacyLink.getAttribute('href') || '';
  return {
    id: 'privacy_policy',
    status: 'pass',
    message: 'Privacy policy link found',
    details: `Link: ${href.substring(0, 100)}`,
  };
}
