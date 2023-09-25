import { infiniteScroll } from "./modules/infiniteScroll.js";
import { getSelectedData } from "./modules/menuFilter.js";

const optionsButton = document.querySelectorAll(".filter-options-content button");
const filterToggleButtons = document.querySelectorAll(".filter-toggle");

optionsButton?.forEach((button) => {
  button.addEventListener("click", (e) => {
    const filterKey = e.target.parentElement.parentElement.dataset.for;
    const value = e.target.dataset.value;

    if (filterKey === "category") {
      filterToggleButtons.forEach((button) => {
        if (value === "books") {
          button.dataset.category === "shirts" ? button.classList.add("!hidden") : button.classList.remove("!hidden");
        } else if (value === "shirts") {
          button.dataset.category === "books" ? button.classList.add("!hidden") : button.classList.remove("!hidden");
        } else {
          ["books", "shirts"].includes(button.dataset.category) && button.classList.add("!hidden");
        }
      });
    }
  });
});

infiniteScroll("#product-content", () => {
  const container = document.querySelector("#product-content");
  const contents = document.querySelectorAll(".product-card");

  [...contents]?.slice(0, 6)?.forEach((content) => {
    container.innerHTML += content.outerHTML;
  });
});
