const WebSocketServer = require("ws").Server;
const wss = new WebSocketServer({ port:3000 });
var CLIENTS = [];

wss.on("connection", function(ws){
   // ws.send("Welcome to WSS");
   CLIENTS.push(ws);
   console.log('client connected');
   ws.on('message', function(message){
// console.log(message)
       sendAll(message);
// console.log(CLIENTS)
//        ws.send(message);
   });
   ws.on('close', function(client){
      CLIENTS.splice(CLIENTS.indexOf(client),1);
      console.log("Client disconnected")
   });
   ws.on('error', function(client){
        CLIENTS.splice(CLIENTS.indexOf(client),1)
   });
});

function sendAll(message){
    for (var i = 0; i < CLIENTS.length; i++){
            CLIENTS[i].send(message);
    }
}
