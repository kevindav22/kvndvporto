// src/components/sections/Hero.jsx
import SocialMedia from '../../entities/medsos';
import { aboutme } from '../../assets/data';

const Hero = () => {
  return (
    <section className="bg-[#0E1C2D] text-white flex items-center justify-center min-h-[calc(100vh-64px)]">
      <div className="text-center px-6 md:px-20">
        {/* Nama */}
        <h1 className="text-5xl md:text-6xl font-bold text-[#C4A77D]" data-aos="fade-down" data-aos-duration="1000">
          About Me
        </h1>

        {/* AboutMe */}
        <p className="mt-4 text-gray-300 leading-relaxed text-sm md:text-base" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
          {aboutme.aboutme}
        </p>

        {/* Sosial Media */}
        <div className="mt-6 flex justify-center gap-5" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400">
          <SocialMedia />
        </div>
      </div>
    </section>
  );
};

export default Hero;
