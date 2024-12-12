import TextField from '@mui/material/TextField';
import './StepThree';
const StepThree = () => {
  return (
    <div className="form-section">
      <h2 className="section-title">Professional information</h2>

      <h3 className="label">Github Link*</h3>

      <TextField
        fullWidth
        placeholder="Github Link"
        className="input-field"
        variant="outlined"
      />
      <h3 className="label">Linkdln link</h3>

      <TextField
        fullWidth
        placeholder="Linkdln link"
        className="input-field"
        variant="outlined"
      />
      <h3 className="label">Portfolio Link</h3>

      <TextField
        fullWidth
        placeholder="Portfolio Link"
        className="input-field"
        variant="outlined"
      />
    </div>
  );
};

export default StepThree;
