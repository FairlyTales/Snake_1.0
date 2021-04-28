import { update as updateSnake, draw as drawSnake, snakeIntersection, getSnakeHead } from '../snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideOfGrid } from './grid.js'

let lastRenderTime = 0;
let gameOver = false;
let baseGameSpeed = 4;
const gameBoard = document.querySelector('#game-board');

function main(currentTime) {

  if (gameOver) {
    if (confirm('Wasted. Wanna try again?')) {
      location.reload();
    } else {
      //! placeholder, add some more stuff here
    }
    return;
  }

  // call this method again to render the next frame
  window.requestAnimationFrame(main); //! read more about this method and how it works

  // calculate how many seconds have passed since the last render
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;

  // if time passed since last render is smaller than the choosen game speed don't update the lastRenderTime and don't rerender (we are not rerendering by jumping out of the current function)
  if (secondsSinceLastRender < 1 / baseGameSpeed) return
  
    lastRenderTime = currentTime;

  update();
  draw();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
  checkGameOver();
}

function draw() {
  gameBoard.innerHTML = null;
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkGameOver() {
  gameOver = outsideOfGrid(getSnakeHead()) || snakeIntersection();
}