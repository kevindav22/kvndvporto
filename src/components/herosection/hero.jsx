import SocialMedia from '../../entities/medsos';
import { FaDownload } from 'react-icons/fa';
import Button from '../../entities/button';
import { aboutme } from '../../assets/data';

const Hero = () => {
  return (
    <section className="text-white flex items-center min-h-[calc(100vh-64px)]">
      <div className=" mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-12 md:gap-16">
          {/* TEKS & KONTEN */}
          <div className="order-2 md:order-1 md:col-span-3" data-aos="fade-right">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <p className="text-base md:text-lg text-gray-300 font-medium">{aboutme.intro}</p>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[#C4A77D]">{aboutme.name}</h1>
              <h2 className="text-lg md:text-2xl mt-3 text-white">{aboutme.role}</h2>
              <p className="mt-6 text-sm md:text-base text-gray-300  text-justify">{aboutme.description}</p>
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-6">
                <Button href={aboutme.cvLink} icon={FaDownload} variant="primary">
                  Download CV
                </Button>
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
