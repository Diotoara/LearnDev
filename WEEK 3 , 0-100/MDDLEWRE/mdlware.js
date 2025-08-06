const express = require("express")
const app = express();

function chek(req,res,next){
    const user = req.query.user
    if(user!="Aryan"){
        res.send("there is an error!")
    }
    next()
}

app.use(chek)
app.use(express.json())



app.post("/kidneys", function(req,res){
    const kidneys = req.body.kidneys
    res.json({
        kidneys
    })
})



app.listen(3000)