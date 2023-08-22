const inputRange = document.querySelector("#font-size-control");
const textSize = document.querySelector("#text");

function setOutput(event) {
  textSize.style.fontSize = `${event.currentTarget.value}px`;
}

inputRange.addEventListener("input", setOutput);
