import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, variant = 'primary', href, to, onClick, icon: Icon, className = '' }) => {
  const baseStyles = 'inline-flex items-center gap-2 rounded-lg font transition duration-300 focus:outline-none px-4 py-2';

  const variants = {
    primary: 'bg-[#C4A77D] text-white hover:bg-[#B4956D]',
    outline: 'border border-[#C4A77D] text-[#C4A77D] hover:bg-[#C4A77D] hover:text-white',
  };

  const buttonClass = `${baseStyles} ${variants[variant]} ${className}`.trim();
  if (onClick) {
    return (
      <button className={buttonClass} onClick={onClick} type="button">
        {Icon && <Icon className="w-5 h-5" />}
        {children}
      </button>
    );
  }
  if (to || href) {
    return (
      <Link to={to || href} className={buttonClass}>
        {Icon && <Icon className="w-5 h-5" />}
        {children}
      </Link>
    );
  }
  return <span className={buttonClass}>{children}</span>;
};

export default Button;
