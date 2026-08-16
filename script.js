import { update as updateSnake, draw as drawSnake, speed} from './snake.js'

import { update as updateFood, draw as drawFood } from './food.js'

// import { outsideGrid } from './grid.js'
import { onSnake } from './snake.js'
import { snakeBody } from './snake.js';
let direction={x:0,y:0};
let gameOver = false;
let score = 0;


const gameBoard=document.getElementById("board");
const scoreElement = document.getElementById("score");
const foodsound=new Audio('./assets/food.mp3');
const gameoversound=new Audio('./assets/gameover.mp3');
const movesound=new Audio('./assets/music_move.mp3');
const musicsound=new Audio('./assets/music_music.mp3');

let lastrenderTime=0;

musicsound.loop = true;
musicsound.play();
//game functions
function main(ctime) {
    if(gameOver){
        gameoversound.play();
        musicsound.pause();
        alert("Game Over! Press any key to restart the game");
        window.location="/";
        return;
    }
    
    const secondsSinceLastRender=(ctime-lastrenderTime)/1000;
    window.requestAnimationFrame(main);
    if(secondsSinceLastRender<1/speed)return;
    lastrenderTime=ctime;
    //update game state
    update();
    //draw everything
    draw();

}

//main logic start here>
window.requestAnimationFrame(main);
function update() {
    updateSnake()
    updateFood()
    checkDeath()    

}
function draw() {
    gameBoard.innerHTML="";
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkDeath() {
gameOver=outsideGrid(getSnakeHead()) || snakeIntersection()
}


function getSnakeHead() {
    return snakeBody[0];  
}

function outsideGrid(position) {
    return position.x<1 || position.x>=18 || position.y<1 || position.y>=18;
}
function snakeIntersection() {
    return onSnake(snakeBody[0],{ignoreHead:true})
}