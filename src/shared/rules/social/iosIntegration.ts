import { CheckResult } from '@/shared/types';

export async function checkIOSIntegration(): Promise<CheckResult> {
  const appleLinks = document.querySelectorAll('link[rel^="apple-"]');
  const hasAppleIntegration = appleLinks.length > 0;

  return {
    id: 'ios_integration',
    name: 'check_ios_integration',
    status: hasAppleIntegration ? 'pass' : 'fail',
    message: hasAppleIntegration
      ? `${appleLinks.length} Apple iOS meta tags found`
      : 'No Apple iOS integration found',
    link: 'http://developer.apple.com/library/ios/',
    description: 'iOS integration',
  };
}
