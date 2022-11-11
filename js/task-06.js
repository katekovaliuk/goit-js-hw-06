const validationInputRef = document.querySelector("#validation-input");

validationInputRef.addEventListener("blur", onInputBlurChecking);

function onInputBlurChecking(event) {
  if (event.currentTarget.value.length == validationInputRef.dataset.length) {
    validationInputRef.classList.add("valid");
    validationInputRef.classList.remove("invalid");
  } else {
    validationInputRef.classList.add("invalid");
    validationInputRef.classList.remove("valid");
  }
}
