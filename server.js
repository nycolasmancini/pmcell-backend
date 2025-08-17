const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 9000;

// Middleware
app.use(cors({
  origin: process.env.STORE_CORS?.split(',') || ['http://localhost:8000', 'https://*.vercel.app'],
  credentials: true
}));
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', service: 'PMCELL Backend' });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'PMCELL Medusa Backend',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      store: '/store',
      admin: '/admin'
    }
  });
});

// Mock store endpoints
app.get('/store/products', (req, res) => {
  res.json({
    products: [],
    count: 0,
    limit: 10,
    offset: 0
  });
});

app.get('/store/regions', (req, res) => {
  res.json({
    regions: [
      {
        id: 'reg_br',
        name: 'Brasil',
        currency_code: 'BRL',
        countries: ['BR']
      }
    ]
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 PMCELL Backend running on port ${PORT}`);
  console.log(`Health check available at http://localhost:${PORT}/health`);
});