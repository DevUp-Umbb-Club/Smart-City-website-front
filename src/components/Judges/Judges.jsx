import './Judges.css';

import judgesImage from '../../assets/judges.png';
import merouane from '../../assets/merouane.png';


import ghalemsalim from '../../assets/mentors/ghalemsalim.jpg'
import medjbersoundous from '../../assets/mentors/medjbersoundous.jpg'
import bendimohammed from '../../assets/mentors/bendimohammed.jpg'
import abdelkaderchergui from '../../assets/mentors/abdelkaderchergui.jpg'
import mechkakhocine from '../../assets/mentors/mechkakhocine.jpg'
import atouirayane from '../../assets/mentors/atouirayane.jpg'
import ouahabibenhenni from '../../assets/mentors/ouahabibenhenni.jpg'
const Judges = () => {
  return (
    <section className="judges" id="judges">
      <div className="judges-content">
        <img src={judgesImage} id="judgesimages" />
        <h2>Mentors</h2>
        <div className="judges-cards">


        <div className="judges-card">
            <div className="judges-card-header">
              <img src={abdelkaderchergui} alt="judge" />
              <h4>Abdelkader Chergui </h4>
              <span>Mentor</span>
            </div>
            <div className="judges-card-content">
              <p>
              M.Res. Student on the Cusp of Graduation, Specializing in Software Engineering & Data Processing
              </p>
            </div>
          </div>


        <div className="judges-card">
            <div className="judges-card-header">
              <img src={atouirayane} alt="judge" />
              <h4>Atoui Rayane </h4>
              <span>Mentor</span>
            </div>
            <div className="judges-card-content">
              <p>
              co lead gdg ensia 4th year IA Student at Ensia
              </p>
            </div>
          </div>


          <div className="judges-card">
            <div className="judges-card-header">
              <img src={bendimohammed} alt="judge" />
              <h4>bendi mohammed Abbderraouf </h4>
              <span>Mentor</span>
            </div>
            <div className="judges-card-content">
              <p>
              co lead gdg ensia 4th year IA Student at Ensia
              </p>
            </div>
          </div>


          <div className="judges-card">
            <div className="judges-card-header">
              <img src={ghalemsalim} alt="judge" />
              <h4>Ghalem Salim </h4>
              <span>Mentor</span>
            </div>
            <div className="judges-card-content">
              <p>
                Merouane Kanoune, a Full Stack Software Engineer and Tech Lead
                with over 4 years of experience. Leading the development of ALID
                and O’KLA
              </p>
            </div>
          </div>

          <div className="judges-card">
            <div className="judges-card-header">
              <img src={medjbersoundous} alt="judge" />
              <h4>Medjber Soundous</h4>
              <span>Mentor</span>
            </div>
            <div className="judges-card-content">
              <p>
              full stack mern developer,
              <br />
                First year master student in software engineering, 
                <br />
                Front end developer at yourIT departement
              </p>
            </div>
          </div>

          

          




          <div className="judges-card">
            <div className="judges-card-header">
              <img src={mechkakhocine} alt="judge" />
              <h4>Mechkak Hocine Arezki</h4>
              <span>Mentor</span>
            </div>
            <div className="judges-card-content">
              <p>
              co lead gdg ensia 4th year IA Student at Ensia
              </p>
            </div>
          </div>



          



          <div className="judges-card">
            <div className="judges-card-header">
              <img src={ouahabibenhenni} alt="judge" />
              <h4>Ouahabi Benhenni </h4>
              <span>Mentor</span>
            </div>
            <div className="judges-card-content">
              <p>
              co lead gdg ensia 4th year IA Student at Ensia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Judges;
