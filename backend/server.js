require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/mern-cicd';
mongoose.connect(mongoURI).then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

// Routes
app.use('/api', apiRoutes);

// Health check endpoint for Render
app.get('/', (req, res) => {
    res.send('MERN CI/CD API is running');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
