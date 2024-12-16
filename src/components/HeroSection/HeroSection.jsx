/* eslint-disable react/prop-types */
import logo3d from '../../assets/BSC-3d.svg';
import stars from '../../assets/stars-home.png';
import './HeroSection.css';

import herosectionImage from '../../assets/herosection.png'
const HeroSection = ({ setIsModalOpen }) => {
  return (
    <section className="hero-section" id="home">

      {/* <img src={herosectionImage} id='herosectionimage' /> */}
      <h3>Boumerdes Smart City</h3>
      <h2>Hackathon</h2>
      <h4>Code For The City</h4>
      <h2 className="dates">19,20,21 Dec</h2>
      {/* <button onClick={setIsModalOpen}>Apply Now</button> */}
      <button>Apply Now</button>
      <img src={logo3d} alt="BSC Logo In 3d" className="logo-hero" />
      <img src={stars} alt="stars" className="stars-hero" />
    </section>
  );
};

export default HeroSection;
