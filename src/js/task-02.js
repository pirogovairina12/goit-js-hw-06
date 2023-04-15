const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

ingredients.forEach(el => {
    const liEl = document.createElement("li");

    liEl.textContent = el

    liEl.classList.add("item");

    const ingredientsHTML = document.querySelector("ul#ingredients")
    ingredientsHTML.append(liEl);

    // console.log(liEl);
})






