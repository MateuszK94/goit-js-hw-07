// Zadanie 1: Policz i wyświetl liczbę kategorii
const categoriesCount = document.querySelectorAll("#categories .item").length;
console.log(`Liczba kategorii: ${categoriesCount}`);

// Zadanie 2: Dla każdego elementu li.item, znajdź i wyświetl tytuł oraz liczbę elementów w kategorii
const categoryItems = document.querySelectorAll("#categories .item");

categoryItems.forEach((item, index) => {
  const title = item.querySelector("h2").textContent;
  const itemsCount = item.querySelectorAll("ul li").length;
  console.log(
    `Kategoria ${index + 1}: ${title} - Liczba elementów: ${itemsCount}`
  );
});
