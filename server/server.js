const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

var app = express();
const port = process.env.PORT || 3000;

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

//GET TODOBY ID
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if(!todo){
      return res.status(404).send();
    }

    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
});

//DELETE ROUTES
app.delete('/todos/:id', function(req, res){
  var id = req.params.id;

  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  Todo.findByIdAndRemove(id).then((todo) => {
    if(!todo){
      return res.status(404).send();
    }

    res.send(todo);
  }).catch((e) => {
    res.status(404).send();
  });
});

app.listen(port, function(){
  console.log(`Server started on port ${port}`);
});

module.exports = {app};
