var express = require('express');

const {createMonthlyTodo} = require('../controllers/month')

var router = express.Router();

router.post('/', createMonthlyTodo);

module.exports = router;