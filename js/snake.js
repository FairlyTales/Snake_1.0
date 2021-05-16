import { getInputDirection } from "./input.js";

const snakeBody = [
  { x: 10, y: 10}
];
let newSegments = 0;

export function update() {
  // initiazile function which will add new segments to snake if needed
  addSegments();

  // get input direction
  const inputDirection = getInputDirection();

  // move last snakeBody element to the position of the next element, moving the snake 1 step forward
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }

  //update snake direction
  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard) {
  snakeBody.forEach((segment, index) => {
    const snakeElement = document.createElement('div');

    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add('snake');

    if (index === 0) {
      snakeElement.classList.add('snake--head');
    }

    gameBoard.appendChild(snakeElement);
  })
}

export function expandSnake(amount) {
  newSegments += amount;
}

export function onSnake(position, { ignoreHead = false } = {}) {
  return snakeBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false; // prevent from checking the head position
    return equalPositions(segment, position);
  })
}

export function getSnakeHead() {
  return snakeBody[0];
}

export function snakeIntersection() {
  return onSnake(snakeBody[0], { ignoreHead: true })
}

function equalPositions(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y;
}

function addSegments() {
  for (let i = 0; i < newSegments; i++) {
    // pushing last element of our snake into our snake, thus increasing it's lenght
    snakeBody.push({ ...snakeBody[snakeBody.length - 1]});
  }

  newSegments = 0;
}