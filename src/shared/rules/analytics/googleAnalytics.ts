import { CheckResult } from '@/shared/types';

export async function checkGoogleAnalytics(): Promise<CheckResult> {
  // Check for GA4 (gtag.js)
  const hasGtag = !!(window as any).gtag || !!(window as any).dataLayer;
  const gtagScripts = document.querySelectorAll('script[src*="googletagmanager.com/gtag"]');
  
  // Check for Universal Analytics (analytics.js)
  const hasGA = !!(window as any).ga;
  const gaScripts = document.querySelectorAll('script[src*="google-analytics.com/analytics.js"]');
  
  if (!hasGtag && !hasGA && gtagScripts.length === 0 && gaScripts.length === 0) {
    return {
      id: 'google_analytics',
      status: 'na',
      message: 'Google Analytics not detected',
      details: 'No GA tracking found. Consider adding analytics to track user behavior.',
    };
  }

  if (hasGA && !hasGtag) {
    return {
      id: 'google_analytics',
      status: 'na',
      message: 'Using deprecated Universal Analytics',
      details: 'Universal Analytics stopped collecting data on July 1, 2023. Migrate to GA4.',
    };
  }

  if (hasGtag || gtagScripts.length > 0) {
    return {
      id: 'google_analytics',
      status: 'pass',
      message: 'Google Analytics 4 detected',
      details: 'GA4 (gtag.js) is properly implemented.',
    };
  }

  return {
    id: 'google_analytics',
    status: 'pass',
    message: 'Google Analytics detected',
    details: 'Analytics tracking is active.',
  };
}
