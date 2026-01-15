import WebSocket, {WebSocketServer} from 'ws';
import http from 'http';

const server = http.createServer(function(req,res){
    console.log((new Date()) + 'Received Request for '+ req.url);
    res.end("hi there")
});

let users = 0;

const wss = new WebSocketServer({server})

wss.on('connection', function connection(socket){
    socket.on('error', (er)=>console.log("error in webSocket", er))

    socket.on('message', function message (data, isBinary){
        wss.clients.forEach(function each(client){
            if(client.readyState === WebSocket.OPEN){
                client.send(data, {binary: isBinary})
            }
        });
    });
    console.log("user count: ", ++users);
    socket.send("Hello! Message form webSocket server");
})

server.listen(8080, function(){
    console.log((new Date()) + 'Server is Running on port 8080' )
});