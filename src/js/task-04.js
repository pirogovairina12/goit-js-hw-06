const decrementBtn = document.querySelector('button[data-action="decrement"]');
const counterValue = document.querySelector("#value");
const incrementBtn = document.querySelector('button[data-action="increment"]');

// console.log(counterValue);
// console.log(counterValue);
// console.log(decCounterValue);

let total = 0;

decrementBtn.addEventListener('click', decreasingValue);

function decreasingValue() {
    total -=1;
    counterValue.innerHTML = total;
}

incrementBtn.addEventListener('click', increasingValue);

function increasingValue() {
    total +=1;
    counterValue.innerHTML = total;
}



