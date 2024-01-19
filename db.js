/*
TO do {
    title: string;
    description : string;
    smpltedd: boolean
}
*/

const mongoose = require("mongoose");




mongodb://localhost:27017


const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean

})


const todo = mpongoose.model('todos', todoSchema);

module.exports = {
    todo
}