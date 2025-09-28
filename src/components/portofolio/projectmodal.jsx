const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/10 backdrop-blur-md flex items-center justify-center z-50 p-4">
      <div className="relative bg-[#0E1C2D] w-full sm:max-w-xl rounded-xl shadow-xl overflow-hidden max-h-[90vh]">
        {/* Tombol Close */}
        <button onClick={onClose} className="absolute text-2xl top-3 right-3 text-gray-300 hover:text-white z-30">
          ✖
        </button>

        {/* Gambar background */}
        <div className="w-full relative min-h-[40vh] sm:h-[65vh]">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />

          {/* Overlay gradasi ringan supaya lebih gelap */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

          {/* Konten teks di bawah gambar */}
          <div className="absolute bottom-0 left-0 right-0 z-10">
            <div className="relative backdrop-blur-lg bg-black/40 rounded-lg p-4 flex flex-col justify-start gap-4">
              {/* Kiri: teks */}
              <div className="flex-1 relative">
                <h2 className="text-xl font-bold text-[#C4A77D] mb-2">{project.title}</h2>
                <p className="text-gray-200 mb-2">{project.description}</p>

                {/* Tech Stack */}
                {project.tech && project.tech.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="px-2 py-1 text-xs border border-[#C4A77D] rounded-full text-[#C4A77D] bg-black/50">
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {/* Tombol View Project tetap di kanan atas konten teks */}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="absolute top-0 right-0 z-20 inline-block text-sm text-white bg-[#C4A77D] px-4 py-2 rounded-lg hover:bg-[#a3875c] transition">
                    View Project
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
