var mongoose = require('mongoose');
var MONGODB_URI = 'mongodb://<dbuser>:<dbpassword>@ds119060.mlab.com:19060/todoappuri';
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
};
