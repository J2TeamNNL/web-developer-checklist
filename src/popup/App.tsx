import { useState, useEffect } from 'react';
import { CheckResults } from '@/shared/types';
import { Header } from './components/Header';
import { CategorySection } from './components/CategorySection';
import { ProgressBar } from './components/ProgressBar';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  const [results, setResults] = useState<CheckResults | null>(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState({ current: 0, total: 27, checkName: '' });

  useEffect(() => {
    // Listen for results from content script
    chrome.runtime.onMessage.addListener((message) => {
      if (message.type === 'CHECK_COMPLETE') {
        setResults(message.data);
        setLoading(false);
      } else if (message.type === 'CHECK_PROGRESS') {
        setProgress(message.data);
      }
    });

    // Trigger checks on active tab
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]?.id) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          files: ['src/content/index.js'],
        });
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
      <div className="content">
        <ProgressBar passed={totalPassed} total={totalChecks} />
        <div className="results">
          {Object.values(results.categories).map((category) => (
            <CategorySection key={category.name} category={category} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
