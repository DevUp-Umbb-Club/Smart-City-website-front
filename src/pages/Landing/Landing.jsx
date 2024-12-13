import { useState } from 'react';
import CountDown from '../../components/CountDown/CountDown';
import Judges from '../../components/Judges/Judges';
import MoreAbout from '../../components/MoreAbout/MoreAbout';
import Navbar from '../../components/Navbar/Navbar';
import StilhaveAQuestion from '../../components/StillHaveAQuestion/StilhaveAQuestion';
import WhyParticipate from '../../components/WhyParticipate/WhyParticipate';
import Faq from '../../components/Faq/Faq';
import FindUs from '../../components/FindUs/FindUs';
import Footer from '../../components/Footer/Footer';
import './Landing.css';
import Sponsor from '../../components/Sponsor/Sponsor';
import Schedule from '../../components/Schedule/Schedule';

import HeroSection from '../../components/HeroSection/HeroSection';
const Landing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Navbar
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <main>
        <HeroSection setIsModalOpen={setIsModalOpen} />
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

      <Footer
        setIsModalOpen={setIsModalOpen}
        activeSection={activeSection}
        setIsMenuOpen={setIsMenuOpen}
      />
    </>
  );
};

export default Landing;
