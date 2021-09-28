import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config()

connectDB()

const app = express();

app.get('/', (req, res) => {
  res.send('API is running......');
})

app.use('/api/products', productRoutes)

// Fallback error for 404 not found
app.use(notFound)

// Error middleware 
app.use(errorHandler)

const PORT = process.env.PORT || 5000
const mode = process.env.NODE_ENV

app.listen(PORT, console.log(`Server running in ${mode} mode on port ${PORT}`));
