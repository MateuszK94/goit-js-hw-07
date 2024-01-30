function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = "";

  let boxSize = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxesContainer.appendChild(box);

    boxSize += 10;
  }
}

function destroyBoxes() {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = "";
}

document.getElementById("createBtn").addEventListener("click", function () {
  const inputAmount = document.getElementById("inputAmount");
  const amount = parseInt(inputAmount.value);

  if (!isNaN(amount) && amount > 0) {
    createBoxes(amount);
  } else {
    alert("Please enter a valid number greater than 0.");
  }
});

document.getElementById("destroyBtn").addEventListener("click", destroyBoxes);
