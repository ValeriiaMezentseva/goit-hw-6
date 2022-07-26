function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
const spanColor = document.querySelector('.color');
const buttonColor = document.querySelector('.change-color');
const body = document.querySelector('body');

function changeColor() {
  body.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = getRandomHexColor();
}

buttonColor.addEventListener('click', changeColor); 