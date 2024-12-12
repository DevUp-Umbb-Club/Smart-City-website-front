import TextField from '@mui/material/TextField';
import './StepOne.css';
const StepOne = () => {
  return (
    <div className="form-section">
      <h2 className="section-title">Personal information</h2>
      <div className="ligne">
        <div className="label-input-container">
          <h3 className="label">First Name</h3>
          <TextField
            fullWidth
            placeholder="Last name"
            className="input-field"
            variant="outlined"
          />
        </div>
        <div className="label-input-container">
          <h3 className="label">Last Name</h3>
          <TextField
            fullWidth
            placeholder="Last name"
            className="input-field"
            variant="outlined"
          />
        </div>
      </div>
      <div className="ligne">
        <div className="label-input-container">
          <h3 className="label">Email</h3>

          <TextField
            fullWidth
            placeholder="Email Address"
            className="input-field"
            variant="outlined"
          />
        </div>
        <div className="label-input-container">
          <h3 className="label">Phone Number</h3>

          <TextField
            fullWidth
            placeholder="Phone Number"
            className="input-field"
            variant="outlined"
          />
        </div>
      </div>

      <h3 className="label">National Card ID</h3>

      <TextField
        fullWidth
        placeholder="National Card ID"
        className="input-field"
        variant="outlined"
      />
    </div>
  );
};

export default StepOne;
