import { useState, useEffect } from 'react';
import { FaRobot } from 'react-icons/fa';
import ProjectModal from './projectmodal';
import { projects } from '../../assets/projects';

const categories = ['All', 'Web Development', 'Graphic Design', 'UI Design', 'Other'];
const aosAnimations = ['fade-up', 'fade-down', 'fade-left', 'fade-right', 'flip-left', 'flip-right', 'zoom-in', 'zoom-out'];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [page, setPage] = useState(0);
  const itemsPerPage = 15;
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [imageScales, setImageScales] = useState({});

  useEffect(() => {
    const filtered = activeCategory === 'All' ? [...projects].sort((a, b) => b.id - a.id) : projects.filter((p) => p.category === activeCategory).sort((a, b) => b.id - a.id);
    setFilteredProjects(filtered);
    setPage(0);
  }, [activeCategory]);

  const handleImageLoad = (id, e) => {
    const img = e.target;
    const { naturalWidth, naturalHeight } = img;
    const area = naturalWidth * naturalHeight;
    let scale = 1;
    if (area < 200000) scale = 2.0;
    else if (area < 500000) scale = 1.5;
    else if (area < 900000) scale = 1.2;
    setImageScales((prev) => ({ ...prev, [id]: scale }));
  };

  const startIndex = page * itemsPerPage;
  const displayedProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="bg-[#0e1e32] text-[#FFFFFF] px-6 md:px-20 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Filter Category */}
        <div className="flex justify-center mb-6 md:mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-2 py-1 md:px-4 md:py-2 text-xs md-text-base rounded-md transition
                ${activeCategory === cat ? 'text-[#C4A77D] border border-[#C4A77D]' : 'text-[#B0B0B0] border border-transparent hover:border-[#C4A77D]'} text-sm md:text-base`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <FaRobot className="text-7xl text-[#666666] mb-4" />
            <p className="text-lg text-[#999999]">No Projects Found</p>
          </div>
        ) : (
          <>
            <div className="columns-3 md:columns-4 gap-2 space-y-2 select-none">
              {displayedProjects.map((project, index) => {
                const animation = aosAnimations[index % aosAnimations.length];
                const scale = imageScales[project.id] || 1;
                return (
                  <div
                    key={project.id}
                    data-aos={animation}
                    data-aos-duration="800"
                    data-aos-easing="ease-in-out"
                    onClick={() => setSelectedProject(project)}
                    className="relative cursor-pointer break-inside-avoid overflow-hidden rounded-md border border-[#C4A77D] bg-[#162433] hover:scale-[1.01] transition-transform duration-300 flex justify-center items-center"
                    onContextMenu={(e) => e.preventDefault()} // cegah klik kanan
                  >
                    {/* Gambar utama */}
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      draggable="false"
                      onLoad={(e) => handleImageLoad(project.id, e)}
                      className="transition-transform duration-500 object-contain w-auto h-auto pointer-events-none select-none"
                      style={{
                        transform: `scale(${scale})`,
                        maxWidth: '100%',
                        maxHeight: '100%',
                      }}
                    />

                    {/* Overlay pelindung */}
                    <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>

                    {/* Watermark DAVINTECH */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <span
                        className="text-white/8 border text-base font-bold rounded-xs px-1"
                        style={{
                          transform: 'rotate(-20deg)',
                          userSelect: 'none',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        DAVINTECH
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Tombol Next / Prev */}
            <div className="flex justify-center gap-4 mt-8 text-xs md:text-sm">
              <button
                onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
                disabled={page === 0}
                className={`px-4 py-2 rounded-md transition ${page === 0 ? 'bg-gray-600 text-gray-300 cursor-not-allowed' : 'bg-[#C4A77D] text-[#0E1C2D] hover:bg-[#A3875C]'}`}
              >
                Prev
              </button>
              <button
                onClick={() => setPage((prev) => (startIndex + itemsPerPage < filteredProjects.length ? prev + 1 : prev))}
                disabled={startIndex + itemsPerPage >= filteredProjects.length}
                className={`px-4 py-2 rounded-md transition ${startIndex + itemsPerPage >= filteredProjects.length ? 'bg-gray-600 text-gray-300 cursor-not-allowed' : 'bg-[#C4A77D] text-[#0E1C2D] hover:bg-[#A3875C]'}`}
              >
                Next
              </button>
            </div>
          </>
        )}

        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </div>
    </section>
  );
};

export default Portfolio;
