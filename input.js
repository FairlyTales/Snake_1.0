let inputDirection = { x: 0, y: 0 };
let lastInputDirecton = { x: 0, y: 0};

export let speedUp = false;

export function getInputDirection() {
  lastInputDirecton = inputDirection;
  return inputDirection;
}

window.addEventListener('keydown', e => {
  switch (e.key) {
    case 'w':
    case 'W':
    case 'ArrowUp':
      // preventing snake from reversing
      if (lastInputDirecton.y === 1) break 

      // accelerate if the direction button is pushed twice 
      else if (lastInputDirecton.y === -1) speedUp = true;

      // update the direction
      inputDirection = {x: 0, y: -1 }; 
      break;

    case 's':
    case 'S':
    case 'ArrowDown':
      if (lastInputDirecton.y === -1) break
      else if (lastInputDirecton.y === -1) speedUp = true;
      inputDirection = {x: 0, y: 1 };
      break;

    case 'a':
    case 'A':
    case 'ArrowLeft':
      if (lastInputDirecton.x === 1) break
      else if (lastInputDirecton.x === -1) speedUp = true;
      inputDirection = {x: -1, y: 0 };
      break;

    case 'd':
    case 'D':
    case 'ArrowRight':
      if (lastInputDirecton.x === -1) break
      else if (lastInputDirecton.x === 1) speedUp = true;
      inputDirection = {x: 1, y: 0 };
      break;
  }
})