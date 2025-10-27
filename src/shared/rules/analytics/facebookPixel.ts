import { CheckResult } from '@/shared/types';

export async function checkFacebookPixel(): Promise<CheckResult> {
  const hasFBQ = !!(window as any).fbq;
  const fbScripts = document.querySelectorAll('script[src*="connect.facebook.net"]');

  if (!hasFBQ && fbScripts.length === 0) {
    return {
      id: 'facebook_pixel',
      status: 'na',
      message: 'Facebook Pixel not detected',
      details: 'No FB tracking found.',
    };
  }

  return {
    id: 'facebook_pixel',
    status: 'pass',
    message: 'Facebook Pixel detected',
    details: 'Facebook Pixel is active for conversion tracking and remarketing.',
  };
}
