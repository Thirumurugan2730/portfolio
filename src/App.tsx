import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutPlaceholder } from './components/AboutPlaceholder';
import { Footer } from './components/Footer';
import { DownloadToast } from './components/DownloadToast';
import { PORTFOLIO_CONFIG } from './config/portfolio';

export function App() {
  const [showToast, setShowToast] = useState(false);

  const handleDownloadCV = () => {
    // Trigger download of the PDF file
    const link = document.createElement('a');
    link.href = PORTFOLIO_CONFIG.cv.downloadUrl;
    link.setAttribute('download', PORTFOLIO_CONFIG.cv.fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Show feedback toast confirming download & placeholder status
    setShowToast(true);
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      <Header />
      <main className="flex-1">
        <Hero onDownloadCV={handleDownloadCV} />
        <AboutPlaceholder />
      </main>
      <Footer />
      <DownloadToast
        isOpen={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
}

export default App;
