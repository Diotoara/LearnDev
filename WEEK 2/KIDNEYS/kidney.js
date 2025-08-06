const express = require("express");

const app = express();

const user = [{
    name : "raj",
    kidneys : [{
        healthy : true
    }, {
        healthy : false
    }]
}]


app.use(express.json())

app.get("/", function(req,res){
    const userkidn = user[0].kidneys
    const ttlKidney = userkidn.length
    let workingKidney = 0;
    for(let i=0;i<ttlKidney;i++){
        if(userkidn[i].healthy){
            workingKidney++
        }
    }
    const FailedKidney = ttlKidney - workingKidney
    res.json({
        // userkidn,
        ttlKidney,
        workingKidney,
        FailedKidney
    })
})


app.post("/", function(req,res){
    const isHealthy = req.body.isHealthy;
    user[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg : "Done!"
    })
})


app.put("/", function(req,res){
    for(let i=0;i<user[0].kidneys.length;i++){
        user[0].kidneys[i].healthy = true;
    }
    res.json({

    })
})


app.delete("/", function(req,res){
    const newkidney = []
    for(let i=0;i<user[0].kidneys.length;i++){
        if(user[0].kidneys[i].healthy){
            newkidney.push({
                healthy : true
            })
        }
    }
    user[0].kidneys = newkidney;
    res.json({msg : "Done!!"})
})

app.listen(8080)