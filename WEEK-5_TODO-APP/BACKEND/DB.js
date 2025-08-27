const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://aryanjhaop:y8AczO8vm6v2PD90@cluster0.dn3bnq9.mongodb.net/ToDo_App")

const TodoSchema = new mongoose.Schema({
    title : String,
    description : String,
    done : Boolean
})

const todo = mongoose.model('Todos', TodoSchema);

module.exports = {
    todo
}