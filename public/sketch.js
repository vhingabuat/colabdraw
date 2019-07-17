// Front End JS
var socket = io.connect('http://localhost:5000');

function setup() {
    createCanvas(400, 400);
    background(51);
    socket.on('mouse', (data) => {
        noStroke();
        fill(255, 0, 100);
        ellipse(data.x, data.y, 30, 30);
    })
}

function mouseDragged() {
    console.log('Sending ' + mouseX + ',' + mouseY);
    
    // The data that is going to be emitted
    let data = {
        x: mouseX,
        y: mouseY
    }

    // Emiting data to server
    socket.emit('mouse', data);

    noStroke();
    fill(255);
    ellipse(mouseX, mouseY, 30, 30);
}

function draw() {
}