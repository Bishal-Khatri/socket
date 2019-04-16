const ws = new WebSocket("ws://172.16.1.131:3000");

ws.onopen = function(){
    setTitle("User Connected");
};

ws.onclose = function(){
    setTitle("DISCONNECTED");
};

ws.onmessage = function(payload){
    printMessage(payload.data);
    // console.log(payload)
};

document.forms[0].onsubmit = function () {
  var input = document.getElementById('message');
    ws.send(input.value);
    input.value = '';
};

function setTitle(title){
    document.querySelector('h1').innerHTML = title;
}

function printMessage(message){
    var p = document.createElement('p');
    p.innerText = message;
    document.querySelector('div.message').appendChild(p);
}