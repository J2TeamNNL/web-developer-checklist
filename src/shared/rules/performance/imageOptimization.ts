import { CheckResult } from '@/shared/types';

export async function checkImageOptimization(): Promise<CheckResult> {
  const images = document.querySelectorAll('img');
  
  if (images.length === 0) {
    return {
      id: 'image_optimization',
      status: 'na',
      message: 'No images found on page',
      details: 'No images to optimize.',
    };
  }

  let lazyLoadCount = 0;
  let missingAltCount = 0;
  let totalImages = images.length;

  images.forEach((img) => {
    // Check lazy loading
    if (img.loading === 'lazy' || img.getAttribute('data-src')) {
      lazyLoadCount++;
    }
    
    // Check alt (for context)
    if (!img.alt) {
      missingAltCount++;
    }
  });

  const lazyPercentage = Math.round((lazyLoadCount / totalImages) * 100);

  if (lazyLoadCount === 0) {
    return {
      id: 'image_optimization',
      status: 'fail',
      message: 'No lazy loading on images',
      details: `Found ${totalImages} images without lazy loading. Add loading="lazy" to improve performance.`,
    };
  }

  if (lazyPercentage < 50) {
    return {
      id: 'image_optimization',
      status: 'na',
      message: 'Some images use lazy loading',
      details: `${lazyLoadCount}/${totalImages} images (${lazyPercentage}%) use lazy loading.`,
    };
  }

  return {
    id: 'image_optimization',
    status: 'pass',
    message: 'Images are optimized with lazy loading',
    details: `${lazyLoadCount}/${totalImages} images (${lazyPercentage}%) use lazy loading.`,
  };
}
