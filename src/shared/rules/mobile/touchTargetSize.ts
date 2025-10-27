import { CheckResult } from '@/shared/types';

export async function checkTouchTargetSize(): Promise<CheckResult> {
  // Check for interactive elements (buttons, links, inputs)
  const interactiveElements = document.querySelectorAll('button, a, input, select, textarea, [role="button"], [onclick]');
  
  if (interactiveElements.length === 0) {
    return {
      id: 'touch_target_size',
      status: 'na',
      message: 'No interactive elements found',
      details: 'No buttons or links to check.',
    };
  }

  let tooSmall = 0;
  let total = 0;
  const minSize = 44; // Minimum recommended touch target size (44x44 pixels)

  interactiveElements.forEach((el) => {
    if (!(el instanceof HTMLElement)) return;
    
    // Skip hidden elements
    const style = window.getComputedStyle(el);
    if (style.display === 'none' || style.visibility === 'hidden') return;
    
    const rect = el.getBoundingClientRect();
    
    // Skip if element is not visible in viewport
    if (rect.width === 0 || rect.height === 0) return;
    
    total++;
    
    // Check if touch target is too small
    if (rect.width < minSize || rect.height < minSize) {
      tooSmall++;
    }
  });

  if (total === 0) {
    return {
      id: 'touch_target_size',
      status: 'na',
      message: 'No visible interactive elements',
      details: 'No visible elements to check.',
    };
  }

  const percentage = Math.round(((total - tooSmall) / total) * 100);

  if (tooSmall === total) {
    return {
      id: 'touch_target_size',
      status: 'fail',
      message: 'All touch targets are too small',
      details: `All ${total} interactive elements are smaller than ${minSize}x${minSize}px. Increase size for better mobile usability.`,
    };
  }

  if (tooSmall > 0) {
    return {
      id: 'touch_target_size',
      status: 'na',
      message: 'Some touch targets are too small',
      details: `${tooSmall}/${total} elements (${100 - percentage}%) are smaller than ${minSize}x${minSize}px.`,
    };
  }

  return {
    id: 'touch_target_size',
    status: 'pass',
    message: 'Touch targets are appropriately sized',
    details: `All ${total} interactive elements meet the ${minSize}x${minSize}px minimum size.`,
  };
}
