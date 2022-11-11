const countCategories = document.querySelectorAll(".item");
console.log("Number of categories:", countCategories.length);

countCategories.forEach((item) => {
  const titleEl = item.querySelector("h2");
  console.log("Category:", titleEl.textContent);

  const numerOfElements = item.querySelectorAll("li");
  console.log("Elements:", numerOfElements.length);
});

// for(let i = 0; i < countCategories.length; i += 1)   {
//  const searchCategories = countCategories[i];

//  const titleEl = searchCategories.querySelector('h2');
//  console.log("Category:", titleEl.textContent);

//  const numerOfElements = searchCategories.querySelectorAll('li');
//  console.log('Elements:', numerOfElements.length);

// }
