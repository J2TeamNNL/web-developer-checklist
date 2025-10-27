import { CheckResult } from '@/shared/types';

export async function checkHeadingsHierarchy(): Promise<CheckResult> {
  const h1s = document.querySelectorAll('h1');
  const h2s = document.querySelectorAll('h2');
  const h3s = document.querySelectorAll('h3');
  const h4s = document.querySelectorAll('h4');
  const h5s = document.querySelectorAll('h5');
  const h6s = document.querySelectorAll('h6');

  // Check for H1
  if (h1s.length === 0) {
    return {
      id: 'headings_hierarchy',
      status: 'fail',
      message: 'No H1 heading found',
      details: 'Every page should have exactly one H1 heading as the main title.',
    };
  }

  // Check for multiple H1s
  if (h1s.length > 1) {
    return {
      id: 'headings_hierarchy',
      status: 'fail',
      message: `Multiple H1 headings found (${h1s.length})`,
      details: 'Use only one H1 per page. Additional headings should be H2-H6.',
    };
  }

  // Check if H1 has content
  const h1Text = h1s[0].textContent?.trim();
  if (!h1Text) {
    return {
      id: 'headings_hierarchy',
      status: 'fail',
      message: 'H1 heading is empty',
      details: 'H1 should contain descriptive text for the page.',
    };
  }

  // Summary
  const summary = [
    `H1: 1`,
    h2s.length > 0 ? `H2: ${h2s.length}` : null,
    h3s.length > 0 ? `H3: ${h3s.length}` : null,
    h4s.length > 0 ? `H4: ${h4s.length}` : null,
    h5s.length > 0 ? `H5: ${h5s.length}` : null,
    h6s.length > 0 ? `H6: ${h6s.length}` : null,
  ].filter(Boolean).join(', ');

  return {
    id: 'headings_hierarchy',
    status: 'pass',
    message: 'Heading hierarchy is properly structured',
    details: `H1: "${h1Text}". Structure: ${summary}`,
  };
}
