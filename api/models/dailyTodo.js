const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true
  }
});

const dailyTodo = mongoose.model('dailyTodo', todoSchema);

module.exports = dailyTodo;

