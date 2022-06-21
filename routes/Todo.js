const express = require('express');
const router = express.Router();

const {
    getAllTodo,
    createTodo,
    getTodoById,
    getTodo,
    updateTodo,
    deleteTodo
} = require('../controllers/Todo')

router.get('/todo',getAllTodo);

router.post('/todo/create', createTodo)

router.param('todoId',getTodoById)

router.get('/todo/:todoId',getTodo)

router.put("/todo/:todoId/update", updateTodo)

router.put("/todo/:todoId/delete", deleteTodo)

module.exports = router;