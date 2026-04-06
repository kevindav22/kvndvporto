import { useState } from 'react';
import Button from '../../entities/button';
import ProjectModal from './projectmodal';
import { projects } from '../../assets/projects';

const LatestProject = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Ambil 4 proyek terbaru langsung dari data projects
  const latestProjects = [...projects].sort((a, b) => b.id - a.id).slice(0, 5);

  const handleViewDetails = (project) => setSelectedProject(project);

  return (
    <section className="bg-[#0E1C2D] text-white px-6 md:px-20 py-12">
      <div className="mx-auto max-w-7xl">
        {/* Judul Section */}
        <div className="text-center mb-10" data-aos="fade-down">
          <h2 className="text-2xl md:text-3xl font-semibold leading-snug text-[#C4A77D]">Latest Project</h2>
        </div>

        {/* Grid Project */}
        <div className="space-y-5">
          {latestProjects.map((project, index) => (
            <div key={project.id} className="flex flex-col md:flex-row items-center justify-between bg-white/10 border border-gray-500 rounded-lg p-4" data-aos="fade-up" data-aos-delay={index * 150}>
              {/* Gambar */}
              <div className="w-full md:w-44 flex justify-center">
                <img src={project.image} alt={project.title} className="w-full max-h-60 md:max-h-44 object-contain" loading="lazy" />
              </div>

              {/* Judul & Tombol di satu baris */}
              <div className="flex flex-row items-center justify-between w-full mt-4 md:mt-0 md:ml-6">
                <div>
                  <p className="text-gray-400 text-xs md:text-sm">{project.subcategory}</p>
                  <h3 className="text-lg md:text-xl font-semibold text-[#C4A77D] truncate">{project.title}</h3>
                </div>

                <Button
                  variant="primary"
                  className="ml-4 flex-shrink-0 text-xs md:text-base "
                  onClick={(e) => {
                    e.preventDefault();
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
            <h3 className="text-lg md:text-xl font-semibold text-[#C4A77D] leading-snug">Interested In Collaborating With Me?</h3>
            <p className="text-gray-300 text-sm md:text-base">I am very enthusiastic about your offer!</p>
          </div>
          <div className="flex space-x-3 text-sm md:text-base leading-relaxed">
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
