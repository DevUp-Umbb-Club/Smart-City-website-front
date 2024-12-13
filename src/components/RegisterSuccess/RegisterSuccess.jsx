/* eslint-disable react/prop-types */
import { Button } from '@mui/material';
import { FaRegCheckCircle } from 'react-icons/fa';
import ConfettiExplosion from 'react-confetti-explosion';

import './RegisterSuccess.css';
const RegisterSuccess = ({ close, isExploding }) => {
  return (
    <div
      style={{
        minHeight: '650px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 10,
      }}
      className="register-success"
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: 5,
        }}
      >
        {isExploding && <ConfettiExplosion zIndex={10} />}
        <FaRegCheckCircle size={100} color="#00ffd1" />
        <h2 style={{ textAlign: 'center' }}>
          Your registration was successful !🥳 We Hope We See You Soon 🎉
        </h2>
      </div>

      <Button onClick={close}>Close</Button>
    </div>
  );
};

export default RegisterSuccess;
