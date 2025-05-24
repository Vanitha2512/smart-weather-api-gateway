// apiGateway.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');
app.get('/', (req, res) => {
  res.send('🌐 Smart Weather API Gateway is live!');
});

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Deployed Service URLs on Render
const locationServiceUrl = 'http://localhost:3001';
const weatherServiceUrl = 'http://localhost:3002';
const forecastServiceUrl = 'http://localhost:3003';
const paymentServiceUrl = 'http://localhost:3004';


// 🌍 Location
app.get('/location', async (req, res) => {
  try {
    const response = await axios.get(`${locationServiceUrl}/location`, { params: req.query });
    res.json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json({ error: err.message });
  }
});

// 🌤️ Weather
app.get('/weather', async (req, res) => {
  try {
    const response = await axios.get(`${weatherServiceUrl}/weather`, { params: req.query });
    res.json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json({ error: err.message });
  }
});

// 📈 Forecast
app.get('/forecast', async (req, res) => {
  try {
    const response = await axios.get(`${forecastServiceUrl}/forecast`, { params: req.query });
    res.json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json({ error: err.message });
  }
});

// 💳 Payment
app.post('/pay', async (req, res) => {
  try {
    const response = await axios.post(`${paymentServiceUrl}/pay`, req.body);
    res.json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json({ error: 'Payment Service failed' });
  }
});

// 🚀 Start API Gateway
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🛡️ API Gateway running on http://localhost:${PORT}`);
});

