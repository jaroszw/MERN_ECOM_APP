import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

//routes
import userRoutes from './routes/user.js';
import authRoutes from './routes/auth.js';
import productsRoutes from './routes/product.js';
import cartRoutes from './routes/cart.js';
import cartOrder from './routes/order.js';
import stripePayments from './routes/stripe.js';

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', cartOrder);
app.use('/api/payment', stripePayments);

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is listienning on port ${PORT}`))
  )
  .catch((err) => console.log(err.message));
