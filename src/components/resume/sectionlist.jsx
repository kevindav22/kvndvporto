const SectionList = ({ title, items }) => {
  return (
    <div>
      {/* Judul Section */}
      <h2 className="text-3xl font-light text-[#C4A77D] mb-6" data-aos="fade-down" data-aos-duration="1000">
        {title}
      </h2>

      {/* List Item */}
      <div className="space-y-6">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="flex items-center gap-5 p-6 border border-[#C4A77D] rounded-xl"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={index * 200} // supaya animasinya berurutan
          >
            <img src={item.logo} alt={item.title} className="w-12 h-12 object-contain rounded" />
            <div>
              <h3 className="font-light text-xl">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionList;
