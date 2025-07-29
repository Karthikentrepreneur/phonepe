import React from 'react';
import { Link } from 'react-router-dom';

const Failure = () => {
  return (
    <div className="result-container">
      <div className="result-icon failure-icon">❌</div>
      <h1 className="result-title failure-title">Payment Failed</h1>
      <p className="result-message">
        Unfortunately, your payment could not be processed. 
        This could be due to insufficient balance, network issues, or payment cancellation.
      </p>
      <div style={{ marginBottom: '2rem' }}>
        <p style={{ color: '#f56565', fontWeight: 'bold' }}>
          No amount has been deducted from your account
        </p>
      </div>
      <Link to="/" className="back-button">
        Try Again
      </Link>
    </div>
  );
};

export default Failure;