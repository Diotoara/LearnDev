import {WebSocketServer} from "ws";

const wss = new WebSocketServer({port:8080})
console.log("server running on ws://localhost:8080")

let user:number = 0;
let allSockets = [];

wss.on("connection",(socket)=>{
    allSockets.push(socket);
    socket.send("you are connected to server")
    console.log("user #",++user);

    socket.on("message",(message)=>{
        for(let i=0;i<allSockets.length;i++){
            const s = allSockets[i];
            s?.send(message.toString() + " :from the server")
        }
       
    })

})