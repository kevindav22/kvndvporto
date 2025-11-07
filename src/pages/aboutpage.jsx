import Footer from '../components/footer/footer';
import Hero from '../components/herosection/heroabout';
import Navbar from '../components/navbar/navbar';
import Resume from '../components/resume/resume';
import Motto from '../components/motto/motto';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Resume />
      <Motto />
      <Footer />
    </>
  );
};

export default AboutPage;
