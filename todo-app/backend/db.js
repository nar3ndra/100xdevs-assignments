const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://user-1:Vwx%4012345@cluster0.bovykzl.mongodb.net/todoapp")

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todoModel = mongoose.model('todo',todoSchema)


module.exports = {
    todoModel
}