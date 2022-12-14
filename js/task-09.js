function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyRef = document.querySelector("body");
const colorChangedSpan = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");

changeColorBtn.addEventListener("click", (event) => {
  const backgroundColor = getRandomHexColor();
  bodyRef.style.backgroundColor = backgroundColor;

  colorChangedSpan.textContent = `${backgroundColor}`;
});
