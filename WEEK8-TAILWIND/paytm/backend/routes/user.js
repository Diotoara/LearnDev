const express = require("express")
const userRouter = express.Router();
const AllUser = require('../db')
const zod = require('zod')
const jwt = require("jsonwebtoken")
const JWTpass = require('../config')



const signUpbody = zod.object({
    email : zod.string().email(),
    name : zod.string(),
    password : zod.email(),
})


userRouter.get("/signup", async function(req,res){
    const {success} = signUpbody.email.safeParse(req.body)
    if(!success){
        return res.status(411).json({
            msg : "Invalid Input, Try again!"
        })
    }

    const existinguser = await AllUser.findOne({email : req.body.email})
    if(existinguser){
        return res.status(403).send("This Email is already registered")
    }

    const newUser = new AllUser({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    })

    const userid = newUser._id;

    const token = jwt.sign({id:userid}, JWTpass)

    res.json({
        msg : "user created",
        token : token,
    })
})

module.exports = userRouter 