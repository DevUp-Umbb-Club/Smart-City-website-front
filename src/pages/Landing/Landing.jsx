import CountDown from '../../components/CountDown/CountDown';
import Navbar from '../../components/Navbar/Navbar';
import StilhaveAQuestion from '../../components/StillHaveAQuestion/StilhaveAQuestion';
import WhyParticipate from '../../components/WhyParticipate/WhyParticipate';
import Faq from '../../components/Faq/Faq';
import FindUs from '../../components/FindUs/FindUs';
import Footer from '../../components/Footer/Footer';
import './Landing.css';
import Sponsor from '../../components/Sponsor/Sponsor';
import Schedule from '../../components/Schedule/Schedule';
import Judges from '../../components/Judges/Judges';
import MoreAbout from '../../components/MoreAbout/MoreAbout';
import HeroSection from '../../components/HeroSection/HeroSection';
const Landing = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CountDown />
      <MoreAbout />
      <WhyParticipate />
      <Judges />
      <Schedule />
      <Faq />
      <Sponsor />
      <FindUs />
      <StilhaveAQuestion />
      <Footer />
    </div>
  );
};

export default Landing;
