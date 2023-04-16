// const categoriesList = document.querySelectorAll('#categories');
const itemEl = document.querySelectorAll("#categories .item");

console.log("Number of categories: ", itemEl.length);

itemEl.forEach(category => {

console.log("Category: ", category.firstElementChild.textContent);
console.log("Elements: ", category.lastElementChild.children.length );

});






