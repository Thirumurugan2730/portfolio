import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero';
import { AboutPage } from './pages/AboutPage';
import { DownloadToast } from './components/DownloadToast';
import { CodeIntro } from './components/CodeIntro';
import { PORTFOLIO_CONFIG } from './config/portfolio';

export function App() {
  const [showToast, setShowToast] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

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
    <BrowserRouter>
      <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
        {/* C++ Code Typing & Compilation Intro */}
        {showIntro && (
          <CodeIntro onComplete={() => setShowIntro(false)} />
        )}

        <main className="flex-1 flex flex-col">
          <Routes>
            <Route
              path="/"
              element={
                <Hero
                  onDownloadCV={handleDownloadCV}
                  onReplayIntro={() => setShowIntro(true)}
                />
              }
            />
            <Route path="/about" element={<AboutPage onDownloadCV={handleDownloadCV} />} />
          </Routes>
        </main>

        <DownloadToast
          isOpen={showToast}
          onClose={() => setShowToast(false)}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
