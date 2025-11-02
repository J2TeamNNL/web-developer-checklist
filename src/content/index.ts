import { CheckResults, CheckResult } from '@/shared/types';
import { logger } from '@/shared/utils/logger';
import { CATEGORIES } from '@/shared/constants/categories';

// Import rules
import { checkStructuredData } from '@/shared/rules/seo/structuredData';
import { checkMetaDescription } from '@/shared/rules/seo/metaDescription';
import { checkCanonicalUrl } from '@/shared/rules/seo/canonicalUrl';
import { checkRobotsMeta } from '@/shared/rules/seo/robotsMeta';
import { checkPageTitle } from '@/shared/rules/seo/pageTitle';
import { checkHeadingsHierarchy } from '@/shared/rules/seo/headingsHierarchy';
import { checkViewport } from '@/shared/rules/mobile/viewport';
import { checkMediaQueries } from '@/shared/rules/mobile/mediaQueries';
import { checkTouchTargetSize } from '@/shared/rules/mobile/touchTargetSize';
import { checkTextReadability } from '@/shared/rules/mobile/textReadability';
import { checkImageAlt } from '@/shared/rules/accessibility/imageAlt';
import { checkLandmarks } from '@/shared/rules/accessibility/landmarks';
import { checkAriaRoles } from '@/shared/rules/accessibility/ariaRoles';
import { checkFormLabels } from '@/shared/rules/accessibility/formLabels';
import { checkColorContrast } from '@/shared/rules/accessibility/colorContrast';
import { checkFavicon } from '@/shared/rules/usability/favicon';
import { checkFriendlyUrls } from '@/shared/rules/usability/friendlyUrls';
import { checkOpenGraph } from '@/shared/rules/social/opengraph';
import { checkIOSIntegration } from '@/shared/rules/social/iosIntegration';
import { checkDOMSize } from '@/shared/rules/performance/domSize';
import { checkImageOptimization } from '@/shared/rules/performance/imageOptimization';
import { checkFontsLoading } from '@/shared/rules/performance/fontsLoading';
import { checkResourceHints } from '@/shared/rules/performance/resourceHints';
import { checkHTTPS } from '@/shared/rules/security/https';
import { checkGoogleAnalytics } from '@/shared/rules/analytics/googleAnalytics';
import { checkGoogleTagManager } from '@/shared/rules/analytics/googleTagManager';
import { checkFacebookPixel } from '@/shared/rules/analytics/facebookPixel';
// v3.1 - New Security checks
import { checkCSP } from '@/shared/rules/security/csp';
import { checkMixedContent } from '@/shared/rules/security/mixedContent';
// v3.1 - New SEO checks
import { checkXMLSitemap } from '@/shared/rules/seo/xmlSitemap';
import { checkTwitterCards } from '@/shared/rules/seo/twitterCards';
import { checkHreflang } from '@/shared/rules/seo/hreflang';
// v3.1 - New Quality checks
import { checkConsoleErrors } from '@/shared/rules/quality/consoleErrors';
import { checkBrokenLinks } from '@/shared/rules/quality/brokenLinks';
// v3.1 - New Privacy checks
import { checkCookieConsent } from '@/shared/rules/privacy/cookieConsent';
import { checkPrivacyPolicy } from '@/shared/rules/privacy/privacyPolicy';

async function runAllChecks(): Promise<CheckResults> {
  logger.info('Starting checks...', { url: window.location.href }, 'content-script');
  const startTime = Date.now();
  
  const results: CheckResults = {
    url: `${location.protocol}//${location.host}`,
    currentPage: window.location.href,
    timestamp: Date.now(),
    categories: {},
  };

  // Initialize categories
  Object.values(CATEGORIES).forEach((category) => {
    results.categories[category.id] = {
      name: category.name,
      icon: category.icon,
      checks: [],
      summary: {
        total: 0,
        passed: 0,
        failed: 0,
        na: 0,
      },
    };
  });

  const checks: CheckResult[] = [];
  const totalChecks = 36; // v3.1: 27 + 9 new checks
  let completedChecks = 0;

  // Helper to update progress
  const updateProgress = (checkName: string) => {
    completedChecks++;
    const progress = Math.round((completedChecks / totalChecks) * 100);
    logger.debug(`[${completedChecks}/${totalChecks}] ${checkName}`, { progress }, 'content-script');
    
    // Send progress update to popup
    chrome.runtime.sendMessage({
      type: 'CHECK_PROGRESS',
      data: { 
        current: completedChecks, 
        total: totalChecks, 
        progress,
        checkName 
      },
    }).catch(() => {
      // Popup might not be open
    });
  };

  try {
    // SEO checks (6)
    logger.info('📊 Starting SEO checks...', {}, 'content-script');
    updateProgress('Structured Data');
    checks.push(await checkStructuredData());
    
    updateProgress('Meta Description');
    checks.push(await checkMetaDescription());
    
    updateProgress('Canonical URL');
    checks.push(await checkCanonicalUrl());
    
    updateProgress('Robots Meta');
    checks.push(await checkRobotsMeta());
    
    updateProgress('Page Title');
    checks.push(await checkPageTitle());
    
    updateProgress('Headings Hierarchy');
    checks.push(await checkHeadingsHierarchy());
    
    // v3.1 - Additional SEO checks (3)
    updateProgress('XML Sitemap');
    checks.push(await checkXMLSitemap());
    updateProgress('Twitter Cards');
    checks.push(await checkTwitterCards());
    updateProgress('Hreflang Tags');
    checks.push(await checkHreflang());
    
    // Mobile checks (4)
    logger.info('📱 Starting Mobile checks...', {}, 'content-script');
    updateProgress('Viewport');
    checks.push(await checkViewport());
    updateProgress('Media Queries');
    checks.push(await checkMediaQueries());
    updateProgress('Touch Target Size');
    checks.push(await checkTouchTargetSize());
    updateProgress('Text Readability');
    checks.push(await checkTextReadability());
    
    // Usability checks (2)
    logger.info('👤 Starting Usability checks...', {}, 'content-script');
    updateProgress('Favicon');
    checks.push(await checkFavicon());
    updateProgress('Friendly URLs');
    checks.push(await checkFriendlyUrls());
    
    // Accessibility checks (5)
    logger.info('♿ Starting Accessibility checks...', {}, 'content-script');
    updateProgress('Image Alt');
    checks.push(await checkImageAlt());
    updateProgress('Landmarks');
    checks.push(await checkLandmarks());
    updateProgress('ARIA Roles');
    checks.push(await checkAriaRoles());
    updateProgress('Form Labels');
    checks.push(await checkFormLabels());
    updateProgress('Color Contrast');
    checks.push(await checkColorContrast());
    
    // Social Media checks (2)
    logger.info('📱 Starting Social Media checks...', {}, 'content-script');
    updateProgress('OpenGraph');
    checks.push(await checkOpenGraph());
    updateProgress('iOS Integration');
    checks.push(await checkIOSIntegration());
    
    // Performance checks (4)
    logger.info('⚡ Starting Performance checks...', {}, 'content-script');
    updateProgress('DOM Size');
    checks.push(await checkDOMSize());
    updateProgress('Image Optimization');
    checks.push(await checkImageOptimization());
    updateProgress('Fonts Loading');
    checks.push(await checkFontsLoading());
    updateProgress('Resource Hints');
    checks.push(await checkResourceHints());
    
    // Security checks (3)
    logger.info('🔒 Starting Security checks...', {}, 'content-script');
    updateProgress('HTTPS');
    checks.push(await checkHTTPS());
    updateProgress('CSP Headers');
    checks.push(await checkCSP());
    updateProgress('Mixed Content');
    checks.push(await checkMixedContent());
    
    // Analytics checks (3)
    logger.info('📊 Starting Analytics checks...', {}, 'content-script');
    updateProgress('Google Analytics');
    checks.push(await checkGoogleAnalytics());
    updateProgress('Google Tag Manager');
    checks.push(await checkGoogleTagManager());
    updateProgress('Facebook Pixel');
    checks.push(await checkFacebookPixel());
    
    // v3.1 - Code Quality checks (2)
    logger.info('🧩 Starting Code Quality checks...', {}, 'content-script');
    updateProgress('Console Errors');
    checks.push(await checkConsoleErrors());
    updateProgress('Broken Links');
    checks.push(await checkBrokenLinks());
    
    // v3.1 - Privacy checks (2)
    logger.info('🔐 Starting Privacy checks...', {}, 'content-script');
    updateProgress('Cookie Consent');
    checks.push(await checkCookieConsent());
    updateProgress('Privacy Policy');
    checks.push(await checkPrivacyPolicy());
  } catch (error) {
    logger.error('Error running checks', error, 'content-script');
    console.error('Error running checks:', error);
  }

  // Organize checks by category
  checks.forEach((check) => {
    const categoryId = getCategoryForCheck(check.id);
    if (categoryId && results.categories[categoryId]) {
      results.categories[categoryId].checks.push(check);
      results.categories[categoryId].summary.total++;

      if (check.status === 'pass') {
        results.categories[categoryId].summary.passed++;
      } else if (check.status === 'fail') {
        results.categories[categoryId].summary.failed++;
      } else if (check.status === 'na') {
        results.categories[categoryId].summary.na++;
      }
    }
  });

  const elapsed = Date.now() - startTime;
  logger.info('✅ Checks completed', { 
    total: checks.length,
    categories: Object.keys(results.categories).length,
    elapsed: `${elapsed}ms`,
    elapsedSeconds: `${(elapsed / 1000).toFixed(2)}s`
  }, 'content-script');

  return results;
}

function getCategoryForCheck(checkId: string): string {
  const categoryMap: Record<string, string> = {
    // SEO (9 checks)
    structured_data: 'seo',
    meta_description: 'seo',
    canonical_url: 'seo',
    robots_meta: 'seo',
    page_title: 'seo',
    headings_hierarchy: 'seo',
    xml_sitemap: 'seo', // v3.1
    twitter_cards: 'seo', // v3.1
    hreflang: 'seo', // v3.1
    // Mobile
    viewport: 'mobile',
    media_queries: 'mobile',
    touch_target_size: 'mobile',
    text_readability: 'mobile',
    // Usability
    favicon: 'usability',
    friendly_urls: 'usability',
    // Accessibility
    image_alt: 'accessibility',
    landmarks: 'accessibility',
    aria_roles: 'accessibility',
    form_labels: 'accessibility',
    color_contrast: 'accessibility',
    // Social Media
    opengraph: 'social',
    ios_integration: 'social',
    // Performance
    dom_size: 'performance',
    image_optimization: 'performance',
    fonts_loading: 'performance',
    resource_hints: 'performance',
    // Security (3 checks)
    https: 'security',
    csp: 'security', // v3.1
    mixed_content: 'security', // v3.1
    // Analytics (3 checks)
    google_analytics: 'analytics',
    google_tag_manager: 'analytics',
    facebook_pixel: 'analytics',
    // Code Quality (2 checks) - v3.1
    console_errors: 'quality',
    broken_links: 'quality',
    // Privacy (2 checks) - v3.1
    cookie_consent: 'privacy',
    privacy_policy: 'privacy',
  };
  return categoryMap[checkId] || 'seo';
}

// Listen for message from popup to run checks
chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.type === 'RUN_CHECKS') {
    logger.info('Received RUN_CHECKS message from popup', {}, 'content-script');
    
    runAllChecks()
      .then((results) => {
        chrome.runtime.sendMessage({
          type: 'CHECK_COMPLETE',
          data: results,
        });
        sendResponse({ success: true });
      })
      .catch((error) => {
        logger.error('Failed to run checks', error, 'content-script');
        console.error('Failed to run checks:', error);
        chrome.runtime.sendMessage({
          type: 'CHECK_ERROR',
          data: { error: String(error) },
        });
        sendResponse({ success: false, error: String(error) });
      });
    
    return true; // Keep the message channel open for async response
  }
});
