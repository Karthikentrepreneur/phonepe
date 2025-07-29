const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const path = require("path");
require("dotenv").config();

app.use(express.json());  
app.use(cors());
const bodyParser = require('body-parser');

// Parse JSON and URL-encoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

// PhonePe Route
const phonepeRoute = require('./routes/phonepe/phonepeRoute')
app.use("/api", phonepeRoute);

// Serve static files from React build
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// Root route for development
app.get('/', (req, res) => {
  res.json({ 
    message: 'PhonePe Payment Server is running!',
    status: 'active',
    endpoints: {
      payment: '/api/payment',
      status: '/api/status/:txnId'
    }
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Starting Server
app.listen(port, () => {
  console.log(`🚀 PhonePe Payment Server running on port ${port}`);
  console.log(`📱 API endpoints available at http://localhost:${port}/api`);
});