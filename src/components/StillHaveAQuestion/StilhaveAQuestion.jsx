import './StiHaveAQuestion.css'


import instgramLogo from '../../assets/Instagram.png'
import facebookLogo from '../../assets/Facebook.png'
import linkedinLogo from '../../assets/Linkedin.png'
import './StiHaveAQuestion.css'
const StilhaveAQuestion = () => {
  return (
    <section className='still-have-a-question'>
        <div className='still-have-a-question-content'>
            <h2>Still have a question?</h2>
            <p id='contentquestion'>Contact Us</p>

            <div className='still-have-a-question-cards'>
                <div className='still-have-a-question-card'>
                <div className='still-have-a-question-card-icon'>
                    <img src={instgramLogo} alt='instagram' />
                    </div>
                    <p>Instagram</p>
                </div>

                <div className='still-have-a-question-card'>
                <div className='still-have-a-question-card-icon'>
                    <span>
                    <img src={facebookLogo} alt='instagram' />
                    </span>
                    </div>
                    <p>Facebook</p>
                </div>

                <div className='still-have-a-question-card'>
                    <div className='still-have-a-question-card-icon'>
                    <span>
                    <img src={linkedinLogo} alt='instagram' />
                    </span>
                    </div>
                    <p>Linkedin</p>
                </div>
            </div>

        </div>
    </section>
  )
}

export default StilhaveAQuestion