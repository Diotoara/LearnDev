import express from "express"
const app= express();

app.get("/", (req,res)=>{
    res.json({
        message : "this is the get route"
    })
})

app.listen(3000);