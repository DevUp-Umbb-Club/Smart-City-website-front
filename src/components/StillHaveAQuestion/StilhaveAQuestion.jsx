import './StiHaveAQuestion.css'


import instgramLogo from '../../assets/Instagram.png'
import facebookLogo from '../../assets/Facebook.png'
import linkedinLogo from '../../assets/Linkedin.png'

import stillhavequestionImage from '../../assets/stillhavequestion.png'
import './StiHaveAQuestion.css'
const StilhaveAQuestion = () => {
  return (
    <section className='still-have-a-question'>
        <div className='still-have-a-question-content'>

            <img src={stillhavequestionImage} id='stillhaveaquestionimage' />
            <h2>Still have a question?</h2>
            <p id='contentquestion'>Contact Us</p>

            <div className='still-have-a-question-cards'>
                <a href="https://www.instagram.com/devup.umbb/ ">
                <div className='still-have-a-question-card'>
                <div className='still-have-a-question-card-icon'>
                    <img src={instgramLogo} alt='instagram' />
                    </div>
                    <p>Instagram</p>
                </div>
                </a>
                <div className='still-have-a-question-card'>
                    <a href="https://www.instagram.com/devup.umbb/">
                  <div className='still-have-a-question-card-icon'>
                    <span>
                    <img src={facebookLogo} alt='instagram' />
                    </span>
                    </div>
                    <p>Facebook</p>
                    </a>
                </div>

                <div className='still-have-a-question-card' >
                    <a href="https://www.linkedin.com/company/devupumbb " >
                    <div className='still-have-a-question-card-icon'>
                    <span>
                    <img src={linkedinLogo} alt='instagram' />
                    </span>
                    </div>
                    <p>Linkedin</p>
                    </a>
                </div>
            </div>

        </div>
    </section>
  )
}

export default StilhaveAQuestion