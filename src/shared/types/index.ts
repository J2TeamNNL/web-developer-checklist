export type CheckStatus = 'pass' | 'fail' | 'na' | 'loading';

export interface CheckResult {
  id: string;
  name?: string;
  status: CheckStatus;
  message?: string;
  details?: string | Record<string, unknown>;
  link?: string;
  description?: string;
}

export interface CategoryResults {
  name: string;
  icon: string;
  checks: CheckResult[];
  summary: {
    total: number;
    passed: number;
    failed: number;
    na: number;
  };
}

export interface CheckResults {
  url: string;
  currentPage: string;
  timestamp: number;
  categories: Record<string, CategoryResults>;
}

export interface RuleDefinition {
  id: string;
  category: string;
  name: string;
  description: string;
  link: string;
  check: () => Promise<CheckResult> | CheckResult;
}

export interface UserSettings {
  theme: 'light' | 'dark' | 'auto';
  language: string;
  autoCheck: boolean;
  enabledChecks: string[];
}

export type MessageType =
  | 'CHECK_START'
  | 'CHECK_PROGRESS'
  | 'CHECK_COMPLETE'
  | 'CHECK_ERROR'
  | 'RE_CHECK'
  | 'GET_SETTINGS'
  | 'UPDATE_SETTINGS';

export interface Message<T = unknown> {
  type: MessageType;
  data?: T;
}
