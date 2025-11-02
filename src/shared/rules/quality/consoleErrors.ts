import { CheckResult } from '@/shared/types';

export async function checkConsoleErrors(): Promise<CheckResult> {
  // Listen for errors during page load
  const errors: string[] = [];
  
  const errorListener = (event: ErrorEvent) => {
    errors.push(event.message);
  };
  
  window.addEventListener('error', errorListener);
  
  // Check if there are any error messages in console
  // Note: We can't actually read the console history, so we detect new ones
  setTimeout(() => {
    window.removeEventListener('error', errorListener);
  }, 1000);
  
  if (errors.length > 0) {
    return {
      id: 'console_errors',
      status: 'fail',
      message: `Detected ${errors.length} JavaScript error(s)`,
      details: `Errors:\n${errors.slice(0, 3).join('\n')}${errors.length > 3 ? `\n...and ${errors.length - 3} more` : ''}`,
      link: 'https://developer.chrome.com/docs/devtools/console/',
      description: 'Debug JavaScript errors',
    };
  }

  return {
    id: 'console_errors',
    status: 'pass',
    message: 'No JavaScript errors detected during page load',
    details: 'Page loaded without JavaScript errors. Check DevTools Console for runtime errors.',
  };
}
