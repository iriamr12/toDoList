const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true
  }
});

const monthlyTodo = mongoose.model('monthlyTodo', todoSchema);

module.exports = monthlyTodo;
