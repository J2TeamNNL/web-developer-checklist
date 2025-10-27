/**
 * Debug Logger Utility
 * Logs to console and optionally saves to chrome.storage for debugging
 */

export type LogLevel = 'info' | 'warn' | 'error' | 'debug';

export interface LogEntry {
  timestamp: number;
  level: LogLevel;
  message: string;
  data?: unknown;
  source: string;
}

class Logger {
  private maxLogs = 100; // Maximum number of logs to keep
  private enabled = true;

  constructor() {
    // Enable debug mode based on environment or storage
    chrome.storage?.local.get(['debugMode'], (result) => {
      this.enabled = result.debugMode ?? true; // Default: enabled
    });
  }

  private async saveLogs(entry: LogEntry) {
    if (!chrome.storage) return;

    try {
      const result = await chrome.storage.local.get(['debugLogs']);
      const logs: LogEntry[] = result.debugLogs || [];
      
      // Add new log
      logs.push(entry);
      
      // Keep only last N logs
      const trimmedLogs = logs.slice(-this.maxLogs);
      
      await chrome.storage.local.set({ debugLogs: trimmedLogs });
    } catch (error) {
      console.error('Failed to save log:', error);
    }
  }

  private log(level: LogLevel, message: string, data?: unknown, source = 'unknown') {
    const entry: LogEntry = {
      timestamp: Date.now(),
      level,
      message,
      data,
      source,
    };

    // Console output with emoji
    const emoji = {
      info: 'ℹ️',
      warn: '⚠️',
      error: '❌',
      debug: '🐛',
    };

    const logMethod = level === 'error' ? console.error : 
                     level === 'warn' ? console.warn : 
                     console.log;

    logMethod(
      `${emoji[level]} [${source}] ${message}`,
      data !== undefined ? data : ''
    );

    // Save to storage if enabled
    if (this.enabled) {
      this.saveLogs(entry);
    }
  }

  info(message: string, data?: unknown, source = 'app') {
    this.log('info', message, data, source);
  }

  warn(message: string, data?: unknown, source = 'app') {
    this.log('warn', message, data, source);
  }

  error(message: string, data?: unknown, source = 'app') {
    this.log('error', message, data, source);
  }

  debug(message: string, data?: unknown, source = 'app') {
    this.log('debug', message, data, source);
  }

  /**
   * Export all logs as JSON string
   */
  async exportLogs(): Promise<string> {
    if (!chrome.storage) return '[]';

    try {
      const result = await chrome.storage.local.get(['debugLogs']);
      const logs: LogEntry[] = result.debugLogs || [];
      return JSON.stringify(logs, null, 2);
    } catch (error) {
      console.error('Failed to export logs:', error);
      return '[]';
    }
  }

  /**
   * Download logs as a file
   */
  async downloadLogs() {
    const logsJson = await this.exportLogs();
    const blob = new Blob([logsJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `extension-logs-${timestamp}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  /**
   * Clear all logs
   */
  async clearLogs() {
    if (!chrome.storage) return;
    
    try {
      await chrome.storage.local.set({ debugLogs: [] });
      console.log('🗑️ Logs cleared');
    } catch (error) {
      console.error('Failed to clear logs:', error);
    }
  }

  /**
   * Toggle debug mode
   */
  async setDebugMode(enabled: boolean) {
    this.enabled = enabled;
    if (chrome.storage) {
      await chrome.storage.local.set({ debugMode: enabled });
    }
    console.log(`🐛 Debug mode: ${enabled ? 'ON' : 'OFF'}`);
  }
}

// Export singleton instance
export const logger = new Logger();

// Make it available globally for debugging in console
if (typeof window !== 'undefined') {
  (window as any).extensionLogger = logger;
}
