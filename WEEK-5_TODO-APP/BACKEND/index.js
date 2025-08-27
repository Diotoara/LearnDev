const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();

app.use(express.json());

//title : string
//desc : string

app.post("/todo", function(req, res) {
    const newTodo = req.body
    const respo = createTodo.safeParse(newTodo)
    if(!respo.success){
        res.status(411).json({
            msg : "wrong input, try again"
        })
        return
    }

    //add entry to db

})

app.get("/todos", function(req, res) {

})

app.put("/completed", function(req, res) {
    const takeID = req.body
    const respo = updateTodo.safeParse(takeID)
    if(!respo.success) {
        res.status(411).send("wrong")
        return
    }

})

// write basic express boilerplate code, 
// with express.json() middleware