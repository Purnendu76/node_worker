const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  work_Position: {
    type: String,  // Add the type property
    enum: ['chef', 'waiter', 'manager', 'casher'],
    required: true
  },
  number: {
    type: Number,  // Add the type property
    unique: true
  },
  email: {
    type: String,
    unique: true
  }
});

const Worker = mongoose.model('Worker', workerSchema);
module.exports = Worker;
