import { CheckResult } from '@/shared/types';

export async function checkStructuredData(): Promise<CheckResult> {
  const hasItemscope = document.querySelector('[itemscope]') !== null;
  const hasJsonLd = document.querySelector('script[type="application/ld+json"]') !== null;
  const hasStructuredData = hasItemscope || hasJsonLd;

  return {
    id: 'structured_data',
    name: 'check_structured_data',
    status: hasStructuredData ? 'pass' : 'fail',
    message: hasStructuredData
      ? 'Structured data found (Schema.org)'
      : 'No structured data found',
    link: 'http://schema.org/',
    description: 'Schema.org reference',
  };
}
