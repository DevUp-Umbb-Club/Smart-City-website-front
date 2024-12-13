import { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import './Faq.css';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: 'What is BSC?',
      answer:
        'It is the first hackathon organized by DevUp in Boumerdes,its goal is to find solutions to make our beloved city a better and smarter one!',
    },
    {
      question: 'Do i need experience to participate?',
      answer:
        'No experience is necessary! Only skills! We provide  mentorship to help you grow',
    },
    {
      question: 'I need to form a team of how many members?',
      answer: 'Each team should have 4 members,not more and not less',
    },
    {
      question: 'Is food and place to sleep offered by the organizers?',
      answer:
        "Yes,just come with your computer,charger and don't forget your knowledge!.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-container" id="faq">
      <h2 className="faq-title">FAQs</h2>
      <div className="faq-list">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? 'open' : ''}`}
          >
            <button
              className="faq-question"
              onClick={() => toggleAccordion(index)}
            >
              {item.question}
              <span className="faq-icon">
                <IoIosArrowForward size={30} fill="white" />
              </span>
            </button>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
