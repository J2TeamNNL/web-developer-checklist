import { CheckResult } from '@/shared/types';

export async function checkFontsLoading(): Promise<CheckResult> {
  // Check for font-display in CSS (via computed styles)
  let fontsWithDisplay = 0;
  let customFonts = 0;

  // Check font face rules if available
  try {
    const sheets = Array.from(document.styleSheets);
    for (const sheet of sheets) {
      try {
        const rules = Array.from(sheet.cssRules || []);
        for (const rule of rules) {
          if (rule instanceof CSSFontFaceRule) {
            customFonts++;
            const fontDisplay = rule.style.getPropertyValue('font-display');
            if (fontDisplay) {
              fontsWithDisplay++;
            }
          }
        }
      } catch (e) {
        // Cross-origin stylesheet, skip
      }
    }
  } catch (e) {
    // Ignore errors
  }

  if (customFonts === 0) {
    return {
      id: 'fonts_loading',
      status: 'na',
      message: 'No custom fonts detected',
      details: 'Using system fonts or fonts not accessible to content script.',
    };
  }

  if (fontsWithDisplay === 0) {
    return {
      id: 'fonts_loading',
      status: 'fail',
      message: 'Custom fonts without font-display',
      details: `Found ${customFonts} @font-face rules without font-display. Add font-display: swap for better performance.`,
    };
  }

  const percentage = Math.round((fontsWithDisplay / customFonts) * 100);

  if (percentage < 100) {
    return {
      id: 'fonts_loading',
      status: 'na',
      message: 'Some fonts have font-display',
      details: `${fontsWithDisplay}/${customFonts} fonts (${percentage}%) use font-display.`,
    };
  }

  return {
    id: 'fonts_loading',
    status: 'pass',
    message: 'Fonts optimized with font-display',
    details: `All ${customFonts} custom fonts use font-display.`,
  };
}
