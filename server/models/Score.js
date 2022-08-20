const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// Create a score model that includes a pointer to user, score, and date
const scoreSchema = new Schema({
  
  username: {
    
    type: String,
    required: true,
    trim: true,
    },
  score: {
    type: Number,
    required: true,
  },
  createdDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
});



const Score = model('score', scoreSchema);

module.exports = Score;
