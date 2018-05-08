var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://catalin:Scrotocs69@ds119060.mlab.com:19060/todoappuri' || 'mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
};
