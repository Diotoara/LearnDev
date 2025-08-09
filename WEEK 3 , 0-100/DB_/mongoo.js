const mongoose = require("mongoose");
const express = require("express");
const app = express();

app.use(express.json());

//connected a database
mongoose.connect("mongodb+srv://aryanjhaop:y8AczO8vm6v2PD90@cluster0.dn3bnq9.mongodb.net/newUserApp")

// create a table schema
const AllUsers = mongoose.model('Users',{name: String, email: String, password: String});


//take inputs 
app.post("/signup", async function(req,res){
    const mail = req.body.mail;
    const myName = req.body.myName;
    const password = req.body.password;

    //check for data is not database
    const existingData = await AllUsers.findOne({email:mail})
    if (existingData){
        res.status(403).send({msg: "user already exists"});
    }

    //entering
    const newUser = new AllUsers({
        name : myName,
        email : mail,
        password : password
    })
    res.send("data added");

    newUser.save();
    
})

app.listen(3000)