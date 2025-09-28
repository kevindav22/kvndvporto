import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img src="/Logo.svg" alt="Logo" className="h-14 sm:h-14 lg:h-16 w-32 sm:w-40 lg:w-48" />
    </Link>
  );
};

export default Logo;
