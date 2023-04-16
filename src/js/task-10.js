function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const createBtn = controls.querySelector('[data-create]');
const destroyBtn = controls.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');


function createBoxes(amount) {
    const boxSize = 30;
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < amount; i++) {
        const size = boxSize + i * 10;
        const box = document.createElement('div');
        box.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};`;
        fragment.appendChild(box);
    }
    boxes.appendChild(fragment);
}

function destroyBoxes() {
    boxes.innerHTML = '';
}
createBtn.addEventListener('click', () => {
    createBoxes(input.value);
});

destroyBtn.addEventListener('click', () => {
    destroyBoxes();
});
