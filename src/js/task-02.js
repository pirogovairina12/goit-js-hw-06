const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];
const ingredientsHTML = document.querySelector("ul#ingredients");


const liElements = ingredients.map(elem => {
    const liEl = document.createElement("li");
    liEl.textContent = elem;
    liEl.classList.add("item");

    return liEl
})
ingredientsHTML.append(...liElements);





