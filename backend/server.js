const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const ratingsRouter = require('./routes/rating'); 

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
const dbUrl = 'mongodb://localhost:27017/rateme'; 
mongoose.connect(dbUrl);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Routes
app.use('/api/ratings', ratingsRouter); 

// Start Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
