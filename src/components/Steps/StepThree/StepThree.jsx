/* eslint-disable react/prop-types */
import TextField from '@mui/material/TextField';
import './StepThree';
const StepThree = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="form-section">
      <h2 className="section-title">Professional information</h2>

      <h3 className="label">Github Link*</h3>

      <TextField
        fullWidth
        name="githubLink"
        value={formData.githubLink || ''}
        onChange={handleChange}
        placeholder="Github Link"
        className="input-field"
        variant="outlined"
      />
      <h3 className="label">Linkdln link</h3>

      <TextField
        fullWidth
        name="linkedinLink"
        value={formData.linkedinLink || ''}
        onChange={handleChange}
        placeholder="Linkdln link"
        className="input-field"
        variant="outlined"
      />
      <h3 className="label">Portfolio Link</h3>

      <TextField
        fullWidth
        name="portfolioLink"
        value={formData.portfolioLink || ''}
        onChange={handleChange}
        placeholder="Portfolio Link"
        className="input-field"
        variant="outlined"
      />
    </div>
  );
};

export default StepThree;
