export const CATEGORIES = {
  SEO: {
    id: 'seo',
    name: 'category_seo',
    icon: '🔍',
    color: '#204ecf',
  },
  MOBILE: {
    id: 'mobile',
    name: 'category_mobile',
    icon: '📱',
    color: '#00cc83',
  },
  USABILITY: {
    id: 'usability',
    name: 'category_usability',
    icon: '👤',
    color: '#e59c01',
  },
  ACCESSIBILITY: {
    id: 'accessibility',
    name: 'category_accessibility',
    icon: '♿',
    color: '#9b59b6',
  },
  SOCIAL: {
    id: 'social',
    name: 'category_social',
    icon: '📱',
    color: '#3498db',
  },
  PERFORMANCE: {
    id: 'performance',
    name: 'category_performance',
    icon: '⚡',
    color: '#f39c12',
  },
  SECURITY: {
    id: 'security',
    name: 'category_security',
    icon: '🔒',
    color: '#e74c3c',
  },
  ANALYTICS: {
    id: 'analytics',
    name: 'category_analytics',
    icon: '📊',
    color: '#16a085',
  },
} as const;

export type CategoryId = keyof typeof CATEGORIES;
