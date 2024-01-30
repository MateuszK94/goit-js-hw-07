const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.getElementById("ingredients");

ingredients.forEach((ingredient) => {
  // Zadanie 1: Utwórz nowy element <li>
  const listItem = document.createElement("li");

  // Zadanie 2: Dodaj nazwę składnika jako zawartość tekstową
  listItem.textContent = ingredient;

  // Zadanie 3: Dodaj klasę "item" do elementu
  listItem.classList.add("item");

  // Zadanie 4: Dodaj element <li> do listy ul#ingredients
  ingredientsList.appendChild(listItem);

  console.log(`Dodano składnik: ${ingredient}`);
});
