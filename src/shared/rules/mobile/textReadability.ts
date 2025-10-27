import { CheckResult } from '@/shared/types';

export async function checkTextReadability(): Promise<CheckResult> {
  // Check for text elements with small font sizes
  const textElements = document.querySelectorAll('p, li, td, span, div, a, button, label');
  
  if (textElements.length === 0) {
    return {
      id: 'text_readability',
      status: 'na',
      message: 'No text elements found',
      details: 'No text to check.',
    };
  }

  let tooSmall = 0;
  let total = 0;
  const minFontSize = 12; // Minimum recommended font size for mobile (in pixels)
  const issues: string[] = [];

  textElements.forEach((el) => {
    if (!(el instanceof HTMLElement)) return;
    
    const text = el.textContent?.trim();
    
    // Skip if no text or very short
    if (!text || text.length < 3) return;
    
    // Skip hidden elements
    const style = window.getComputedStyle(el);
    if (style.display === 'none' || style.visibility === 'hidden') return;
    
    total++;
    
    // Get font size
    const fontSize = parseFloat(style.fontSize);
    
    if (fontSize < minFontSize) {
      tooSmall++;
      if (issues.length < 3) { // Limit examples
        issues.push(`${el.tagName.toLowerCase()}: ${fontSize.toFixed(1)}px`);
      }
    }
  });

  if (total === 0) {
    return {
      id: 'text_readability',
      status: 'na',
      message: 'No visible text elements',
      details: 'No visible text to check.',
    };
  }

  const percentage = Math.round((tooSmall / total) * 100);

  if (tooSmall === 0) {
    return {
      id: 'text_readability',
      status: 'pass',
      message: 'Text is readable on mobile',
      details: `All ${total} text elements use font size ≥ ${minFontSize}px.`,
    };
  }

  if (percentage > 50) {
    return {
      id: 'text_readability',
      status: 'fail',
      message: 'Many text elements too small',
      details: `${tooSmall}/${total} elements (${percentage}%) have font size < ${minFontSize}px. Examples: ${issues.join(', ')}`,
    };
  }

  return {
    id: 'text_readability',
    status: 'na',
    message: 'Some text elements too small',
    details: `${tooSmall}/${total} elements (${percentage}%) have font size < ${minFontSize}px. Examples: ${issues.join(', ')}`,
  };
}
