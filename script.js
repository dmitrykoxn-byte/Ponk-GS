const canvas = document.getElementById("game");
const context = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;

const paddleWidth = 10;
const paddleHeight = 100;
const paddleOffset = 10;

function draf() { 
context.fillStyle = "#3F826D";
context.fillRect(
    width / 2 - paddleWidth / 2,
    paddleOffset,
    heigh / 2 - paddleWidth / 2
    paddleWidth,
    paddleHeight); 
);

context.fillStyle = "#3F826D";
context.fillRect(
    width / 2 - paddleWidth / 2,
    paddleOffset,
    height / 2 - paddleHeight / 2,
    paddleWidth,
    paddleHeight
);
