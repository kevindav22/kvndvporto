import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import HomePage from './pages/homepage';
import AboutPage from './pages/aboutpage';
import PortofolioPage from './pages/portofoliopage';
import PdfPage from './components/pdf/pdfpage';

// Komponen untuk auto scroll ke atas saat route berubah
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // durasi animasi (ms)
      once: true,     // animasi hanya jalan sekali
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project" element={<PortofolioPage />} />
        <Route path="/cv" element={<PdfPage />} />
      </Routes>
    </Router>
  );
};

export default App;
