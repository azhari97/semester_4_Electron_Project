// food api
const foodForm = document.querySelector("#foodForm");
const foodDropdown = document.querySelector("#food");

const fetchFoodData = async (foodName) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`
  );
  const data = await response.json();
  return data.meals[0];
};

const renderFoodData = (foodData) => {
  let foodContainer = document.querySelector("#foodContainer");

  // Remove the previous food data from the DOM
  while (foodContainer.firstChild) {
    foodContainer.removeChild(foodContainer.firstChild);
  }

  // Create and add new food data to the DOM
  let foodName = document.createElement("h2");
  foodName.classList.add("sec-heading");
  foodName.innerText = (`Recipe Name : ${foodData.strMeal}`);

  let deliveryRow = document.createElement("div");
  deliveryRow.classList.add("row");

  let divideLine = document.createElement("hr");

  let deliveryImageCol = document.createElement("div");
  deliveryImageCol.classList.add("col-5", "delivery-img");

  let foodImage = document.createElement("img");
  foodImage.src = foodData.strMealThumb;

  deliveryImageCol.appendChild(foodImage);
  deliveryRow.appendChild(deliveryImageCol);

  let deliveryContentCol = document.createElement("div");
  deliveryContentCol.classList.add("col-7");

  let ingredientTitle = document.createElement("h2");
  ingredientTitle.innerText = "Ingredients";
  let foodIngredients = document.createElement("ul");
  for (let i = 1; i <= 20; i++) {
    let ingredient = foodData[`strIngredient${i}`];
    if (ingredient) {
      let li = document.createElement("li");
      li.innerText = ingredient;
      foodIngredients.appendChild(li);
    } else {
      break;
    }
  }

  let stepsTitle = document.createElement("h2");
  stepsTitle.innerText = "Steps";
  let steps = document.createElement("p");
  steps.innerText = foodData.strInstructions;

  // Apply data into the DOM
  deliveryContentCol.appendChild(foodName);
  deliveryContentCol.appendChild(ingredientTitle);
  deliveryContentCol.appendChild(foodIngredients);
  deliveryContentCol.appendChild(divideLine);
  deliveryContentCol.appendChild(stepsTitle);
  deliveryContentCol.appendChild(steps);
  deliveryRow.appendChild(deliveryContentCol);

  foodContainer.appendChild(deliveryRow);
};

  // call appended data into DOM using eventListener
document.addEventListener("DOMContentLoaded", (e) => {
  foodForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (foodDropdown.value !== "") {
      fetchFoodData(foodDropdown.value).then((foodData) => {
        renderFoodData(foodData);
      });
    } else {
      console.log("You must select a food");
    }
  });
});
