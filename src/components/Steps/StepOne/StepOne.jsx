import TextField from '@mui/material/TextField';
import './StepOne.css';
const StepOne = () => {
  return (
    <div>
      <div className="form-section">
        <h2 className="section-title">Personal information</h2>

        <TextField
          fullWidth
          placeholder="Full name"
          className="input-field"
          variant="outlined"
        />

        <TextField
          fullWidth
          placeholder="Email Address"
          className="input-field"
          variant="outlined"
        />

        <TextField
          fullWidth
          placeholder="Phone Number"
          className="input-field"
          variant="outlined"
        />
      </div>
    </div>
  );
};

export default StepOne;
