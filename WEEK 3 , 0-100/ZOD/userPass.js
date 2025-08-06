const express = require("express")
const app = express();
const z = require("zod")

const schema = z.object({
    email: z.email(),
    password: z.string().min(8)
})

app.use(express.json());


app.post("/", function(req,res){
    const email = req.body.email
    const password = req.body.password
    const check = schema.safeParse({email,password})
    res.send(check);

})

app.listen(3080)