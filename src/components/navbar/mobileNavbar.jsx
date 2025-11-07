import { Link, useLocation } from 'react-router-dom';
import Logo from '../../entities/logo';
import { FiMenu, FiX } from 'react-icons/fi';

const MobileNavbar = ({ navItems, isOpen, setIsOpen }) => {
  const location = useLocation();

  return (
    <nav className="relative flex items-center justify-between py-2">
      {/* Logo */}
      <div className="relative z-[300]">
        <Logo />
      </div>

      {/* Tombol Toggle */}
      <button aria-label={isOpen ? 'Close menu' : 'Open menu'} onClick={() => setIsOpen((v) => !v)} className="text-white text-2xl focus:outline-none relative z-[300]">
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Panel Menu Drop-down */}
      <div
        className={`absolute top-full left-0 w-full overflow-hidden transition-all duration-500 ease-in-out
        bg-black/10 backdrop-blur-md border-t border-white/10 shadow-md z-[250]
        ${isOpen ? 'max-h-[70vh] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <ul className="flex flex-col text-center py-6 space-y-4 text-lg overflow-y-auto max-h-[70vh]">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link to={item.path} onClick={() => setIsOpen(false)} className={`block py-2 transition duration-200 ${location.pathname === item.path ? 'text-[#C4A77D]' : 'text-white hover:text-[#C4A77D]'}`}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MobileNavbar;
