var forTomorrow = require('../models/forTomorrowTodo');
require('dotenv').config();

exports.createForTomorrow = async (req, res) => {
    const tomorrowTask = req.body.tomorrowTask;
    forTomorrow.create({
        tomorrowTask:tomorrowTask
    }).then(result => res.json(result))
    .catch(err => res.status(err));
}

exports.getTomorrowTodos = async (req, res) => {
    forTomorrow.find().then(result => res.json(result))
    .catch(err => res.json(err))
}

exports.deleteTomorrowTodo = async (req, res) => {
    const id = req.params.id;
    forTomorrow.findByIdAndDelete(id).then(result => res.json(result))
    .catch(err => res.json(err))
}
