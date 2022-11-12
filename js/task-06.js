const validationInputRef = document.querySelector("#validation-input");

// console.log(typeof(validationInputRef.dataset.length));
 
validationInputRef.addEventListener("blur", onInputBlurChecking);


function onInputBlurChecking(event) {
  if (event.currentTarget.value.length === Number(validationInputRef.dataset.length)) {
    validationInputRef.classList.add("valid");
    validationInputRef.classList.remove("invalid");
  } else {
    validationInputRef.classList.add("invalid");
    validationInputRef.classList.remove("valid");
  }
}
