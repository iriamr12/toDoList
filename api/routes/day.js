var express = require('express');

const 
{createDailyTodo,
    getDailyTodos,
    deleteDailyTodo,
} = require('../controllers/day')

var router = express.Router();

router.post('/', createDailyTodo);
router.get('/get', getDailyTodos);
router.delete('/delete/:id', deleteDailyTodo);

module.exports = router;