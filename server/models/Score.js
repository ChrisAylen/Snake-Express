const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const scoreSchema = new Schema({
  scoreText: {
    type: Number,
    trim: true,
  },
  scoreAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Score = model('Score', scoreSchema);

module.exports = Score;
