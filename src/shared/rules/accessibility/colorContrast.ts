import { CheckResult } from '@/shared/types';

export async function checkColorContrast(): Promise<CheckResult> {
  // This is a simplified check - full contrast checking requires complex calculations
  // We'll check for common issues like light text on light backgrounds
  
  const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, a, span, li, td, th, button, label');
  let potentialIssues = 0;
  let checked = 0;

  textElements.forEach((el) => {
    if (!(el instanceof HTMLElement)) return;
    
    const style = window.getComputedStyle(el);
    const color = style.color;
    const bgColor = style.backgroundColor;
    const text = el.textContent?.trim();
    
    // Skip if no text or very short
    if (!text || text.length < 3) return;
    
    checked++;
    
    // Parse RGB values
    const colorMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    const bgMatch = bgColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    
    if (colorMatch && bgMatch) {
      const [, r1, g1, b1] = colorMatch.map(Number);
      const [, r2, g2, b2] = bgMatch.map(Number);
      
      // Calculate relative luminance (simplified)
      const getLuminance = (r: number, g: number, b: number) => {
        return 0.299 * r + 0.587 * g + 0.114 * b;
      };
      
      const textLum = getLuminance(r1, g1, b1);
      const bgLum = getLuminance(r2, g2, b2);
      
      // Check if contrast is too low (simplified - real WCAG calculation is more complex)
      const diff = Math.abs(textLum - bgLum);
      
      if (diff < 100) { // Threshold for potential issue
        potentialIssues++;
      }
    }
  });

  if (checked === 0) {
    return {
      id: 'color_contrast',
      status: 'na',
      message: 'No text elements to check',
      details: 'Could not analyze color contrast.',
    };
  }

  const issuePercentage = Math.round((potentialIssues / checked) * 100);

  if (issuePercentage > 20) {
    return {
      id: 'color_contrast',
      status: 'fail',
      message: 'Potential contrast issues detected',
      details: `${potentialIssues}/${checked} elements (${issuePercentage}%) may have low contrast. Use tools like WebAIM for detailed analysis.`,
    };
  }

  if (issuePercentage > 5) {
    return {
      id: 'color_contrast',
      status: 'na',
      message: 'Some potential contrast issues',
      details: `${potentialIssues}/${checked} elements (${issuePercentage}%) may have low contrast.`,
    };
  }

  return {
    id: 'color_contrast',
    status: 'pass',
    message: 'Color contrast appears adequate',
    details: `Checked ${checked} text elements. For WCAG 2.1 compliance, use dedicated contrast tools.`,
  };
}
