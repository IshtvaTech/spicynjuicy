require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const connectDB = require('./config/db'); 
const authRouter = require('./routes/auth/authRoutes');
const adminProductsRouter=require('./routes/admin/productRoutes')
const shopProductsRouter=require('./routes/shop/productRoutes')
const shopCartRouter=require('./routes/shop/cartRoutes')
const shopAddressRouter=require('./routes/shop/addressRoutes')
const shopOrderRouter=require('./routes/shop/orderRoutes')

const app = express();
const PORT = process.env.PORT || 5000;


connectDB();


app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma"
    ],
    credentials: true
  })
);

app.use(cookieParser());
app.use(express.json());


app.use('/api/auth', authRouter);
app.use('/api/admin/products',adminProductsRouter);
app.use('/api/shop/products',shopProductsRouter);
app.use('/api/shop/cart',shopCartRouter);
app.use('/api/shop/address',shopAddressRouter);
app.use('/api/shop/order',shopOrderRouter)



app.listen(PORT, () => console.log(` Server is running on port ${PORT}`));
