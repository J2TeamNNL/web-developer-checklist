import { CheckResult } from '@/shared/types';

export async function checkLandmarks(): Promise<CheckResult> {
  const landmarks = document.querySelectorAll(
    '[role], main, footer, header, aside, section, article, nav'
  );

  const hasLandmarks = landmarks.length > 0;

  return {
    id: 'landmarks',
    name: 'check_landmarks',
    status: hasLandmarks ? 'pass' : 'fail',
    message: hasLandmarks
      ? `${landmarks.length} ARIA landmarks found`
      : 'No ARIA landmarks found',
    link: 'http://accessibility.oit.ncsu.edu/blog/2011/06/30/using-aria-landmarks-a-demonstration/',
    description: 'Using Landmarks',
  };
}
