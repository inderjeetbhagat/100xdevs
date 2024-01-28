const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://user:t9mhLXi49jvRM6g@cluster0.09lnaho.mongodb.net/")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    complete: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}