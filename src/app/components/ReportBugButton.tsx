import './ReportBugButton.css';

export function ReportBugButton() {
  const handleClick = () => {
    console.log('🐛 [User] Report Bug link clicked - Opening Messenger');
  };
  
  return (
    <a 
      href="https://www.messenger.com/t/j2teamnnl/" 
      target="_blank"
      rel="noopener noreferrer"
      className="report-bug-btn"
      onClick={handleClick}
      title="Report bug via Messenger"
    >
      🐛 Report Bug
    </a>
  );
}
