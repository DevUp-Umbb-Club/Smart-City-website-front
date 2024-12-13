/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Chip, Avatar } from '@mui/material';
import './StepTwo.css';

const StepTwo = ({ formData, setFormData }) => {
  const [selectedSkills, setSelectedSkills] = useState(formData.skills);

  const skills = {
    Frontend: [
      {
        name: 'React',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      },
      {
        name: 'Vue.js',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg',
      },
      {
        name: 'Angular',
        logo: 'https://angular.io/assets/images/logos/angular/angular.svg',
      },
      {
        name: 'Svelte',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg',
      },
      {
        name: 'Tailwind CSS',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
      },
      {
        name: 'Bootstrap',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg',
      },
      {
        name: 'HTML5',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg',
      },
      {
        name: 'CSS3',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg',
      },
    ],
    Mobile: [
      {
        name: 'React Native',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      },
      {
        name: 'Flutter',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png',
      },
      {
        name: 'Swift',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg',
      },
      {
        name: 'Kotlin',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png',
      },
      {
        name: 'Ionic',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Ionic_Logo.svg',
      },
    ],
    Backend: [
      {
        name: 'Node.js',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
      },
      {
        name: 'Django',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg',
      },
      {
        name: 'Spring Boot',
        logo: 'https://spring.io/images/spring-logo-2022-dark-2eaae6bc2f6cddedb02f73bcdc1c5c8e.svg',
      },
      {
        name: 'Express.js',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png',
      },
      {
        name: 'Ruby on Rails',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Ruby_On_Rails_Logo.svg',
      },
      {
        name: 'PHP',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg',
      },
      {
        name: 'MySQL',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg',
      },
      {
        name: 'PostgreSQL',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg',
      },
      {
        name: 'MongoDB',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg',
      },
      {
        name: 'Redis',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Redis_Logo.svg',
      },
      {
        name: 'Firebase',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Firebase_Logo.svg',
      },
    ],
    IA: [
      {
        name: 'TensorFlow',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg',
      },
      {
        name: 'PyTorch',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg',
      },
      {
        name: 'OpenAI',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/OpenAI_Logo.svg',
      },
      {
        name: 'Keras',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg',
      },
      {
        name: 'Scikit-Learn',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg',
      },
    ],
    Design: [
      {
        name: 'Figma',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
      },
      {
        name: 'Sketch',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Sketch_Logo.svg',
      },
      {
        name: 'Adobe XD',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg',
      },
      {
        name: 'Canva',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Canva_Logo.svg',
      },
      {
        name: 'InVision',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/3/31/InVision_logo.svg',
      },
    ],
  };

  const toggleSkill = (skill) => {
    const newSelectedSkills = selectedSkills.includes(skill)
      ? selectedSkills.filter((s) => s !== skill)
      : [...selectedSkills, skill];
    setSelectedSkills(newSelectedSkills);
    setFormData({ ...formData, skills: newSelectedSkills });
  };

  return (
    <div className="form-section">
      <h2 className="section-title">Your Skills</h2>

      {Object.keys(skills).map((category) => (
        <div key={category} className="skill-category">
          <h3 className="label">{category}</h3>
          <div className="chip-container">
            {skills[category].map((tech) => (
              <Chip
                key={tech.name}
                label={tech.name}
                avatar={
                  <Avatar
                    alt={tech.name}
                    src={tech.logo}
                    size={30}
                    sx={{
                      objectFit: 'contain',
                    }}
                  />
                }
                clickable
                onClick={() => toggleSkill(tech.name)}
                style={{
                  backgroundColor: selectedSkills.includes(tech.name)
                    ? '#00ffd1'
                    : '#e0e0e0',
                  color: selectedSkills.includes(tech.name)
                    ? '#2a3544'
                    : '#000',
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StepTwo;
