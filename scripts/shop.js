let currentFilterShow = null;

const filter = {
  category: "",
  "shirt-category": "",
  "shirt-color": "",
  "shirt-size": "",
  "book-category": "",
  "book-year": "",
  "book-author": "",
  "sort-by": "",
};

const filterToggles = document.querySelectorAll(".filter-toggle");
const filterOptions = document.querySelector(".filter-options");
const optionContents = document.querySelectorAll(".filter-options-content");
const optionsButton = document.querySelectorAll(".filter-options-content button");
const productCategoryOption = filterOptions?.querySelectorAll(".filter-options-content[data-for='category'] button");

const hideOptions = () => {
  currentFilterShow = null;
  optionContents?.forEach((element) => {
    element.classList.remove("active");
  });
  gsap.to(filterOptions, { autoAlpha: 0, duration: 0.25 });
};

const showOptions = () => {
  filterToggles?.forEach((button) => !button.dataset.value && button.classList.remove("active"));
  if (currentFilterShow === null) return;
  optionContents?.forEach((element) => {
    if (element.dataset.for === currentFilterShow) {
      gsap.to(filterOptions, { autoAlpha: 1, duration: 0.25 });
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
};

filterToggles?.forEach((button) => {
  if (button.dataset.category) {
    button.classList.add("!hidden");
  }

  button.addEventListener("click", (e) => {
    if (currentFilterShow === e.target.dataset.for) {
      hideOptions();
      currentFilterShow = null;
      !e.target.dataset.value && e.target.classList.remove("active");
    } else {
      currentFilterShow = e.target.dataset.for;
      showOptions();
      e.target.classList.add("active");
    }
  });
});

optionsButton?.forEach((button) => {
  button.addEventListener("click", (e) => {
    const filterKey = e.target.parentElement.dataset.for;
    const value = e.target.dataset.value;
    const filterButton = document.querySelector(`.filter-toggle[data-for='${filterKey}']`);
    const options = document.querySelectorAll(`.filter-options-content[data-for='${filterKey}'] button`);

    filter[filterKey] = value;

    console.log(filter);

    options?.forEach((option) => {
      if (option.dataset.value === value) {
        option.classList.add("active");
      } else {
        option.classList.remove("active");
      }
    });
    if (filterKey === "category") {
      filterToggles.forEach((button) => {
        if (value === "books") {
          button.dataset.category === "shirts" ? button.classList.add("!hidden") : button.classList.remove("!hidden");
        } else if (value === "shirts") {
          button.dataset.category === "books" ? button.classList.add("!hidden") : button.classList.remove("!hidden");
        } else {
          ["books", "shirts"].includes(button.dataset.category) && button.classList.add("!hidden");
        }
      });
    }

    filterButton.dataset.value = value;
    filterButton.innerText = value;
    filterButton.classList.add("active");
  });
});

gsap.set(filterOptions, { autoAlpha: 0 });
