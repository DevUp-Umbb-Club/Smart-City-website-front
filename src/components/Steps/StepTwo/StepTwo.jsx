/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Chip, Avatar } from '@mui/material';
import { skills } from '../../../utils/skills';
import './StepTwo.css';

const StepTwo = ({ formData, setFormData }) => {
  const [selectedSkills, setSelectedSkills] = useState(formData.skills);

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
