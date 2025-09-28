import { FaTasks, FaComments, FaThumbsUp, FaLightbulb } from 'react-icons/fa';

const skills = [
  {
    id: 1,
    title: 'Multitasking',
    icon: FaTasks,
    description:
      'I am used to working under pressure and am able to manage multiple projects at once with good results. This ability will help me adapt and remain productive in a dynamic company environment.',
  },
  {
    id: 2,
    title: 'Expertise',
    icon: FaComments,
    description:
      'I continue to follow the latest technological developments in the field I specialize in so that the projects I work on are always up-to-date. With these skills, I am ready to deliver results that are relevant and meet company standards.',
  },
  {
    id: 3,
    title: 'Leadership',
    icon: FaThumbsUp,
    description:
      'My organizational experience taught me how to effectively work in teams and lead to achieve common goals. I am ready to leverage these skills to drive collaboration and productivity in the company.',
  },
  {
    id: 4,
    title: 'Creative',
    icon: FaLightbulb,
    description:
      'I am able to utilize technology to create new, innovative ideas, so that I can help companies face challenges and seize opportunities with more effective solutions.',
  },
];

const WhyHireMe = () => {
  return (
    <section className="px-6 md:px-20 py-12 text-white">
      <div className="mx-auto">
        {/* Judul Section */}
        <div className="text-center mb-10" data-aos="fade-down">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#C4A77D]">Why Hire Me?</h2>
        </div>

        {/* Grid Skill */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.id}
              className="p-5 md:p-6 flex flex-col items-center text-center bg-white/5 border border-gray-600 rounded-lg"
              data-aos="fade-up"
              data-aos-delay={index * 150} // muncul bergiliran
            >
              {/* Icon */}
              <div className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 mb-5">
                <div className="absolute inset-0 rounded-full border border-white"></div>
                <div className="absolute inset-2 bg-white/10 border border-[#C4A77D] rounded-full"></div>
                <skill.icon className="w-8 h-8 md:w-10 md:h-10 text-[#C4A77D] relative z-10" />
              </div>

              {/* Teks */}
              <h3 className="text-base md:text-lg font-semibold text-[#C4A77D] mt-2">{skill.title}</h3>
              <p className="text-gray-300 text-xs md:text-sm mt-3 leading-relaxed text-justify">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
