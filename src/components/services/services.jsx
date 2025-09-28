import { FaMobileAlt, FaCode, FaChartBar } from 'react-icons/fa';

const services = [
  {
    icon: FaMobileAlt,
    title: 'Graphic Design',
    description: 'With a strong understanding of visual design and aesthetics, I can create attractive and professional designs, from branding, posters, to other digital media.',
  },
  {
    icon: FaCode,
    title: 'Web Development',
    description:
      'With my Fullstack Web Development skills, I can build websites that not only look good, but are also fast, secure, and functional. I work meticulously on every detail, from UI/UX to technical performance, to ensure the websites I build meet standards of professionalism.',
  },
  {
    icon: FaChartBar,
    title: 'Data Analyst',
    description:
      'I am able to process data to produce informative and easy-to-understand reports to help clients gain valuable insights from their data. Whether in the form of sentiment analysis, customer trends, or other business metrics.',
  },
];

const Services = () => {
  return (
    <section className="bg-[#0E1C2D] text-white px-6 md:px-20 py-12 overflow-x-hidden">
      {/* Judul Section */}
      <div className="text-center" data-aos="fade-up">
        <h3 className="text-xs md:text-sm uppercase tracking-wide text-gray-400">What Do I Offer</h3>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#C4A77D] mt-2 leading-snug">
          Finishing That Professional <br className="hidden md:block" />
          Project Oriented to Client Needs
        </h2>
      </div>

      {/* Grid Layanan */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 mx-auto">
        {services.map((service, index) => (
          <div key={index} className="bg-white/10 border border-[#C4A77D] rounded-lg p-6 md:p-8 flex flex-col items-center text-center md:text-justify" data-aos="zoom-in" data-aos-delay={index * 200}>
            <service.icon className="text-3xl md:text-4xl text-white mb-4" />
            <h3 className="text-lg md:text-xl font-semibold text-[#C4A77D]">{service.title}</h3>
            <p className="text-gray-300 mt-3 text-sm md:text-base leading-relaxed text-justify">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Footer Line */}
      <div className="mt-12 flex justify-center" data-aos="fade-up">
        <div className="w-1/3 md:w-1/4 h-[3px] rounded-full bg-[#C4A77D]"></div>
      </div>
    </section>
  );
};

export default Services;
