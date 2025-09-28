import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Logo from '../../entities/logo';
import SocialMedia from '../../entities/medsos';
import { contacts } from '../../assets/data';

const icons = {
  Phone: <FaPhoneAlt className="text-xl text-[#C4A77D]" />,
  Email: <FaEnvelope className="text-xl text-[#C4A77D]" />,
  Address: <FaMapMarkerAlt className="text-xl text-[#C4A77D]" />,
};

const Footer = () => {
  return (
    <footer className="bg-[#0E1C2D] px-6 md:px-20 pt-18 py-5">
      <div>
        <div>
          <Logo />
          <p className="mt-2 text-[#C4A77D]">For business and partnership inquiry please contact me below!</p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {contacts.map(({ id, name, value, link }) => (
              <div key={id} className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full border border-[#C4A77D] flex items-center justify-center">{icons[name]}</div>
                <div>
                  <p className="uppercase tracking-wide text-[#C4A77D]">{name}</p>
                  {link ? (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#C4A77D] transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-gray-400">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex md:justify-end items-end">
            <div className="flex gap-4 md:gap-5">
              <SocialMedia />
            </div>
          </div>
        </div>

        <div className="relative mt-10 flex items-center justify-center">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C4A77D]/50 to-transparent"></div>
        </div>

        <div className="mt-6">
          <p className="text-center text-sm tracking-wide text-gray-400">
            © {new Date().getFullYear()} <span className="text-[#C4A77D] font-semibold">kvndv</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
