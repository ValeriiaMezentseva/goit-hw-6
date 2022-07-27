function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
const spanColor = document.querySelector('.color');
const buttonColor = document.querySelector('.change-color');
const body = document.querySelector('body');

function changeColor() {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  spanColor.textContent = color;
}

buttonColor.addEventListener('click', changeColor); 