/* eslint-disable react/prop-types */
import { TextField } from '@mui/material';
import './StepOne.css';

const StepOne = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="form-section">
      <h2 className="section-title">Personal information</h2>
      <div className="ligne">
        <div className="label-input-container">
          <h3 className="label">First Name</h3>
          <TextField
            fullWidth
            name="firstName"
            value={formData.firstName || ''}
            onChange={handleChange}
            placeholder="First Name"
            className="input-field"
            variant="outlined"
          />
        </div>
        <div className="label-input-container">
          <h3 className="label">Last Name</h3>
          <TextField
            fullWidth
            name="lastName"
            value={formData.lastName || ''}
            onChange={handleChange}
            placeholder="Last Name"
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
            name="email"
            value={formData.email || ''}
            onChange={handleChange}
            placeholder="Email Address"
            className="input-field"
            variant="outlined"
          />
        </div>
        <div className="label-input-container">
          <h3 className="label">Phone Number</h3>
          <TextField
            fullWidth
            name="phone"
            value={formData.phone || ''}
            onChange={handleChange}
            placeholder="Phone Number"
            className="input-field"
            variant="outlined"
          />
        </div>
      </div>
      <h3 className="label">National Card ID</h3>
      <TextField
        fullWidth
        name="NationalCartId"
        value={formData.NationalCartId || ''}
        onChange={handleChange}
        placeholder="National Card ID"
        className="input-field"
        variant="outlined"
      />
    </div>
  );
};

export default StepOne;
