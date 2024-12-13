import './Navbar.css';
import logo from '../../assets/BSC.svg';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import Register from '../Register/Register';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleRegisterClick = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <Register open={isModalOpen} close={handleCloseModal} />
      <nav ref={menuRef}>
        <Link to="/">
          <img src={logo} alt="BSC Logo" />
        </Link>

        <span onClick={toggleMenu}>
          <RxHamburgerMenu color="white" size={25} />
        </span>

        <ul className={` ${isMenuOpen && 'open'}`}>
          <li>
            <HashLink
              smooth
              to="/#home"
              className={activeSection === 'home' && 'active'}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="/#about"
              className={activeSection === 'about' && 'active'}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="/#judges"
              className={activeSection === 'judges' && 'active'}
              onClick={() => setIsMenuOpen(false)}
            >
              Judges
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="/#agenda"
              className={activeSection === 'agenda' && 'active'}
              onClick={() => setIsMenuOpen(false)}
            >
              Agenda
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="/#faq"
              className={activeSection === 'faq' && 'active'}
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </HashLink>
          </li>
        </ul>

        <button onClick={handleRegisterClick}>Apply now</button>
      </nav>
    </>
  );
};

export default Navbar;
