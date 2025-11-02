import { useState, useEffect } from 'react';
import { CheckResults } from '@/shared/types';
import { Header } from './components/Header';
import { CategorySection } from './components/CategorySection';
import { ProgressBar } from './components/ProgressBar';
import { Footer } from './components/Footer';
import { useToast } from './hooks/useToast';
import { useFilter } from './hooks/useFilter';
import { Toast } from './components/Toast';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { FilterDropdown } from './components/FilterDropdown';
import { ReportBugButton } from './components/ReportBugButton';
import { ExportPanel } from './components/ExportPanel';
import './App.css';

function App() {
  const [results, setResults] = useState<CheckResults | null>(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState({ current: 0, total: 36, checkName: '' });
  const [showExportPanel, setShowExportPanel] = useState(false);
  
  const { toasts, showToast, removeToast } = useToast();
  const { showIncompleteOnly, setShowIncompleteOnly, filteredResults } = useFilter(results);

  useEffect(() => {
    console.log('🚀 [App] Extension loaded');
    
    // Listen for results from content script
    chrome.runtime.onMessage.addListener((message) => {
      console.log('📨 [App] Message received:', message.type);
      if (message.type === 'CHECK_COMPLETE') {
        setResults(message.data);
        setLoading(false);
      } else if (message.type === 'CHECK_PROGRESS') {
        setProgress(message.data);
      }
    });

    console.log('🔍 [App] Finding target tab...');
    
    // Get all tabs and find a valid one to analyze
    chrome.tabs.query({}, (tabs) => {
      console.log(`📑 [App] Found ${tabs.length} total tabs`);
      // Find the most recent non-extension, non-chrome tab
      const validTabs = tabs.filter(tab => 
        tab.url && 
        !tab.url.startsWith('chrome://') && 
        !tab.url.startsWith('chrome-extension://')
      );
      
      // Get the first valid tab
      const targetTab = validTabs[0];
      
      if (targetTab?.id) {
        const tabId = targetTab.id;
        
        // Try to send message with automatic retry and injection
        const sendMessage = async () => {
          try {
            // First attempt
            console.log('🔔 Sending message to tab...');
            await chrome.tabs.sendMessage(tabId, { type: 'RUN_CHECKS' });
            console.log('✅ Message sent successfully!');
          } catch (firstError) {
            console.log('⚠️ First attempt failed, injecting script...');
            
            try {
              // Inject content script
              await chrome.scripting.executeScript({
                target: { tabId },
                files: ['assets/index.ts-BjPnvXbb.js'],
              });
              console.log('💉 Script injected, waiting 2 seconds...');
              
              // Wait longer for script to initialize
              await new Promise(resolve => setTimeout(resolve, 2000));
              
              // Retry sending message
              console.log('🔔 Retrying message...');
              await chrome.tabs.sendMessage(tabId, { type: 'RUN_CHECKS' });
              console.log('✅ Message sent after injection!');
            } catch (secondError) {
              console.error('❌ Failed after injection:', secondError);
              setLoading(false);
            }
          }
        };
        
        sendMessage();
      } else {
        console.log('No website tab found');
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    const progressPercent = progress.total > 0 
      ? Math.round((progress.current / progress.total) * 100) 
      : 0;

    return (
      <div className="app">
        <Header />
        <div className="loading">
          <div className="spinner"></div>
          <p>Analyzing website...</p>
          <div className="progress-container">
            <div className="progress-bar-wrapper">
              <div 
                className="progress-bar-fill" 
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
            <p className="progress-text">
              {progress.current}/{progress.total} - {progress.checkName || 'Preparing...'}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!results) {
    return (
      <div className="app">
        <Header />
        <div className="error">
          <p>Failed to analyze website</p>
        </div>
      </div>
    );
  }

  const totalPassed = Object.values(results.categories).reduce(
    (sum, cat) => sum + cat.summary.passed,
    0
  );
  const totalChecks = Object.values(results.categories).reduce(
    (sum, cat) => sum + cat.summary.total,
    0
  );

  return (
    <div className="app">
      <Header />
      
      {/* Toolbar */}
      <div className="toolbar">
        <LanguageSwitcher onLanguageChange={(lang) => {
          console.log('🌍 [User] Changed language to:', lang);
          showToast(`Language: ${lang}`, 'info');
        }} />
        
        <FilterDropdown 
          showIncompleteOnly={showIncompleteOnly}
          onToggle={(incomplete) => {
            console.log('🔍 [User] Filter toggled:', incomplete ? 'incomplete only' : 'all checks');
            setShowIncompleteOnly(incomplete);
            showToast(incomplete ? 'Showing incomplete only' : 'Showing all checks', 'info');
          }}
        />
        
        <button 
          className="export-btn" 
          onClick={() => {
            console.log('📋 [User] Export button clicked');
            setShowExportPanel(true);
          }}
          title="Export report to list"
        >
          📊 Export Report
        </button>
        
        <ReportBugButton />
      </div>

      <div className="content">
        <ProgressBar passed={totalPassed} total={totalChecks} />
        <div className="results">
          {Object.values(filteredResults?.categories || {}).map((category) => (
            <CategorySection key={category.name} category={category} />
          ))}
        </div>
      </div>
      
      {showExportPanel && (
        <ExportPanel 
          results={results} 
          onCopy={() => {
            showToast('Copied to clipboard!', 'success');
            setShowExportPanel(false);
          }}
          onClose={() => setShowExportPanel(false)}
        />
      )}
      
      <Toast toasts={toasts} onClose={removeToast} />
      <Footer />
    </div>
  );
}

export default App;
