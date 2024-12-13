/* eslint-disable react/prop-types */
import './Footer.css';

import { FaLocationDot } from 'react-icons/fa6';

import { GrInstagram } from 'react-icons/gr';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import bdcLogo from '../../assets/BSC.svg';
const Footer = ({ setIsModalOpen }) => {
  const handleLink = (goto) => {
    if (goto === 'instagram') {
      window.location.href = 'https://www.instagram.com/devup.umbb/';
    } else if (goto === 'facebook') {
      window.location.href = 'https://www.facebook.com/devup.umbb';
    } else if (goto === 'linkedin') {
      window.location.href = 'https://www.linkedin.com/company/devupumbb';
    }
    else if(goto==='facebook'){
      window.location.href='https://www.facebook.com/devup.umbb'
    }
    else if(goto==='linkedin'){
      window.location.href='https://www.linkedin.com/company/devupumbb'
    }
    else if(goto==='location'){

      window.location.href="https://maps.app.goo.gl/kBpgf8zBCQqiZNJ8A"
    }

    }
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-content-top">
          <div className="footer-content-top-desc">
            <img src={bdcLogo} id="bdclogo" />
            <button onClick={setIsModalOpen}>Apply Now</button>
          </div>
          <div className="footer-content-top-hrefs">
            <a href="#">Home</a>
            <a href="#">Why</a>
            <a href="#">Agenda</a>
            <a href="#">Schedule</a>
            <a href="#">Sponsor</a>
            <a href="#">FAQ</a>
          </div>
          <div className='footer-content-top-location' onClick={()=>{
            handleLink('location')
          }}>
            <i className='location-icon'><FaLocationDot /></i>
            <a href="https://maps.app.goo.gl/kBpgf8zBCQqiZNJ8A">Auberge corso boumerdes</a>
          </div>
        </div>
        <div className="footer-content-line"></div>
        <div className="footer-content-bottom">
          <p>© 2024 DevUp. All Rights Reserved.</p>
          <div className="footer-content-bottom-social">
            <i
              className="social-icon"
              onClick={() => {
                handleLink('instagram');
              }}
            >
              <GrInstagram />
            </i>
            <i
              className="social-icon"
              onClick={() => {
                handleLink('facebook');
              }}
            >
              <FaLinkedin />
            </i>
            <i
              className="social-icon"
              onClick={() => {
                handleLink('linkedin');
              }}
            >
              <FaFacebook />
            </i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
