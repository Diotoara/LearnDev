const express = require("express")
const userRouter = express.Router();
const {AllUser, AllAccounts} = require('../db')
const zod = require('zod')
const jwt = require("jsonwebtoken")
const JWTpass = require('../config')

const authMiddleware = require("../middleware");
// const { use } = require("react");

const signUpbody = zod.object({
    email : zod.string().email(),
    name : zod.string(),
    password : zod.string(),
})


userRouter.get("/signup", async function(req,res){
    const {success} = signUpbody.safeParse(req.body)
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

    await newUser.save();

    const userid = newUser._id;

     await AllAccounts.create({
        userId: userid,
        Balance: 1 + Math.random() * 10000
    })

    const token = jwt.sign({id:userid}, JWTpass)

    res.json({
        msg : "user created",
        token : token,
    })
})

//update creds

const updateBody = zod.object({
    email : zod.string().email().optional(),
    name : zod.string().optional(),
    password : zod.string().optional(),

})

//update users
userRouter.put("/", authMiddleware, async(req,res)=>{
    const {success} = updateBody.safeParse(req.body)
    if(!success){
        return res.status(411).json({
            msg : "error while updating, incorrect format"
        })
    }

    await AllUser.updateOne({ _id: req.userId }, req.body); //did nt understood
    res.json({
        message: "Updated successfully"
    })
})

//get all users via filter
userRouter.get("/bulk", authMiddleware, async(req,res)=>{
    const filter = req.query.filter || "";

    const users = await AllUser.find({
        name : {"$regex" : filter}
    })

    res.json({
        user : users.map(user => ({
            name : user.name,
            email : user.email,
            _id : user.id
        }))
    })

})

module.exports = userRouter 