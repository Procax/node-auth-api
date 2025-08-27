const { connect } = require('mongoose');
const connectDB = require('../config/db')
const express = require('express')
const authRoutes = require('../routes/authRoutes')
require('dotenv').config();

const app = express();
connectDB()

app.use(express.json());

app.use('/api/auth', authRoutes)
export default app;
