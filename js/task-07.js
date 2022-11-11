const inputRef = document.getElementById("font-size-control");
// console.log(inputRef);

const spanText = document.querySelector("#text");
// console.log(spanText);

spanText.style.fontSize = `${inputRef.value}px`;
// console.log(spanText.style.fontSize);

inputRef.addEventListener("input", rangeHandle);

function rangeHandle(event) {
  spanText.style.fontSize = `${inputRef.value}px`;
  // console.log(spanText.style.fontSize);
}
