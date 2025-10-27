import { CheckResult } from '@/shared/types';

export async function checkMediaQueries(): Promise<CheckResult> {
  let hasMediaQuery = false;

  // Check inline styles
  const styles = document.querySelectorAll('style');
  for (const style of styles) {
    if (style.textContent && style.textContent.includes('@media')) {
      hasMediaQuery = true;
      break;
    }
  }

  // Check link tags with media attribute
  if (!hasMediaQuery) {
    const links = document.querySelectorAll('link[media]');
    for (const link of links) {
      const media = link.getAttribute('media') || '';
      const standardMedia = ['print', 'screen', 'handheld', 'aural', 'projection', 'tv', 'braille'];
      if (!standardMedia.includes(media)) {
        hasMediaQuery = true;
        break;
      }
    }
  }

  // Check stylesheets for media rules
  if (!hasMediaQuery) {
    try {
      for (const stylesheet of Array.from(document.styleSheets)) {
        if (stylesheet.cssRules) {
          for (const rule of Array.from(stylesheet.cssRules)) {
            if ((rule as CSSMediaRule).media) {
              hasMediaQuery = true;
              break;
            }
          }
        }
        if (hasMediaQuery) break;
      }
    } catch (e) {
      // Cross-origin stylesheets might throw errors
      console.log('Could not access some stylesheets');
    }
  }

  return {
    id: 'media_queries',
    name: 'check_media_queries',
    status: hasMediaQuery ? 'pass' : 'fail',
    message: hasMediaQuery ? 'Media queries found' : 'No media queries detected',
    link: 'http://cssmediaqueries.com/what-are-css-media-queries.html',
    description: 'Media queries explained',
  };
}
