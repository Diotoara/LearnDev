const express = require("express")
const z = require("zod");
const app = express();

const schema = z.array(z.number());

app.use(express.json());

app.post("/", function(req,res) {
    //[1,2,3]
    const kidneys = req.body.kidneys
    const response = schema.safeParse(kidneys);
    res.send({
        response
    })    
});

app.listen(3000)