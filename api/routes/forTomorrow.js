var express = require('express');

const 
{createForTomorrow,
    getTomorrowTodos,
    deleteTomorrowTodo,

} = require('../controllers/forTomorrow');

var router = express.Router();

router.post('/', createForTomorrow);
router.get('/get', getTomorrowTodos);
router.delete('/delete/:id', deleteTomorrowTodo);

module.exports = router;