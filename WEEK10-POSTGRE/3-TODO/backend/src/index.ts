import express, { Application } from "express";

const app: Application = express();

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

app.use(express.json());

app.post("/user", async(req,res)=>{
    const email:string = req.body.email
    const password:string = req.body.password
    const name:string = req.body.name

    const rest = await prisma.user.create({
        data:{
            email,
            password,
            name
        }
    })
    res.json(rest)
})

app.post("/todo")


app.listen(3000)