import CountDown from '../../components/CountDown/CountDown';
import Judges from '../../components/Judges/Judges';
import MoreAbout from '../../components/MoreAbout/MoreAbout';
import Navbar from '../../components/Navbar/Navbar';
import StilhaveAQuestion from '../../components/StillHaveAQuestion/StilhaveAQuestion';
import WhyParticipate from '../../components/WhyParticipate/WhyParticipate';
import './Landing.css';
const Landing = () => {
  return (
    <div>
      <Navbar />
      <CountDown />
      <MoreAbout />
      <WhyParticipate />
      <Judges />
      <StilhaveAQuestion />
      
    </div>
  );
};

export default Landing;
