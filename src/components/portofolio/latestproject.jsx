import { useState } from 'react';
import Button from '../../entities/button';
import ProjectModal from './projectmodal';
import { projects } from '../../assets/data';

const LatestProject = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const latestProjects = [...projects].sort((a, b) => a.id - b.id).slice(-4);

  const handleViewDetails = (project) => {
    setSelectedProject(project);
  };

  return (
    <section className="text-white px-6 md:px-20 py-12">
      <div className="mx-auto">
        {/* Judul Section */}
        <div className="text-center mb-10" data-aos="fade-down">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#C4A77D]">Latest Project</h2>
        </div>

        {/* Grid Project */}
        <div className="space-y-5">
          {latestProjects.map((project, index) => (
            <div
              key={project.id}
              className="flex flex-col md:flex-row md:justify-between md:items-center bg-white/10 border border-gray-500 rounded-lg p-2 md:pr-8 space-y-4 md:space-y-0"
              data-aos="fade-up"
              data-aos-delay={index * 150} // animasi muncul satu per satu
            >
              {/* Image + Title */}
              <div className="flex flex-col items-center md:flex-row md:items-center md:space-x-6 text-center md:text-left space-y-3 md:space-y-0">
                <img src={project.image} alt={project.title} className="w-full md:w-44 h-36 md:h-28 object-cover rounded-md border border-[#a3875c]" />
                <h3 className="text-base md:text-lg font-semibold text-[#C4A77D]">{project.title}</h3>
              </div>

              {/* Button View Details */}
              <div className="flex justify-center md:justify-end w-full md:w-auto">
                <Button
                  variant="primary"
                  onClick={(e) => {
                    e.preventDefault(); // cegah default behaviour kalau Button pakai <a>
                    handleViewDetails(project);
                  }}
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Section Call to Action */}
        <div className="mt-14 bg-white/10 border border-gray-500 rounded-lg p-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4" data-aos="zoom-in-up">
          <div>
            <h3 className="text-sm md:text-base font-semibold">Interested In Collaborating With Me?</h3>
            <p className="text-gray-300 text-xs md:text-sm">I am very enthusiastic about your offer!</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="primary" href="/about">
              About Me
            </Button>
            <Button variant="outline" href="/project">
              More Project
            </Button>
          </div>
        </div>
      </div>

      {/* Modal Detail Project */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

export default LatestProject;
