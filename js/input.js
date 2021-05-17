let inputDirection = {x: 0, y: 0};
let lastInputDirection = {x: 0, y: 0};
let modalShown = true;

export let speedUp = false;

export function getInputDirection() {
  lastInputDirection = inputDirection;
  return inputDirection;
}

// controls
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "w":
    case "W":
    case "ц":
    case "Ц":
    case "ArrowUp":
      // remove pre-game overlay
      if (modalShown === true)
        document
          .querySelector(".modal--before-game")
          .classList.add("modal--hide");

      // preventing snake from reversing
      if (lastInputDirection.y === 1) break;
      // accelerate if the direction button is pushed twice
      else if (lastInputDirection.y === -1) speedUp = true;

      // update the direction
      inputDirection = {x: 0, y: -1};
      break;

    case "s":
    case "S":
    case "ы":
    case "Ы":
    case "ArrowDown":
      if (modalShown === true)
        document
          .querySelector(".modal--before-game")
          .classList.add("modal--hide");
      if (lastInputDirection.y === -1) break;
      else if (lastInputDirection.y === -1) speedUp = true;
      inputDirection = {x: 0, y: 1};
      break;

    case "a":
    case "A":
    case "ф":
    case "Ф":
    case "ArrowLeft":
      if (modalShown === true)
        document
          .querySelector(".modal--before-game")
          .classList.add("modal--hide");
      if (lastInputDirection.x === 1) break;
      else if (lastInputDirection.x === -1) speedUp = true;
      inputDirection = {x: -1, y: 0};
      break;

    case "d":
    case "D":
    case "в":
    case "В":
    case "ArrowRight":
      if (modalShown === true)
        document
          .querySelector(".modal--before-game")
          .classList.add("modal--hide");
      if (lastInputDirection.x === -1) break;
      else if (lastInputDirection.x === 1) speedUp = true;
      inputDirection = {x: 1, y: 0};
      break;

    // game restart on "Enter" and "Space"
    case "Enter":
    case " ":
      if (document.querySelector(".modal--after-game").classList.contains('modal--show')) {
        location.reload();
      }
      break;
  }
});

// game restart
document.querySelector("#restart-btn").addEventListener("click", (e) => {
  location.reload();
});
