function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}


const btn = document.querySelector('.change-color');
const text = document.querySelector('.color');

btn.addEventListener('click', backgroundColor);


function backgroundColor(event) {
    document.body.style.backgroundColor = getRandomHexColor()
    text.innerHTML = getRandomHexColor()
}