/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Alert, Snackbar } from '@mui/material';
import axios from 'axios';
import './register.css';
import { useState, useEffect } from 'react';
import StepOne from '../Steps/StepOne/StepOne';
import StepTwo from '../Steps/StepTwo/StepTwo';
import StepThree from '../Steps/StepThree/StepThree';
import StepFour from '../Steps/StepFour/StepFour';

const ApiUrl = import.meta.env.VITE_API_URL;

export default function Register({ open, close }) {
  const [step, setStep] = useState(1);
  const [errorMessage, setErrorMessage] = useState('');
  const [progressBarWidth, setprogressBarWidth] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    NationalCartId: '',
    skills: [],
    githubLink: '',
    linkedinLink: '',
    portfolioLink: '',
    teamName: '',
    participationCategory: '',
    participatedBefore: false,
  });

  const handleSubmit = async () => {
    console.log(formData); // You can keep this to see the data in the console

    try {
      const response = await axios.post(`${ApiUrl}`, formData, {
        headers: {
          'Content-Type': 'application/json', // Ensure correct content type for JSON
        },
      });

      if (response.status === 201) {
        console.log('Form data submitted successfully');
        // Optionally, you can handle a success message or redirect here
      } else {
        setErrorMessage('An error occurred during the submission');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('An error occurred during the submission');
    }

    close(); // Close the modal after submission
  };

  const validateForm = (step) => {
    if (step === 1) {
      if (
        formData.firstName === '' ||
        formData.lastName === '' ||
        formData.email === '' ||
        formData.phone === '' ||
        formData.NationalCartId === ''
      ) {
        setErrorMessage('Please enter all the fields');
        return false;
      }
    } else if (step === 2) {
      if (formData.skills.length == 0) {
        setErrorMessage('Please select at least one Skill');
        return false;
      }
    } else if (step === 3) {
      if (formData.githubLink === '') {
        setErrorMessage('Please enter at least your GitHub link');
        return false;
      }
    } else if (step === 4) {
      if (formData.teamName === '' || formData.participationCategory === '') {
        setErrorMessage('Please enter at the team name and choose a role');
        return false;
      }
    }
    return true;
  };

  useEffect(() => {
    if (step === 1) {
      setprogressBarWidth(0);
    } else if (step === 2) {
      setprogressBarWidth(30);
    } else if (step === 3) {
      setprogressBarWidth(60);
    } else if (step === 4) {
      setprogressBarWidth(90);
    }
  }, [step]);

  const handleNext = () => {
    if (validateForm(step)) {
      if (step != 4) {
        setStep(step + 1);
      } else handleSubmit();
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const returnStep = () => {
    if (step === 1) {
      return <StepOne formData={formData} setFormData={setFormData} />;
    } else if (step === 2) {
      return <StepTwo formData={formData} setFormData={setFormData} />;
    } else if (step === 3) {
      return <StepThree formData={formData} setFormData={setFormData} />;
    } else if (step === 4) {
      return <StepFour formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <Modal open={open} onClose={close} aria-labelledby="registration-title">
      <Box className="modal-container">
        {errorMessage && (
          <Snackbar
            open={true}
            autoHideDuration={3000}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            onClose={() => setErrorMessage('')}
          >
            <Alert
              onClose={() => setErrorMessage('')}
              severity="error"
              sx={{ width: '100%' }}
            >
              {errorMessage}
            </Alert>
          </Snackbar>
        )}

        <div className="progress-bar">
          <div
            className={`progress-bar-fill active`}
            style={{ width: `${progressBarWidth}%` }}
          ></div>

          <div className={`progress-step ${step >= 1 && 'active'}`}>
            <div className="step-label">Personal</div>
            {step >= 1 && <div className="step-triangle"></div>}
            <div className="step-number">01</div>
          </div>
          <div className={`progress-step ${step >= 2 && 'active'}`}>
            <div className="step-label">Skills</div>
            {step >= 2 && <div className="step-triangle"></div>}

            <div className="step-number">02</div>
          </div>
          <div className={`progress-step ${step >= 3 && 'active'}`}>
            <div className="step-label">Professional</div>
            {step >= 3 && <div className="step-triangle"></div>}

            <div className="step-number">03</div>
          </div>
          <div className={`progress-step ${step >= 4 && 'active'}`}>
            <div className="step-label">Team</div>
            {step >= 4 && <div className="step-triangle"></div>}

            <div className="step-number">04</div>
          </div>
        </div>
        <h1 className="title">Registration</h1>
        {returnStep()}
        <div className="button-group">
          {step !== 1 ? (
            <Button
              className="back-button"
              onClick={handleBack}
              disabled={step === 1}
            >
              Back
            </Button>
          ) : (
            <div></div>
          )}
          <Button className="next-button" onClick={handleNext}>
            {step !== 4 ? 'Next' : 'Register'}
          </Button>
        </div>
      </Box>
    </Modal>
  );
}
