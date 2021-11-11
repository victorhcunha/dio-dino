const dino = document.querySelector(".dino");
console.log(dino);

function handleKeyUp(event) {
  if (event.keyCode === 32) {
    jump();
    console.log("Espaço");
  }
}

function jump() {
  let position = 0;
  let upInterval = setInterval(() => {
    if (position >= 150) {
      //down
      clearInterval(upInterval);
      let downInterval = setInterval(() => {
        if (position <= 0) {
          clearInterval(downInterval);
        } else {
          //up
          position += 20;
          dino.style.bottom = position + "px";
        }
      });
    } else {
      //up
      position += 20;
      dino.style.bottom = position + "px";
    }
  }, 20);
}

document.addEventListener("keyup", handleKeyUp);
