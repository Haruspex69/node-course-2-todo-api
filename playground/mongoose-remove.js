const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user.js');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove()
Todo.findByIdAndRemove('5af1d94b6247ec03b043110b').then((todo) => {
    console.log(todo);
});
