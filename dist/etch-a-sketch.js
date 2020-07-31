alert('Use the arrow keys to control your etch-a-sketch')

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('button');
const width = canvas.width;
const height = canvas.height;
const MOVE_AMOUNT = 20;      

let randomX = Math.floor(Math.random() * width);
let randomY = Math.floor(Math.random() * height);


ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;


let hue = 0
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
ctx.beginPath();
ctx.moveTo(randomX, randomY);
ctx.lineTo(randomX,randomY);
ctx.stroke()

// MOVE THE LINES

document.onkeydown = function(e){

switch(e.keyCode) {
    case 37: 
        draw({key: e.key})
        randomX = randomX - MOVE_AMOUNT;
        ctx.lineTo(randomX, randomY);
        ctx.stroke();
        break;
    case 38:
        draw({key: e.key})
        randomY = randomY - MOVE_AMOUNT;
        ctx.lineTo(randomX,randomY);
        ctx.stroke();
        break;
    case 39:
        draw({key: e.key})
        randomX = randomX + MOVE_AMOUNT;
        ctx.lineTo(randomX, randomY);
        ctx.stroke();
        break;
    case 40:
        draw({key: e.key})
        randomY = randomY + MOVE_AMOUNT;
        ctx.lineTo(randomX, randomY);
        ctx.stroke();
        break;
    default:
        break;
}
}

// Drawing the line

function draw(e){
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
hue += 5;
ctx.beginPath();
ctx.moveTo(randomX,randomY);
}

// Clear Canvas

shakeButton.addEventListener('click', clearCanvas);

function clearCanvas(){
canvas.classList.add('shake');
ctx.clearRect(0,0, width, height);
};


