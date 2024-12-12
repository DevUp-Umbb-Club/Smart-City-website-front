import CountDown from '../../components/CountDown/CountDown';
import Judges from '../../components/Judges/Judges';
import MoreAbout from '../../components/MoreAbout/MoreAbout';
import Navbar from '../../components/Navbar/Navbar';
import StilhaveAQuestion from '../../components/StillHaveAQuestion/StilhaveAQuestion';
import WhyParticipate from '../../components/WhyParticipate/WhyParticipate';
import './Landing.css';
const Landing = () => {
  return (
    <>
      <Navbar />
      <main>
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
      </main>
      <Footer />
    </>
  );
};

export default Landing;


