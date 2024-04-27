let body = document.body;

function changeColor(userChoice) {
  body.style.backgroundColor = userChoice;
}

function randomColor() {
  let red = Math.floor(Math.random() * 255) + 1;
  let green = Math.floor(Math.random() * 255) + 1;
  let blue = Math.floor(Math.random() * 255) + 1;

  const color = `rgb(${red}, ${green}, ${blue})`;
  body.style.backgroundColor = color;
}
