import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../entities/logo';
import MobileNavbar from './mobileNavbar';

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

  // Efek hide/show saat scroll
  useEffect(() => {
    const handleScroll = () => {
      if (Math.abs(window.scrollY - lastScrollY) > 5) {
        setShowNavbar(window.scrollY < lastScrollY);
        setLastScrollY(window.scrollY);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Navbar Desktop */}
      <nav
        className={`fixed top-0 left-0 w-full z-[200] transition-transform duration-300
        bg-black/10 backdrop-blur-md ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="max-w-7xl mx-auto py-2 px-6 md:px-16 flex justify-between items-center">
          {/* Logo */}
          <div className="hidden md:block">
            <Logo />
          </div>

          {/* Menu Desktop */}
          <ul className="hidden md:flex space-x-8 text-lg">
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

      {/* Navbar Mobile */}
      <div
        className={`fixed top-0 left-0 w-full z-[210] md:hidden transition-transform duration-300
        bg-black/10 backdrop-blur-md ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <MobileNavbar navItems={navItems} isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
        </div>
      </div>

      <div
        className={`fixed inset-0 z-[100] transition-all duration-300
        ${isMobileMenuOpen ? 'opacity-100 backdrop-blur-md bg-black/50 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Spacer biar konten tidak ketutup navbar */}
      <div className="h-16 md:h-20" />
    </>
  );
};

export default Navbar;
