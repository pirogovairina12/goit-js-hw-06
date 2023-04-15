const input = document.getElementById('validation-input');
const validLength = input.dataset.length;


input.addEventListener('blur', onInputBlur);

function onInputBlur() {
    const isInputValid = input.value.length === Number(validLength);

    console.log('Инпут потерял фокус - событие blur');
    if (isInputValid) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
}

