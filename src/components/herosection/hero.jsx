import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SocialMedia from '../../entities/medsos';
import { FaDownload } from 'react-icons/fa';
import { aboutme } from '../../assets/data';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  const text = aboutme.role;
  const typingSpeed = isDeleting ? 40 : 90;
  const pauseTime = 4000;
  useEffect(() => {
    let timeout;

    if (!isDeleting && index < text.length) {
      // Mengetik huruf satu per satu
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, typingSpeed);
    } else if (isDeleting && index > 0) {
      // Menghapus huruf satu per satu
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex(index - 1);
      }, typingSpeed);
    } else if (index === text.length && !isDeleting) {
      // Jeda sebelum hapus
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (index === 0 && isDeleting) {
      // Ulang lagi
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return (
    <section className="bg-[#0E1C2D] text-white flex items-center min-h-screen pt-20 md:pt-0">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-12 md:gap-16">
          {/* TEKS & KONTEN */}
          <div className="order-2 md:order-1 md:col-span-3" data-aos="fade-right">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <p className="text-lg md:text-xl text-gray-300 font-medium">{aboutme.intro}</p>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[#C4A77D]">{aboutme.name}</h1>

              {/* Efek mengetik + cursor */}
              <div className="flex items-center justify-center md:justify-start">
                <motion.h2 className="text-lg md:text-xl font-semibold leading-snug text-white" animate={{ opacity: [0.9, 1] }} transition={{ duration: 0.3 }}>
                  {displayedText}
                </motion.h2>

                {/* Cursor blinking */}
                <motion.span className="text-[#C4A77D] text-lg md:text-xl font-semibold ml-1" animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 0.8 }}>
                  |
                </motion.span>
              </div>

              <p className="mt-3 text-sm md:text-base leading-relaxed text-gray-300 text-justify">{aboutme.description}</p>

              <div className="mt-8 flex flex-col sm:flex-row items-center gap-6 text-sm md:text-base leading-relaxed">
                <a href={aboutme.cvLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#C4A77D] text-white font-semibold px-4 py-2 rounded-md hover:bg-[#b0906c] transition-colors">
                  <FaDownload />
                  Download CV
                </a>
                <SocialMedia />
              </div>
            </div>
          </div>

          {/* FOTO */}
          <div className="order-1 md:order-2 md:col-span-2 flex justify-center md:justify-end" data-aos="fade-left">
            <div className="relative inline-block w-[260px] md:w-[280px]">
              <div className="relative w-full h-[260px] md:h-[300px] rounded-xl bg-[#1f1c1c] border-2 border-[#C4A77D] shadow-[0_0_15px_#C4A77D] overflow-hidden z-0" />
              <div className="absolute -top-4 -left-4 w-full h-[260px] md:h-[300px] rounded-xl border border-white z-10" />
              <div className="absolute top-0 left-0 w-full h-[260px] md:h-[300px] rounded-xl border border-[#ff9500] z-20 pointer-events-none" />
              <img src={aboutme.image} alt={aboutme.name} className="absolute left-1/2 -translate-x-1/2 bottom-2 w-[320px] md:w-[360px] h-auto rounded-lg z-30" style={{ imageRendering: 'auto' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
