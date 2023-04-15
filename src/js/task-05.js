const refs = {
    input: document.getElementById('name-input'),
    nameText: document.getElementById('name-output'),
};


refs.input.addEventListener('input', onInputChange);


function onInputChange(event) {
    refs.nameText.textContent = event.currentTarget.value;
}

