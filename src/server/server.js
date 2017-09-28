var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
app.set('views', path.resolve('src', 'server', 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var todos = [
  {"id": 1, "text": "Hello, world!", "status": "active"},
  {"id": 2, "text": "Pick up groceries", "status": "complete"}
];

var highestTodoId = 2;

app.get('/todos', function(req, res) {
  res.json(todos);
});

app.get('/todos/:id', function(req, res) {
  var id = req.params.id;
  var index = todos.findIndex(function(todo) {
    return todo.id == id;
  });

  res.json(todos[index]);
});

app.post('/todos', function(req, res) {
  var text = req.body.data.text;
  if (!text) {
    return res.status(400).json({"message": "text is required"});
  }

  var id = ++highestTodoId;
  var newTodo = { "id": id, "text": text, "status": "active" };
  todos.push(newTodo);

  res.json(todos);
});

app.delete('/todos/:id', function(req, res) {
  var id = req.params.id;
  var index = todos.findIndex(function(todo) {
    return todo.id == id;
  });
  var todo = todos[index]

  todos.splice(index, 1);

  res.json(todo);
});

app.put('/todos/:id', function(req, res) {
  var id = req.params.id
  var text = req.body.data.text
  var status = req.body.data.status
  const validStatus = ['complete', 'active', 'archived']

  var index = todos.findIndex(function(todo) {
    return todo.id == id;
  });

  var todo = todos[index]

  if (!text) {
    return res.status(400).json({"message": "text is required"});
  }

  if (!validStatus.includes(status)) {
    return res.status(400).json({"message": "status is not valid"});
  }

  todo.text = text;
  todo.status = status;

  res.json(todo);
});

app.get('*', function(req, res) {
  var bundle = `//${req.hostname}:8080/public/bundle.js`;

  res.render('index', {bundle});
});

// Node server.
var port = 3000;
var server = app.listen(port, function() {
  console.log('SERVER STARTED LISTENING ON PORT ' + port);
});

// Dev server.
var devServer = require('../../tools/development-server');
var devPort = 8080;

devServer.listen(devPort, '0.0.0.0', () => {});
