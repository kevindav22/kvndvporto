// src/components/sections/Hero.jsx
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import SocialMedia from '../../entities/medsos';
import { aboutme } from '../../assets/data';

const HeroProject = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-in-out' });
  }, []);

  return (
    <section className="bg-[#0E1C2D] text-white flex items-center justify-center min-h-[calc(100vh-64px)]">
      <div className="text-center px-6 md:px-36">
        {/* Nama */}
        <h1 className="text-5xl md:text-6xl font-bold text-[#C4A77D]" data-aos="fade-up">
          Project
        </h1>

        {/* AboutMe */}
        <p className="mt-4 text-sm md:text-lg leading-relaxed text-gray-300" data-aos="fade-up" data-aos-delay="200">
          {aboutme.projectmedesc}
        </p>

        {/* Sosial Media */}
        <div className="mt-6 flex justify-center gap-5" data-aos="fade-up" data-aos-delay="400">
          <SocialMedia />
        </div>
      </div>
    </section>
  );
};

export default HeroProject;
