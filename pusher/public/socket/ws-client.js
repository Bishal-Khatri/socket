// const ws = new WebSocket("ws://202.52.240.149:3000");
const ws = new WebSocket("ws://172.16.1.131:3000");

ws.onopen = function(){
    setTitle("CONNECTED");
};

ws.onclose = function(){
    setTitle("DISCONNECTED");
};

function setTitle(title){
    if (title=="CONNECTED") {
        $('#status').addClass("badge-success")
    }
    else{
        $('#status').addClass("badge-danger")
    }
    $('#status').html('Status: '+title)
}

ws.onmessage = function(payload){
    printMessage(payload.data);
};

$(".msg_send_btn").on('click', function(){
    // console.log()
    ws.send($(".write_msg").val());
    $(".write_msg").val('');
});



function printMessage(message){
    // var div = $('.incoming_msg');
    var p = document.createElement('p');
    p.innerText = message;
    document.querySelector('div.message').appendChild(p);
    // document.querySelector(div).appendChild(message);
    // $('.incoming_msg').clone().appendTo('.message').html(message);
    // var p = $('.message');
    // jQuery.data(p,message)
}