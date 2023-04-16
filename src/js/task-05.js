const refs = {
    input: document.getElementById('name-input'),
    nameText: document.getElementById('name-output'),
};


refs.input.addEventListener('input', onInputChange);


function onInputChange() {
     refs.nameText.textContent = refs.input.value.trim() || 'Anonymous';
}
