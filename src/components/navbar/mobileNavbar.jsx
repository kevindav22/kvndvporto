import { Link, useLocation } from 'react-router-dom';
import Logo from '../../entities/logo';
import { FiMenu, FiX } from 'react-icons/fi';

// Menerima isOpen dan setIsOpen sebagai props
const MobileNavbar = ({ navItems, isOpen, setIsOpen }) => {
  const location = useLocation();

  return (
    <nav className="relative flex items-center justify-between px-6 py-2">
      {/* Logo */}
      <Logo />
      <button
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((v) => !v)}
        className="text-white text-2xl focus:outline-none relative z-[111]" // Z-index sedikit lebih tinggi dari parent
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>
      <div
        className={`fixed top-0 left-0 h-full w-3/4 max-w-xs transform transition-transform duration-300 z-[120]
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="h-full bg-black p-2 pl-8 flex flex-col shadow-2xl">
          {/* Logo di dalam panel */}
          <div className="mb-8">
            <Logo />
          </div>

          {/* Menu Links */}
          <ul className="flex flex-col space-y-6 text-lg">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link to={item.path} onClick={() => setIsOpen(false)} className={`block px-4 py-2 rounded-md transition duration-200 ${location.pathname === item.path ? 'text-[#C4A77D]' : 'text-white hover:text-[#C4A77D]'}`}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Spacer biar isi bawah lebih lega */}
          <div className="flex-1" />
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;
