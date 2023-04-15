const categoriesList = document.querySelectorAll('#categories .item');

const itemEl = document.querySelectorAll(".item");
console.log("Number of categories: ", itemEl.length);


categoriesList.forEach(category => {
const textTitle = category.querySelector("h2").textContent;
const textEl = category.querySelectorAll("li");

console.log("Category: ", textTitle );
console.log("Elements: ", textEl.length );

});







