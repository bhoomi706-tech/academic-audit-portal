const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Database connection
mongoose.connect('mongodb://localhost:27017/yourdbname', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Basic API routes
app.get('/api/health', (req, res) => {
    res.send({ message: 'API is healthy!' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
