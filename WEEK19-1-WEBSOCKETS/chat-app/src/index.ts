import {WebSocketServer , WebSocket } from "ws";

const wss = new WebSocketServer({port:8080})
console.log("server running on ws://localhost:8080")

interface User {
    socket : WebSocket,
    room : string,
}

interface JoinM {
    type : "join"
    payload : {
        roomId : string,
    }
}

interface ChatM {
    type : "chat"
    payload : {
        message : string,
    }
}

type Mess = JoinM | ChatM

let allSockets : User[] = [];

wss.on("connection", (socket)=>{

    socket.on("message",(message)=>{
        const parsedMessage:Mess = JSON.parse(message as unknown as string);
        
        if(parsedMessage.type == "join"){
            allSockets.push({
                socket : socket,
                room : parsedMessage.payload.roomId
            })
            console.log(allSockets)
        }

        if(parsedMessage.type == "chat"){
            //find the user with this socket, and then its room.
            const currentUserRoom = allSockets.find((x)=>x.socket==socket)?.room

            //now select sockets with that roomId && send message to them
            allSockets
                .filter(s => s.room ==currentUserRoom)
                .forEach(s => s.socket.send(parsedMessage.payload.message))
        }

    })

})