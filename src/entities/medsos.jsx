// SocialMedia.jsx
import { FaLinkedin, FaInstagram, FaWhatsapp, FaTiktok, FaGithub } from 'react-icons/fa';
import { socialLinks } from '../assets/data';

const icons = {
  LinkedIn: <FaLinkedin />,
  Github: <FaGithub/>,
  WhatsApp: <FaWhatsapp />,
  Tiktok: <FaTiktok />,
  Instagram: <FaInstagram />,
};

const SocialMedia = () => {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((social) => (
        <a
          key={social.id} // pakai id, bukan index
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#C4A77D]  p-2 border rounded-md hover:bg-gray-700 transition"
          aria-label={social.name}
        >
          {icons[social.name]}
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
