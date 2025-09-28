import Footer from '../components/footer/footer';
import HeroProject from '../components/herosection/heroproject';
import Navbar from '../components/navbar/navbar';
import Portfolio from '../components/portofolio/portofolio';

const PortofolioPage = () => {
  return (
    <>
      <Navbar />
      <HeroProject />
          <Portfolio />
          <Footer/>
    </>
  );
};

export default PortofolioPage;
