import './MoreAbout.css';

import contact from '../../assets/contact.png';

import location from '../../assets/location.png';

import trending from '../../assets/trending.png';

import gift from '../../assets/gift.png';

import moreaboutImage from '../../assets/moreabout.png';
const MoreAbout = () => {
  return (
    <section className="moreabout" id="about">
      <div className="moreabout-content">
        <img id="moreaboutimage" src={moreaboutImage} />
        <h2>More About BSC</h2>
        <p>
          Join us for an exciting three-day onsite event, running from 19th december. During this time, participants will work intensively to develop
          innovative solutions to a real-world challenge.
        </p>

        <div className="moreabout-cards">
          <div className="moreabout-card">
            <div className="moreabout-card-icon">
              <span>
                <img src={contact} alt="contact" />
              </span>
            </div>

            <div className="moreabout-card-content">
              <p>Three-day onsite</p>
            </div>
          </div>

          <div className="moreabout-card">
            <div className="moreabout-card-icon">
              <span>
                <img src={location} alt="location" />
              </span>
            </div>
            <div className="moreabout-card-content">
              <p>In Corso, Boumerdes</p>
            </div>
          </div>

          <div className="moreabout-card">
            <div className="moreabout-card-icon">
              <span>
                <img src={trending} alt="trending" />
              </span>
            </div>
            <div className="moreabout-card-content">
              <p>mentor support</p>
            </div>
          </div>

          <div className="moreabout-card">
            <div className="moreabout-card-icon">
              <span>
                <img src={gift} alt="gift" />
              </span>
            </div>
            <div className="moreabout-card-content">
              <p>Distinguished Prizes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreAbout;
