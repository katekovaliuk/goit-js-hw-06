const inputFieldRef = document.querySelector('#name-input');

console.log(inputFieldRef);

const titleLabelRef = document.querySelector('#name-output');
console.log(titleLabelRef);


inputFieldRef.addEventListener('input', onInputChange);

function onInputChange(event) {
  titleLabelRef.textContent = event.currentTarget.value;
}
