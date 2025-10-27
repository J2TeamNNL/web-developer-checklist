import { CheckResult } from '@/shared/types';

export async function checkFormLabels(): Promise<CheckResult> {
  const inputs = document.querySelectorAll('input:not([type="hidden"]):not([type="submit"]):not([type="button"]), textarea, select');
  
  if (inputs.length === 0) {
    return {
      id: 'form_labels',
      status: 'na',
      message: 'No form inputs found',
      details: 'No form fields to check.',
    };
  }

  let withoutLabel = 0;
  let total = inputs.length;

  inputs.forEach((input) => {
    const id = input.id;
    const ariaLabel = input.getAttribute('aria-label');
    const ariaLabelledBy = input.getAttribute('aria-labelledby');
    
    // Check if input has associated label
    const hasLabel = id && document.querySelector(`label[for="${id}"]`);
    const hasAriaLabel = ariaLabel || ariaLabelledBy;
    
    // Input should have a label, aria-label, or aria-labelledby
    if (!hasLabel && !hasAriaLabel) {
      withoutLabel++;
    }
  });

  if (withoutLabel === total) {
    return {
      id: 'form_labels',
      status: 'fail',
      message: 'No form labels found',
      details: `All ${total} form inputs are missing labels. Add <label> tags or ARIA labels.`,
    };
  }

  if (withoutLabel > 0) {
    const percentage = Math.round(((total - withoutLabel) / total) * 100);
    return {
      id: 'form_labels',
      status: 'na',
      message: 'Some form inputs missing labels',
      details: `${withoutLabel}/${total} inputs without labels (${percentage}% labeled).`,
    };
  }

  return {
    id: 'form_labels',
    status: 'pass',
    message: 'All form inputs have labels',
    details: `All ${total} form inputs are properly labeled.`,
  };
}
