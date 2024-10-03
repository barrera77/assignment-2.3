import { menuItems } from "./menu-items.js";
import { suggestionsFoodCard } from "./templates.js";

//get data
const foodData = menuItems.foodCategory;

function onInit() {
  loadHTMLLayoutComponents("./components/nav-bar.html", ".nav-bar-container");
  loadHTMLLayoutComponents("./components/footer.html", ".footer-container");
}
onInit();

function loadHTMLLayoutComponents(component, container) {
  fetch(component)
    .then((response) => response.text())
    .then((data) => {
      document.querySelector(container).innerHTML = data;
    })
    .catch((error) =>
      console.error(`Error loading component: ${component}`, error)
    );
}

document.addEventListener("DOMContentLoaded", () => {
  const foodContainer = document.getElementById("row-food");

  // Clear existing content
  foodContainer.innerHTML = "";

  // Populate the food container with food cards
  foodData.forEach((food) => {
    foodContainer.innerHTML += suggestionsFoodCard(food);
  });
});
