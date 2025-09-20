const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://aryanjhaop:y8AczO8vm6v2PD90@cluster0.dn3bnq9.mongodb.net/payTM")

//schema for users
const UserSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String,
})

const AllUser = mongoose.model('Users', UserSchema);

module.exports = {
    AllUser
}