function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyRef = document.querySelector("body");
const colorChangedSpan = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");

changeColorBtn.addEventListener("click", (event) => {
  bodyRef.style.backgroundColor = getRandomHexColor();

  colorChangedSpan.textContent = `${getRandomHexColor()}`;
});
