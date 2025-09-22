const mongoose = require("mongoose");
const { number } = require("zod");

mongoose.connect("mongodb+srv://aryanjhaop:y8AczO8vm6v2PD90@cluster0.dn3bnq9.mongodb.net/payTM")

//schema for users
const UserSchema = new mongoose.Schema({
    name :{
        type : String,
        required: true,
        unique : true,
        trim : true,
        lowercase : true,
        minlength:3,
        maxlength:30,
        
    },
    email : String,
    password : String,
})

const AllUser = mongoose.model('Users', UserSchema);


const AccountSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,  //reffernce to user model
        ref:'Users',
        required : true,
    },

    Balance : {
        type: Number,
        required : true,
    }
})

const AllAccounts = mongoose.model('Accounts', AccountSchema)


module.exports = {
    AllUser,
    AllAccounts
}