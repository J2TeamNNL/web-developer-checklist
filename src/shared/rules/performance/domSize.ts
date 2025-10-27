import { CheckResult } from '@/shared/types';

export async function checkDOMSize(): Promise<CheckResult> {
  const elementCount = document.getElementsByTagName('*').length;
  const threshold = 2000;

  return {
    id: 'dom_size',
    name: 'check_dom_size',
    status: elementCount < threshold ? 'pass' : 'fail',
    message: `Number of DOM elements: ${elementCount}${elementCount >= threshold ? ' (exceeds recommended limit)' : ''}`,
    details: {
      count: elementCount,
      threshold,
    },
    link: 'https://web.dev/dom-size/',
    description: 'Reduce the # of DOM elements',
  };
}
