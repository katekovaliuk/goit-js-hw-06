const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsContainerEl = document.querySelector("#ingredients");

const elements = ingredients.map((ingredient) => {
  const ingredientEl = document.createElement("li");
  ingredientEl.classList.add(".item");
  ingredientEl.textContent = ingredient;
  console.log(ingredientEl);

  return ingredientEl;
});

ingredientsContainerEl.append(...elements);
