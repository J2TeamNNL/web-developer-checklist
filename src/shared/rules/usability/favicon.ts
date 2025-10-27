import { CheckResult } from '@/shared/types';

export async function checkFavicon(): Promise<CheckResult> {
  const hasFaviconLink =
    document.querySelector('link[rel="icon"]') !== null ||
    document.querySelector('link[rel="shortcut icon"]') !== null;

  const hasMetaImage = document.querySelector('meta[itemprop="image"]') !== null;

  const hasFavicon = hasFaviconLink || hasMetaImage;

  return {
    id: 'favicon',
    name: 'check_favicon',
    status: hasFavicon ? 'pass' : 'fail',
    message: hasFavicon ? 'Favicon found' : 'No favicon detected',
    link: 'http://www.xiconeditor.com/',
    description: 'Online favicon generator',
  };
}
