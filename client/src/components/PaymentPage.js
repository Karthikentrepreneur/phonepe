import React, { useState } from 'react';
import axios from 'axios';

const PaymentPage = () => {
  const [formData, setFormData] = useState({
    name: 'John Doe',
    number: '9876543210',
    amount: 1
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);

    const paymentData = {
      name: formData.name,
      amount: parseFloat(formData.amount),
      number: formData.number,
      MUID: "MUID" + Date.now(),
      transactionId: 'T' + Date.now(),
    };

    try {
      const response = await axios.post('/api/payment', paymentData);
      // The response should redirect to PhonePe payment page
      console.log('Payment initiated:', response.data);
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment initiation failed. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="payment-container">
      <div className="payment-header">
        <img 
          src="https://logos-world.net/wp-content/uploads/2023/01/PhonePe-Logo.png" 
          alt="PhonePe" 
          className="phonepe-logo"
        />
        <h1 className="payment-title">
          Secure Payment
          <span className="live-badge">LIVE</span>
        </h1>
        <p className="payment-subtitle">
          Fast, secure, and reliable payment processing
        </p>
      </div>

      <form className="payment-form" onSubmit={handlePayment}>
        <div className="form-group">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="form-input"
            required
            placeholder="Enter your full name"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Mobile Number</label>
          <input
            type="tel"
            name="number"
            value={formData.number}
            onChange={handleInputChange}
            className="form-input"
            required
            placeholder="Enter 10-digit mobile number"
            pattern="[0-9]{10}"
            maxLength="10"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Amount (₹)</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
            className="form-input"
            required
            min="1"
            step="0.01"
            placeholder="Enter amount"
          />
        </div>

        <div className="payment-details">
          <div className="detail-row">
            <span className="detail-label">Name:</span>
            <span className="detail-value">{formData.name}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Mobile:</span>
            <span className="detail-value">{formData.number}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Amount:</span>
            <span className="detail-value">₹{formData.amount}</span>
          </div>
        </div>

        <button 
          type="submit" 
          className="pay-button"
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="spinner"></span>
              <span style={{ marginLeft: '10px' }}>Processing...</span>
            </>
          ) : (
            'Pay Now with PhonePe'
          )}
        </button>
      </form>

      <div style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#718096' }}>
        <p>🔒 Your payment is secured with 256-bit SSL encryption</p>
        <p>💳 Supports UPI, Cards, Net Banking & Wallets</p>
      </div>
    </div>
  );
};

export default PaymentPage;