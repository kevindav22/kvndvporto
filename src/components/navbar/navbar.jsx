// File: src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../entities/logo';
import MobileNavbar from './mobileNavbar';
// Hapus import MobileNavbar karena sudah ada di atas

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Project', path: '/project' },
];

const Navbar = () => {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // handle scroll direction
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Navbar Desktop */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 bg-black/10 backdrop-blur-md ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="py-2 px-6 md:px-20 justify-between items-center hidden md:flex">
          <Logo />
          <ul className="flex space-x-8 text-lg">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className={`px-4 py-2 rounded-md transition duration-300 ${location.pathname === item.path ? 'text-[#C4A77D]' : 'text-white hover:text-[#C4A77D]'}`}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className={`fixed top-0 left-0 w-full z-[110] transition-transform duration-300 bg-black/10 backdrop-blur-md md:hidden ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
        <MobileNavbar navItems={navItems} isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
      </div>
      <div
        className={`fixed inset-0 transition-opacity duration-300 z-[100] ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMobileMenuOpen(false)}
        style={{
          // Background gelap solid 60%
          backgroundColor: isMobileMenuOpen ? 'rgba(0, 0, 0, 0.6)' : 'transparent',
          // Efek blur pada konten di belakangnya (layar utama)
          WebkitBackdropFilter: isMobileMenuOpen ? 'blur(10px)' : 'none',
          backdropFilter: isMobileMenuOpen ? 'blur(10px)' : 'none',
        }}
      />

      <div className="h-16 md:h-18" />
    </>
  );
};

export default Navbar;
