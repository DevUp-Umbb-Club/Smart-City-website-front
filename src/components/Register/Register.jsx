/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import './register.css';
import { useState, useEffect } from 'react';
import StepOne from '../Steps/StepOne/StepOne';
import StepTwo from '../Steps/StepTwo/StepTwo';
import StepThree from '../Steps/StepThree/StepThree';
import StepFour from '../Steps/StepFour/StepFour';

export default function Register({ open, close }) {
  const [step, setStep] = useState(1);
  const [progressBarWidth, setprogressBarWidth] = useState(0);

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
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const returnStep = () => {
    if (step === 1) {
      return <StepOne />;
    } else if (step === 2) {
      return <StepTwo />;
    } else if (step === 3) {
      return <StepThree />;
    } else if (step === 4) {
      return <StepFour />;
    }
  };

  return (
    <Modal open={open} onClose={close} aria-labelledby="registration-title">
      <Box className="modal-container">
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
          <Button
            className="next-button"
            onClick={handleNext}
            disabled={step === 4}
          >
            {step !== 4 ? 'Next' : 'Register'}
          </Button>
        </div>
      </Box>
    </Modal>
  );
}
