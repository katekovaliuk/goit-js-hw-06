const decrementBtn = document.querySelector('[data-action="decrement"]');
console.log(decrementBtn);
const spanValue = document.querySelector("#value")
console.log(spanValue);
const incrementBtn = document.querySelector('[data-action="increment"]');
console.log(incrementBtn);

let counterValue = 0;

function increment(event) {
    counterValue += 1
    spanValue.textContent = counterValue;
    // console.log(counterValue);
}

function decrement(event) {
    counterValue -= 1
    spanValue.textContent = counterValue;
    // console.log(counterValue);
}


decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);


