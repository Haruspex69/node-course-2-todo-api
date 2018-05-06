// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, db){
  if(err){
    return console.log('Umable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5aede60f0be03338602c83f1')}, {$set: {completed: true}}, {returnOriginal: false}).then(function(updated){
  //   console.log(updated);
  // });

  db.collection('Users').findOneAndUpdate({_id: new ObjectID('5aeb50c3f5873b1eec2f0646')}, {$set: {name: 'Catalin Manea'}, $inc: {age: +1}}, {returnOriginal: false}).then((result) => {
    console.log(result);
  });

  // db.close();
});
