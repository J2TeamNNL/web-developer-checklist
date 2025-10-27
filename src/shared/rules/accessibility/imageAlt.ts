import { CheckResult } from '@/shared/types';

export async function checkImageAlt(): Promise<CheckResult> {
  const imagesWithoutAlt = document.querySelectorAll('img:not([alt])');
  const allImages = document.querySelectorAll('img');
  const hasAltOnAll = imagesWithoutAlt.length === 0 && allImages.length > 0;

  return {
    id: 'image_alt',
    name: 'check_image_alt',
    status: hasAltOnAll ? 'pass' : imagesWithoutAlt.length === 0 ? 'na' : 'fail',
    message:
      allImages.length === 0
        ? 'No images found'
        : hasAltOnAll
          ? `All ${allImages.length} images have alt attributes`
          : `${imagesWithoutAlt.length} of ${allImages.length} images missing alt attributes`,
    link: 'http://accessibility.psu.edu/images',
    description: "Image 'alt' attribute tips",
  };
}
