import { getinputDirection } from "./input.js";
export const speed= 6;
export const snakeBody=[{x:9,y:9}]
const movesound=new Audio('./assets/music_move.mp3');
//  let gameOver = false;

let newSegments = 0;

export function update(){
    // snake.update();
    addSegments();
   const inputDirection= getinputDirection()
   if (inputDirection.x !== 0 || inputDirection.y !== 0) {
    movesound.play();
}
    for(let i=snakeBody.length-2; i>=0; i--){
         snakeBody[i+1]={...snakeBody[i]}
    }
    snakeBody[0].x+=inputDirection.x;
    snakeBody[0].y+=inputDirection.y;
    console.log("update"); 
}

export function draw(gameBoard){
    // snake.draw();
    snakeBody.forEach(segment=>{
        const snakeELement =document.createElement("div");
        snakeELement.style.gridRowStart=segment.y;
        snakeELement.style.gridColumnStart=segment.x;
        snakeELement.classList.add("snake");
        gameBoard.appendChild(snakeELement);
    })
}

export function expandSnake(amount){
    newSegments+=amount;
}
let index = 0;
export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
      if (ignoreHead && index === 0) return false
      return equalPositions(segment, position)
    })
  }

function equalPositions(pos1,pos2){
    return pos1.x===pos2.x && pos1.y===pos2.y;
}
function addSegments(){
    for(let i=0; i<newSegments; i++){
        snakeBody.push({...snakeBody[snakeBody.length-1]})
    }   
    newSegments=0;
    }



    // console.log("draw")
