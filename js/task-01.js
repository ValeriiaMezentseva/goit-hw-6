const categoriesEl = document.querySelectorAll('.item');
const numberofCategoriesEl = categoriesEl.length; 
console.log(`Number of categories: ${numberofCategoriesEl}`);

const mainList = categoriesEl.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`)
})

