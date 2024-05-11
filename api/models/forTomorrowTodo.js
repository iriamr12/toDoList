const mongoose = require('mongoose');

const tomorrowtodoSchema = new mongoose.Schema({
    tomorrowTask:{
        type: String,
        required: true
    }
});

const forTomorrow = mongoose.model('forTomorrow', tomorrowtodoSchema);

module.exports = forTomorrow;