var express = require('express');

const 
{createweekTodo,
    getweekTodo,
    deleteweekTodo,

} = require('../controllers/week');

var router = express.Router();

router.post('/', createweekTodo);
router.get('/get', getweekTodo);
router.delete('/delete/:id', deleteweekTodo);

module.exports = router;