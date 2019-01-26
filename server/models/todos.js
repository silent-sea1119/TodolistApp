var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/todoapp', {
    useMongoClient: true,
});
mongoose.set("debug", true);
mongoose.Promise = Promise;

var todoSchema = new mongoose.Schema({
    todo: String
});

var Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;