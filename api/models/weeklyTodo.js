const mongoose = require('mongoose');

const weeklyTodoSchema = new mongoose.Schema({
    weekTask: {
        type: String,
        required: true
    }
});

const week = mongoose.model('week', weeklyTodoSchema);

module.exports = week;
