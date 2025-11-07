import { useRef } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { FaCalendarAlt } from 'react-icons/fa';

const graphicDesignLinks = {
  drive: 'https://drive.google.com/drive/folders/1BWoGVE733J0KigmLw2hY2M6o4Ss-mlxH',
};

const ProjectModal = ({ project, onClose }) => {
  const modalRef = useRef();

  if (!project) return null;

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  // Pilih link berdasarkan kategori
  const linkTarget = project.category === 'Graphic Design' ? graphicDesignLinks.drive : project.link;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={handleOutsideClick}>
      <div ref={modalRef} className="relative bg-[#0E1C2D] rounded-xl shadow-xl max-w-lg w-full p-6 max-h-[80vh] overflow-y-auto">
        {/* Tombol Close */}
        <button onClick={onClose} className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-white transition-colors">
          ✖
        </button>

        <p className="text-xs md:text-sm mb-2 text-gray-400">{project.subcategory}</p>

        {/* Judul + Link di atas */}
        <div className="flex items-center mb-3 gap-2">
          <h2 className="text-xl md:text-2xl font-semibold text-[#C4A77D]">{project.title}</h2>

          {linkTarget && (
            <a href={linkTarget} target="_blank" rel="noopener noreferrer" className="text-[#C4A77D] hover:text-[#a3875c] transition" title="Kunjungi Project">
              <FiExternalLink size={20} />
            </a>
          )}
        </div>

        {/* Deskripsi */}
        <p className="text-gray-300 text-xs md:text-sm leading-relaxed text-justify mb-4">{project.description}</p>

        {/* Tech Stack + Date */}
        {(project.tech && project.tech.length > 0) || project.date ? (
          <div className="flex flex-wrap items-center justify-between mb-4 gap-y-3">
            <div className="flex flex-wrap gap-2">
              {project.tech?.map((t, idx) => (
                <span key={idx} className="px-3 py-1 text-xs md:text-sm border border-[#C4A77D] rounded-full text-[#C4A77D] bg-black/30">
                  {t}
                </span>
              ))}
            </div>

            {project.date && (
              <div className="flex items-center gap-2 text-[#C4A77D] text-xs md:text-sm">
                <FaCalendarAlt className="text-[#C4A77D]" />
                <span>{project.date}</span>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectModal;
