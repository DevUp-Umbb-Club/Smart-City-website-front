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
      <MoreAbout />
      <WhyParticipate />
      <Judges />
      <StilhaveAQuestion />
      <CountDown />
    </div>
  );
};

export default Landing;
