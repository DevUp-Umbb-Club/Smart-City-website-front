import { MdOutlineEmail, MdLocalPhone } from 'react-icons/md';
import './FindUs.css';
const FindUs = () => {
  return (
    <section className="find-us-section">
      <h2>Find Us Here</h2>
      <div className="container">
        <div className="texts">
          <div className="info">
            <MdOutlineEmail size={30} color="#38FBDB" />
            <div className="text-info">
              <h3>Email</h3>
              <p>Reach us anytime</p>
              <a href="mailto:info@example.com">info@example.com</a>{' '}
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7728.950781552489!2d3.4380449017996693!3d36.76159384491185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e69b40975d599%3A0xd161c31776388e89!2z2YXYrtmK2YUg2LTYqNin2Kgg2LTZh9mK2K8g2YXYrdmF2K8g2KjZiNi02YTYp9i62YU!5e0!3m2!1sfr!2sdz!4v1734010580073!5m2!1sfr!2sdz"
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
