const monthlyTodo = require('../models/monthlyTodo')

exports.createMonthlyTodo = async (req, res, next) => {
    const newTodo = new monthlyTodo(req.body)
    try{
        const savedTodo = await newTodo.save()
        res.status(201).json(savedTodo)
    } catch(err){
        res.status(400).json(err)
    }
}

