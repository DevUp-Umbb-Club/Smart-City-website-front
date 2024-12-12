/* eslint-disable react/prop-types */
import {
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import './StepFour.css';

const StepFour = ({ formData, setFormData }) => {
  const handleChange = (e, isCheckBox = false) => {
    const { name, value, checked } = e.target;
    console.log(name, value, checked);

    setFormData({
      ...formData,
      [name]: isCheckBox && name !== 'participationCategory' ? checked : value,
    });
  };

  return (
    <div className="form-section">
      <h2 className="section-title">Professional Information</h2>

      <h3 className="label">Team Name*</h3>
      <TextField
        fullWidth
        placeholder="Team Name"
        className="input-field"
        variant="outlined"
        name="teamName"
        value={formData.teamName || ''}
        onChange={handleChange}
      />

      <h3 className="label">Your Team Role</h3>
      <RadioGroup
        row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="participationCategory"
        value={formData.participationCategory || ''}
        onChange={handleChange}
      >
        <FormControlLabel
          value="frontend developer"
          control={
            <Radio
              sx={{ color: 'white', '&.Mui-checked': { color: '#00ffd1' } }}
            />
          }
          label="Frontend Developer"
        />
        <FormControlLabel
          value="backend developer"
          control={
            <Radio
              sx={{ color: 'white', '&.Mui-checked': { color: '#00ffd1' } }}
            />
          }
          label="Backend Developer"
        />
        <FormControlLabel
          value="fullstack developer"
          control={
            <Radio
              sx={{ color: 'white', '&.Mui-checked': { color: '#00ffd1' } }}
            />
          }
          label="Fullstack Developer"
        />
        <FormControlLabel
          value="mobile developer"
          control={
            <Radio
              sx={{ color: 'white', '&.Mui-checked': { color: '#00ffd1' } }}
            />
          }
          label="Mobile Developer"
        />
        <FormControlLabel
          value="ai developer"
          control={
            <Radio
              sx={{ color: 'white', '&.Mui-checked': { color: '#00ffd1' } }}
            />
          }
          label="AI Developer"
        />
        <FormControlLabel
          value="designer"
          control={
            <Radio
              sx={{ color: 'white', '&.Mui-checked': { color: '#00ffd1' } }}
            />
          }
          label="Designer"
        />
      </RadioGroup>

      <h3 className="label">Have you participated in a Hackathon Before?</h3>
      <FormControlLabel
        control={
          <Checkbox
            name="participatedBefore"
            checked={formData.participatedBefore || false}
            sx={{ color: 'white', '&.Mui-checked': { color: '#00ffd1' } }}
            onChange={(e) => handleChange(e, true)}
          />
        }
        label="Yes, I have participated in a hackathon previously"
      />
    </div>
  );
};

export default StepFour;
