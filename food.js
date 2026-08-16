// Purpose: To create food for the snake to eat
import { onSnake, expandSnake } from "./snake.js";
let food={x:14,y:1}
const Expansion=1;
const foodsound=new Audio('./assets/food.mp3');
const scoreElement = document.getElementById("score");
let score=0;
function increaseScore() {
    score += 1;
    scoreElement.textContent = score;
}
export function update(){
    if(onSnake(food)){
        expandSnake(Expansion);
        food=getRandomFoodPosition();
        foodsound.play();
        increaseScore();
    }
}

// function onSnake(position){
//     return gameBoard.querySelector(`[data-snake-part="${position.x},${position.y}"]`);
// }

export function draw(gameBoard){
    // food.draw();
        const foodELement =document.createElement("div");
        foodELement.style.gridRowStart=food.y;
        foodELement.style.gridColumnStart=food.x;
        foodELement.classList.add("food");
        gameBoard.appendChild(foodELement);
}
    // console.log("draw")
// export function expandSnake(gameBoard){
//     newSegments+=amount;
// }

function getRandomFoodPosition(){
    let newFoodPosition;
    while(newFoodPosition==null || onSnake(newFoodPosition)){
    newFoodPosition=randomGridPosition();
    }
    return newFoodPosition;
}

function randomGridPosition(){
    return{
        x:Math.floor(Math.random()*17)+1,
        y:Math.floor(Math.random()*17)+1
    }
}