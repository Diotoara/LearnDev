import express from "express"
import { createClient } from "redis"

const app = express();
app.use(express.json())
const client = createClient();

app.post("/submit",async (req,res)=>{
    try {
        const {problemId, userId,code, language} = req.body;
        client.lPush("submissions", JSON.stringify({problemId,userId,code,language}));
        res.status(200).json({
            message : "Submission Received!"
        })
    } catch (error) {
        console.log("Error in redis", error)
        res.status(500).json({
            message : "Error in redis while submission"
        })
    }
})


async function startServer(){
    try {
        await client.connect();
        console.log("Connected to Redis")
        app.listen(3000,()=>{
            console.log("server is running on localhost:3000")
        })
    } catch (error) {
        console.log("failed to connect to redi")
    }
}


startServer();
