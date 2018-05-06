const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

var app = express();

app.use(bodyParser.json());

//============ROUTES=============

//POST ROUTE
app.post('/todos', function(req, res){
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

//GET ROUTES
app.get('/todos', function(req, res){
  Todo.find({}).then((todos) => {
    res.send({todos: todos});
  }, function(e){
    res.status(400).send(e);
  });
});

app.listen(3000, function(){
  console.log('Server started!');
});

module.exports = {app};
