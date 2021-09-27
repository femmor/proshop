import express from 'express';
import dotenv from 'dotenv';
import products from './data/products.js';

dotenv.config()

const app = express();

app.get('/', (req, res) => {
  res.send('API is running......');
})

// products API route
app.get('/api/products', (req, res) => {
  res.json(products)
})

// Single ProductById API route
app.get('/api/product/:id', (req, res) => {
  const product = products.find(p => p._id === req.params.id)
  res.json(product)
})

const PORT = process.env.PORT || 5000
const mode = process.env.NODE_ENV

app.listen(PORT, console.log(`Server running in ${mode} mode on port ${PORT}`));
