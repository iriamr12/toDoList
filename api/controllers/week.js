var week = require('../models/weeklyTodo');
require('dotenv').config();

exports.createweekTodo = async (req, res) => {
    const weekTask = req.body.weekTask;
    week.create({
        weekTask:weekTask
    }).then(result => res.json(result))
    .catch(err => res.status(err));
}

exports.getweekTodo = async (req, res) => {
    week.find().then(result => res.json(result))
    .catch(err => res.json(err))
}

exports.deleteweekTodo = async (req, res) => {
    const id = req.params.id;
    week.findByIdAndDelete(id).then(result => res.json(result))
    .catch(err => res.json(err))
}
