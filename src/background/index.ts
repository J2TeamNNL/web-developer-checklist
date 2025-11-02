// Background Service Worker for Manifest V3
import { logger } from '@/shared/utils/logger';

logger.info('Background service worker initialized', {}, 'background');

chrome.runtime.onMessage.addListener((message, _sender, _sendResponse) => {
  logger.debug('Message received', { type: message.type }, 'background');
  
  // Relay messages between content script and popup
  if (message.type === 'CHECK_COMPLETE' || message.type === 'CHECK_ERROR') {
    // Forward to popup if it's open
    chrome.runtime.sendMessage(message).catch(() => {
      // Popup might not be open, that's okay
      logger.debug('Popup not available', {}, 'background');
      console.log('Popup not available to receive message');
    });
  }

  return true;
});

// Handle extension icon click - open full-page app
chrome.action.onClicked.addListener((_tab) => {
  logger.info('Extension icon clicked - opening full-page app', {}, 'background');
  
  // Open full-page app in new tab
  chrome.tabs.create({
    url: chrome.runtime.getURL('index.html'),
  });
});

console.log('Web Developer Checklist background service worker loaded');
