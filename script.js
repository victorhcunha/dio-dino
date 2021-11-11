const dino = document.querySelector(".dino");
console.log(dino);

function handleKeyUp(event) {
  if (event.keyCode === 32) {
    console.log("Espaço");
  }
}

document.addEventListener("keyup", handleKeyUp);
