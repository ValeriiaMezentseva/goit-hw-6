const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ul = document.querySelector('#ingredients')

const itemsEl = ingredients.map(name => `<li class='item'>${name}</li>`)
ul.insertAdjacentHTML('afterbegin', itemsEl.join(''))
console.log(ul);
