const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./DB");
const app = express();

app.use(express.json());

//title : string
//desc : string

app.post("/todo", async function(req, res) {
    const newTodo = req.body
    const respo = createTodo.safeParse(newTodo)
    if(!respo.success){
        res.status(411).json({
            msg : "wrong input, try again"
        })
        return
    }

    //add entry to db
    await todo.create({
        title : newTodo.title,
        description : newTodo.description,
        done : false,
    })
    res.json({
        msg : "Todo C4eated"
    })

})

app.get("/todo", async function(req, res) {
    const allTodo = await todo.find({})
    res.json(allTodo)

})

app.put("/completed", async function(req, res) {
    const takeID = req.body
    const respo = updateTodo.safeParse(takeID)
    if(!respo.success) {
        res.status(411).send("wrong")
        return
    }

    await todo.updateOne({
        _id : req.body.id
    },{
        done : true
    })
    res.json({
        msg : "todo marked as completed"
    })

})

// write basic express boilerplate code, 
// with express.json() middleware

app.listen(3000)