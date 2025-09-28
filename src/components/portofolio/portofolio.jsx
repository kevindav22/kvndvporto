import { useState, useEffect } from 'react';
import { FaRobot } from 'react-icons/fa';
import ProjectModal from './projectmodal';
import { projects } from '../../assets/data';

const categories = ['All', 'Web Development', 'Graphic Design', 'UI Design', 'Other'];

const aosAnimations = ['fade-up', 'fade-down', 'fade-left', 'fade-right', 'flip-left', 'flip-right', 'zoom-in', 'zoom-out'];

// Fungsi shuffle
const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleCount, setVisibleCount] = useState(12);
  const [shuffledProjects, setShuffledProjects] = useState([]);

  // Jalankan shuffle hanya ketika kategori berubah
  useEffect(() => {
    const filtered = activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory);

    setShuffledProjects(shuffleArray(filtered));
    setVisibleCount(12); // reset jumlah tampil setiap ganti kategori
  }, [activeCategory]);

  const displayedProjects = shuffledProjects.slice(0, visibleCount);

  return (
    <section className="bg-[#0E1C2D] text-[#FFFFFF] px-6 md:px-20 pb-12">
      <div className="mx-auto">
        {/* Filter */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-md transition
              ${activeCategory === cat ? 'text-[#C4A77D] border border-[#C4A77D]' : 'text-[#B0B0B0] border border-transparent hover:border-[#C4A77D]'}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* List Project / Empty State */}
        {shuffledProjects.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <FaRobot className="text-7xl text-[#666666] mb-4" />
            <p className="text-lg text-[#999999]">No Projects Found</p>
          </div>
        ) : (
          <>
            <div className="flex flex-wrap justify-center gap-4">
              {displayedProjects.map((project, index) => {
                const animation = aosAnimations[index % aosAnimations.length];
                return (
                  <div
                    key={project.id}
                    data-aos={animation}
                    data-aos-duration="800"
                    data-aos-easing="ease-in-out"
                    className="cursor-pointer border border-[#C4A77D] rounded-xl overflow-hidden hover:scale-101 transition w-full sm:w-[45%] lg:w-[30%]"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="aspect-square relative w-full">
                      {/* Gambar */}
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />

                      {/* Overlay gelap */}
                      <div className="absolute inset-0 bg-[#0000007d]"></div>

                      {/* Konten teks */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3
                          className="text-lg font-semibold text-[#C4A77D]
                          drop-shadow-lg 
                          [text-shadow:_2px_2px_4px_#000000E6] 
                          [paint-order:stroke_fill] 
                          [stroke:_1px_#FFFFFF]"
                        >
                          {project.title}
                        </h3>
                        <p
                          className="text-[#DDDDDD] text-sm mt-1 line-clamp-2 
                          drop-shadow-lg 
                          [text-shadow:_2px_2px_4px_#000000E6]"
                        >
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Tombol View More */}
            {visibleCount < shuffledProjects.length && (
              <div className="flex justify-center mt-8">
                <button onClick={() => setVisibleCount((prev) => prev + 12)} className="px-6 py-2 bg-[#C4A77D] text-[#0E1C2D] font-semibold rounded-lg hover:bg-[#A3875C] transition">
                  View More
                </button>
              </div>
            )}
          </>
        )}

        {/* Modal Detail Project */}
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </div>
    </section>
  );
};

export default Portfolio;
