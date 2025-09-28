// src/pages/pdfpage.jsx
const PdfPage = () => {
  return (
    <section className="w-full h-screen bg-gray-100 flex items-center justify-center">
      <embed src="/src/assets/cv-kevin-david.pdf" type="application/pdf" className="w-full h-full" />
    </section>
  );
};

export default PdfPage;
