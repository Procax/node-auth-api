// import connectDB from "./config/db";
const { connect } = require('mongoose');
const connectDB = require('./config/db')
const express = require('express')
const authRoutes = require('./routes/authRoutes')
require('dotenv').config();

const app = express();
connectDB()

app.use(express.json());

app.use('/api/auth', authRoutes)


app.listen(process.env.PORT, () => console.log(`Server running on http://localhost:${process.env.PORT}`));
