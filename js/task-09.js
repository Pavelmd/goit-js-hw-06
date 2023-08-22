function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const backGround = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");

btnChangeColor.addEventListener("click", color);
function color() {
  document.body.style.backgroundColor = getRandomHexColor();
  backGround.textContent = getRandomHexColor();
}
