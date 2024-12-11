import CountDown from '../../components/CountDown/CountDown';
import Navbar from '../../components/Navbar/Navbar';
import StilhaveAQuestion from '../../components/StillHaveAQuestion/StilhaveAQuestion';
import WhyParticipate from '../../components/WhyParticipate/WhyParticipate';
import './Landing.css';
const Landing = () => {
  return (
    <div>
      <Navbar />

      <WhyParticipate />

      <StilhaveAQuestion />
      <CountDown />
    </div>
  );
};

export default Landing;
