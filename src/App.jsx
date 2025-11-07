import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import HomePage from './pages/homepage';
import AboutPage from './pages/aboutpage';
import PortofolioPage from './pages/portofoliopage';
import NotFound from './pages/notfound';
import MainLoading from './entities/loading';
// Auto scroll ke atas setiap pindah halaman
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  if (isLoading) {
    return <MainLoading onFinish={() => setIsLoading(false)} />;
  }

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project" element={<PortofolioPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
