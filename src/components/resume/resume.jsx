import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { resume, aboutme } from '../../assets/data';
import Button from '../../entities/button';
import { FaDownload } from 'react-icons/fa';
import SectionList from './sectionlist';
import ToolsSection from './toolsection';

const Resume = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-in-out' });
  }, []);

  return (
    <section className="bg-[#0E1C2D] text-[#C4A77D] px-8 md:px-24">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Side → Loop semua resume */}
        <div className="lg:col-span-2 space-y-12">
          {resume.map((section, idx) => (
            <SectionList key={idx} title={section.title} items={section.items} />
          ))}

          {/* Button CV */}
          <div data-aos="fade-up" data-aos-delay="100">
            <Button href={aboutme.cvLink} icon={FaDownload} variant="primary">
              Download CV
            </Button>
          </div>
        </div>

        {/* Right Side → Tools */}
        <ToolsSection />
      </div>
    </section>
  );
};

export default Resume;
