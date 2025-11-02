import { CheckResult } from '@/shared/types';

export async function checkCookieConsent(): Promise<CheckResult> {
  // Check for common cookie consent indicators
  const consentKeywords = [
    'cookie',
    'consent',
    'gdpr',
    'privacy',
    'accept',
    'reject',
  ];

  // Check for cookie consent banners/modals
  const allElements = document.querySelectorAll('div, aside, section, [role="dialog"], [role="banner"]');
  let foundConsentBanner = false;
  let consentDetails = '';

  for (const el of Array.from(allElements)) {
    const text = (el.textContent || '').toLowerCase();
    const className = (el.className || '').toLowerCase();
    const id = (el.id || '').toLowerCase();

    const matchesKeywords = consentKeywords.some(
      (keyword) => text.includes(keyword) || className.includes(keyword) || id.includes(keyword)
    );

    if (matchesKeywords && (text.includes('cookie') || text.includes('consent'))) {
      foundConsentBanner = true;
      consentDetails = `Found: ${className || id || 'unnamed element'}`;
      break;
    }
  }

  // Check for cookies
  const hasCookies = document.cookie.length > 0;

  if (hasCookies && !foundConsentBanner) {
    return {
      id: 'cookie_consent',
      status: 'fail',
      message: 'Cookies detected but no consent banner found',
      details: 'GDPR requires user consent before setting non-essential cookies.',
      link: 'https://gdpr.eu/cookies/',
      description: 'GDPR and cookies',
    };
  }

  if (foundConsentBanner) {
    return {
      id: 'cookie_consent',
      status: 'pass',
      message: 'Cookie consent mechanism detected',
      details: consentDetails,
    };
  }

  return {
    id: 'cookie_consent',
    status: 'na',
    message: 'No cookies or consent banner detected',
    details: 'Site appears to not use cookies, or they are set server-side.',
  };
}
