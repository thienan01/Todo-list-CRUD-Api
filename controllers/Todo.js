const Todo = require("../models/Todo");

exports.createTodo = (req, res) => {
  const todo = new Todo(req.body);
  todo.save((err, task) => {
    if (err || !task) {
      return res.status(400).json({
        error: "somethings went wrong",
      });
    }
    res.json({ task });
  });
};
exports.getAllTodo = (req, res) => {
  Todo.find()
    .sort("createAt")
    .exec((err, todoList) => {
      if (err || !todoList) {
        return res.status(400).json({
          error: "somethings went wrong in finding",
        });
      }
      res.json(todoList);
    });
};

exports.getTodoById = (req, res, next, todoId) => {
  Todo.findById(todoId).exec((err, todo) => {
    if (err || !todo) {
      return res.status(400).json({
        error: "somethings went wrong in finding",
      });
    }
    req.todo = todo;
    next();
  });
};

exports.getTodo = (req, res) => {
  return res.json(req.todo);
};

exports.updateTodo = (req, res) => {
  const todo = req.todo;

  todo.task = req.body.task;

  todo.save((err, task) => {
    if (err || !task) {
      return res.status(400).json({
        error: "somethings went wrong when updating",
      });
    }
    res.json({ task });
  });
};

exports.deleteTodo = (req, res) => {
  const todo = req.todo;

  todo.task = req.body.task;

  todo.remove((err, task) => {
    if (err || !task) {
      return res.status(400).json({
        error: "somethings went wrong when delete",
      });
    }
    res.json({
      task_deleted: task,
      message: "Todo deleted",
    });
  });
};
