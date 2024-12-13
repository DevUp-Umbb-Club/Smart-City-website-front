import { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import './faq.css';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: 'What is BSC?',
      answer:
        'No experience is necessary! We provide training and mentorship to help you grow',
    },
    {
      question: 'Q2',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      question: 'Q3',
      answer:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      question: 'Q4',
      answer:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
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
