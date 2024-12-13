import { MdOutlineEmail, MdLocalPhone } from 'react-icons/md';
import './FindUs.css';

import findushereImage from '../../assets/findushere.png';
const FindUs = () => {
  return (
    <section className="find-us-section">
      <img src={findushereImage} id="findushereimage" />
      <h2>Find Us Here</h2>
      <div className="container">
        <div className="texts">
          <div className="info">
            <MdOutlineEmail size={30} color="#38FBDB" />
            <div className="text-info">
              <h3>Email</h3>
              <p>Reach us anytime</p>
              <a
                href="mailto:devupclubumbb@gmail.com
"
              >
                devupclubumbb@gmail.com
              </a>{' '}
            </div>
          </div>
          <div className="info">
            <MdLocalPhone size={30} color="#38FBDB" />
            <div className="text-info">
              <h3>Phone</h3>
              <p>Call us for inquiries</p>
              <a href="tel:+213 794 51 59 34">+213 794 51 59 34</a>
              <a href="tel:+213 657 91 89 73">+213 657 91 89 73</a>
            </div>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.265893085066!2d3.4503255000000004!3d36.7641883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e69e5f4fd2e9b%3A0x552f63a98855aa57!2sAuberge%20corso%20boumerdes!5e0!3m2!1sen!2sdz!4v1734088813225!5m2!1sen!2sdz"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default FindUs;
