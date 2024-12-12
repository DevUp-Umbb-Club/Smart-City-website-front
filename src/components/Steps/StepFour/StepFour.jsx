import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Checkbox } from '@mui/material';
import './StepFour.css';
const StepFour = () => {
  const [value, setValue] = useState('frontend developer');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="form-section">
      <h2 className="section-title">Professional information</h2>

      <h3 className="label">Team Name*</h3>

      <TextField
        fullWidth
        placeholder="Team Name"
        className="input-field"
        variant="outlined"
      />
      <h3 className="label">Your Team Role</h3>
      <RadioGroup
        row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value="frontend developer"
          control={
            <Radio
              sx={{
                color: 'white',
                '&.Mui-checked': {
                  color: '#00ffd1',
                },
              }}
            />
          }
          label="Frontend Developer"
        />
        <FormControlLabel
          value="backend developer"
          control={
            <Radio
              sx={{
                color: 'white',
                '&.Mui-checked': {
                  color: '#00ffd1',
                },
              }}
            />
          }
          label="Backend Developer"
        />
        <FormControlLabel
          value="fullstack developer"
          control={
            <Radio
              sx={{
                color: 'white',
                '&.Mui-checked': {
                  color: '#00ffd1',
                },
              }}
            />
          }
          label="Fullstack Developer"
        />
        <FormControlLabel
          value="mobile developer"
          control={
            <Radio
              sx={{
                color: 'white',
                '&.Mui-checked': {
                  color: '#00ffd1',
                },
              }}
            />
          }
          label="Mobile Developer"
        />
        <FormControlLabel
          value="ai developer"
          control={
            <Radio
              sx={{
                color: 'white',
                '&.Mui-checked': {
                  color: '#00ffd1',
                },
              }}
            />
          }
          label="AI Developer"
        />

        <FormControlLabel
          value="designer"
          control={
            <Radio
              sx={{
                color: 'white',
                '&.Mui-checked': {
                  color: '#00ffd1',
                },
              }}
            />
          }
          label="Designer"
        />
      </RadioGroup>
      <h3 className="label">Have you participated in a Hackathon Before?</h3>
      <FormControlLabel
        control={
          <Checkbox
            sx={{
              color: 'white',
              '&.Mui-checked': {
                color: '#00ffd1',
              },
            }}
          />
        }
        label="Yes i have participated in a hackathon previously"
      />
    </div>
  );
};

export default StepFour;
