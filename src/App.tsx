import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { CertificatesPage } from './pages/CertificatesPage';
import { ContactPage } from './pages/ContactPage';
import { DownloadToast } from './components/DownloadToast';
import { CodeIntro } from './components/CodeIntro';
import { PORTFOLIO_CONFIG } from './config/portfolio';

export function App() {
  const [showToast, setShowToast] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = PORTFOLIO_CONFIG.cv.downloadUrl;
    link.setAttribute('download', PORTFOLIO_CONFIG.cv.fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setShowToast(true);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#08080a] text-zinc-100 flex flex-col font-sans selection:bg-violet-500/20 selection:text-violet-200">
        {/* Terminal Code Introduction on initial visit */}
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
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/certificates" element={<CertificatesPage />} />
            <Route path="/contact" element={<ContactPage />} />
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
