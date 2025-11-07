import Footer from '../components/footer/footer';
import HeroProject from '../components/herosection/heroproject';
import Motto from '../components/motto/motto';
import Navbar from '../components/navbar/navbar';
import Portfolio from '../components/portofolio/portofolio';

const PortofolioPage = () => {
  return (
    <>
      <Navbar />
      <HeroProject />
      <Portfolio />
      <Motto/>
      <Footer />
    </>
  );
};

export default PortofolioPage;
