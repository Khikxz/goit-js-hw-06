const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

for (let i = 0; i < ingredients.length; i++) {
  let ingredient = document.createElement("li");
  ingredient.textContent = ingredients[i];
  ingredient.classList.add("item");
  document.querySelector("#ingredients").append(ingredient);
}
