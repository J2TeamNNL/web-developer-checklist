import { CheckResult } from '@/shared/types';

export async function checkMetaDescription(): Promise<CheckResult> {
  const metaDesc = document.querySelector<HTMLMetaElement>('head > meta[name="description"]');
  const content = metaDesc?.content || '';
  const hasDescription = content.length > 0;

  return {
    id: 'meta_description',
    name: 'check_meta_description',
    status: hasDescription ? 'pass' : 'fail',
    message: hasDescription
      ? `Meta description found (${content.length} chars)`
      : 'No meta description found',
    details: content.substring(0, 160),
    link: 'https://moz.com/learn/seo/meta-description',
    description: 'Meta description guide',
  };
}
