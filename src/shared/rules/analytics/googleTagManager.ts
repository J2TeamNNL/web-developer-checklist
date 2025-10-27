import { CheckResult } from '@/shared/types';

export async function checkGoogleTagManager(): Promise<CheckResult> {
  const hasGTM = !!(window as any).google_tag_manager;
  const gtmScripts = document.querySelectorAll('script[src*="googletagmanager.com/gtm.js"]');
  const gtmNoscript = document.querySelector('noscript iframe[src*="googletagmanager.com/ns.html"]');

  if (!hasGTM && gtmScripts.length === 0) {
    return {
      id: 'google_tag_manager',
      status: 'na',
      message: 'Google Tag Manager not detected',
      details: 'GTM not found. Consider using GTM for flexible tag management.',
    };
  }

  // Check if both script and noscript are present
  if (gtmScripts.length > 0 && !gtmNoscript) {
    return {
      id: 'google_tag_manager',
      status: 'na',
      message: 'GTM missing noscript fallback',
      details: 'GTM script found but <noscript> iframe is missing. Add it for users with JS disabled.',
    };
  }

  return {
    id: 'google_tag_manager',
    status: 'pass',
    message: 'Google Tag Manager properly implemented',
    details: `GTM is active${gtmNoscript ? ' with noscript fallback' : ''}.`,
  };
}
