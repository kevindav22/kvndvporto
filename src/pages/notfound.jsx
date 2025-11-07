// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-[#0E1C2D] text-white text-center px-6 py-10 md:py-0">
      <div className="flex flex-col items-center justify-center max-w-md" data-aos="zoom-in" data-aos-duration="800">
        {/* Ikon error */}
        <div className="text-[#FF5252] text-[5rem] md:text-[8rem] drop-shadow-[0_0_25px_rgba(255,82,82,0.5)] mb-4 animate-pulse">
          <FaExclamationTriangle />
        </div>

        {/* Judul */}
        <h2 className="text-2xl md:text-4xl font-bold text-[#C4A77D] mb-2">Oops! Something went wrong</h2>

        {/* Deskripsi */}
        <p className="text-gray-300 text-sm md:text-lg leading-relaxed max-w-sm md:max-w-md">Halaman yang Anda tuju tidak ditemukan atau sudah dipindahkan.</p>

        {/* Tombol kembali */}
        <div className="mt-8">
          <Link to="/" className="inline-block px-6 py-3 text-sm md:text-base font-semibold text-[#C4A77D] border border-[#C4A77D] rounded-lg hover:bg-[#C4A77D]/10 transition-all duration-300 shadow-md hover:shadow-[#C4A77D]/30">
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
