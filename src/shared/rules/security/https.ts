import { CheckResult } from '@/shared/types';

export async function checkHTTPS(): Promise<CheckResult> {
  const isHTTPS = location.protocol === 'https:';

  return {
    id: 'https',
    name: 'check_https',
    status: isHTTPS ? 'pass' : 'fail',
    message: isHTTPS ? 'Website uses HTTPS' : 'Website uses insecure HTTP',
    link: 'https://web.dev/why-https-matters/',
    description: 'Why HTTPS matters',
  };
}
