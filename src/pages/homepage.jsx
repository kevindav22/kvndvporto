import Navbar from '../components/navbar/navbar';
import Hero from '../components/herosection/hero';
import Services from '../components/services/services';
import WhyHireMe from '../components/hireme/hireme';
import Motto from '../components/motto/motto';
import Footer from '../components/footer/footer';
import LatestProject from '../components/portofolio/latestproject';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <LatestProject />
      <WhyHireMe />
      <Motto />
      <Footer />
    </>
  );
};

export default HomePage;
