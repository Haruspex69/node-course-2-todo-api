// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, db){
  if(err){
    return console.log('Umable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({_id: new ObjectID('5aeb4f3d7db5f80f54dce9bd')}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, function(err){
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find({}).count().then(function(count){
  //   console.log('Todos count: ', count);
  // }, function(err){
  //   console.log('Unable to count todos', err);
  // });

  db.collection('Users').find({name: 'Catalin Manea'}).toArray().then(function(count){
    console.log(JSON.stringify(count, undefined, 2));
  }, function(err){
    console.log('Unable to find input', err);
  });

  // db.close();
});
