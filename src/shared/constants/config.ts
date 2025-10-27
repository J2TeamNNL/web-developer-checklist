export const DEFAULT_SETTINGS = {
  theme: 'dark' as const,
  language: 'en',
  autoCheck: true,
  enabledChecks: [],
};

export const STORAGE_KEYS = {
  SETTINGS: 'wdc_settings',
  LAST_CHECK: 'wdc_last_check',
  CACHE: 'wdc_cache',
} as const;

export const TIMEOUTS = {
  CHECK: 5000, // 5 seconds per check
  NETWORK: 10000, // 10 seconds for network requests
} as const;

export const LINKS = {
  HELP: 'https://www.toptal.com/developers/webdevchecklist',
  GITHUB: 'https://github.com/yourusername/web-developer-checklist',
  REPORT_ISSUE: 'https://github.com/yourusername/web-developer-checklist/issues',
} as const;
