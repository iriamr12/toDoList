var dailyTodo = require('../models/dailyTodo');
require('dotenv').config();

exports.createDailyTodo = async (req, res) => {
    const task = req.body.task;
    dailyTodo.create({
        task: task
    }).then(result => res.json(result))
    .catch(err => res.json(err))
}

exports.getDailyTodos = async (req, res) => {
    dailyTodo.find().then(result => res.json(result))
    .catch(err => res.json(err))
}

exports.deleteDailyTodo = async (req, res) => {
    const id = req.params.id;
    dailyTodo.findByIdAndDelete(id).then(result => res.json(result))
    .catch(err => res.json(err))
}
