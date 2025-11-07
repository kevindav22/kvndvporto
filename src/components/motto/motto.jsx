// Data dinamis motto
import { aboutme } from '../../assets/data';

const Motto = () => {
  return (
    <section className="bg-[#0e1e32] px-6 md:px-20 py-6">
      <div className="max-w-5xl mx-auto text-[#C4A77D] italic text-center px-6 py-8 " data-aos="zoom-in" data-aos-duration="1200">
        <p className="text-sm md:text-md leading-relaxed mb-6">"{aboutme.quote}"</p>
        <h3 className="text-[#c7c7c7] font-semibold text-sm md:text-base">{aboutme.name}</h3>
        <p className="text-[#91908f] text-xs md:text-sm italic">{aboutme.role}</p>
      </div>
    </section>
  );
};

export default Motto;
