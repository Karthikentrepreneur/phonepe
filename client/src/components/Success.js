import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className="result-container">
      <div className="result-icon success-icon">✅</div>
      <h1 className="result-title success-title">Payment Successful!</h1>
      <p className="result-message">
        Your payment has been processed successfully. 
        You will receive a confirmation message shortly on your registered mobile number.
      </p>
      <div style={{ marginBottom: '2rem' }}>
        <p style={{ color: '#48bb78', fontWeight: 'bold' }}>
          Transaction completed securely via PhonePe
        </p>
      </div>
      <Link to="/" className="back-button">
        Make Another Payment
      </Link>
    </div>
  );
};

export default Success;