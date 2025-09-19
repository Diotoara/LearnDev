const express = require("express")
const userRouter = express.Router();

const AllUser = require('../db')

userRouter.get("/signup", async function(req,res){
    const name = req.query.name
    const email = req.query.email
    const password = req.query.password
    const Amount = 0
    const newUser = new AllUser({
        name,
        email,
        password,
        Amount
    })
    await newUser.save();
    res.send("New Account has been created")
})

module.exports = userRouter 