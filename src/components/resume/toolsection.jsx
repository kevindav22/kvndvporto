import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { VscVscode } from 'react-icons/vsc';
import { SiReact, SiNodedotjs, SiExpress, SiJavascript, SiVite, SiAdobephotoshop, SiCoreldraw, SiAdobeillustrator, SiFigma, SiCanva, SiGooglecolab, SiPython, SiGithub, SiJupyter, SiMysql } from 'react-icons/si';

const tools = [
  { id: 1, icon: VscVscode, name: 'VS Code' },
  { id: 2, icon: SiReact, name: 'React' },
  { id: 3, icon: SiNodedotjs, name: 'Node.js' },
  { id: 4, icon: SiExpress, name: 'Express.js' },
  { id: 5, icon: SiJavascript, name: 'JavaScript' },
  { id: 6, icon: SiVite, name: 'Vite' },
  { id: 7, icon: SiAdobephotoshop, name: 'Photoshop' },
  { id: 8, icon: SiCoreldraw, name: 'CorelDRAW' },
  { id: 9, icon: SiAdobeillustrator, name: 'Illustrator' },
  { id: 10, icon: SiFigma, name: 'Figma' },
  { id: 11, icon: SiCanva, name: 'Canva' },
  { id: 12, icon: SiGooglecolab, name: 'Google Colab' },
  { id: 13, icon: SiPython, name: 'Python' },
  { id: 14, icon: SiGithub, name: 'GitHub' },
  { id: 15, icon: SiJupyter, name: 'Jupyter' },
  { id: 16, icon: SiMysql, name: 'MySQL' },
];

const animations = ['fade-up', 'fade-down', 'fade-right', 'fade-left'];

const ToolsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-in-out' });
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-light text-[#C4A77D] mb-6" data-aos="fade-up">
        Working Tools
      </h2>
      <div className="flex flex-wrap justify-center gap-2 border border-[#C4A77D] rounded-xl py-8" data-aos="zoom-in-up">
        {tools.map((tool, index) => (
          <div key={tool.id} className="flex flex-col items-center w-20 sm:w-24" data-aos={animations[index % animations.length]} data-aos-delay={(index % 4) * 100}>
            <tool.icon className="w-12 h-12 text-[#C4A77D] border border-[#C4A77D] p-1 rounded-lg" />
            <p className="mt-2 text-sm text-gray-400 text-center">{tool.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsSection;
