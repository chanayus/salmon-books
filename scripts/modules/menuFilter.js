let currentFilterShow = null;

const filterToggleButtons = document.querySelectorAll(".filter-toggle");
const filterOptions = document.querySelectorAll(".filter-options");
const optionsButton = document.querySelectorAll(".filter-options-content button");

export const getSelectedData = () => {
  const data = {};
  filterToggleButtons?.forEach((item) => {
    data[item.dataset.for] = item.dataset.value ?? "";
  });

  return data;
};

const hideOptions = () => {
  const targetButton = document.querySelector(`.filter-toggle[data-for="${currentFilterShow}"]`);
  const targetFilter = document.querySelector(`.filter-options[data-for="${currentFilterShow}"]`);

  !targetButton.dataset.value && targetButton?.classList.remove("active");
  gsap.to(targetFilter, { autoAlpha: 0, duration: 0.25 });
  currentFilterShow = null;
};

const showOptions = () => {
  const targetButton = document.querySelector(`.filter-toggle[data-for="${currentFilterShow}"]`);

  filterToggleButtons?.forEach((button) => !button.dataset.value && button.classList.remove("active"));

  if (currentFilterShow === null) return;

  filterOptions?.forEach((element) => {
    if (element.dataset.for === currentFilterShow) {
      gsap.to(element, { autoAlpha: 1, duration: 0.25 });
    } else {
      gsap.to(element, { autoAlpha: 0, duration: 0.25 });
    }
  });

  targetButton.classList.add("active");
};

const onValueChange = (element) => {
  const filterKey = element.parentElement.parentElement.dataset.for ?? element.dataset.for;
  const value = element.dataset.value ?? "";
  const filterButton = document.querySelector(`.filter-toggle[data-for='${filterKey}']`);
  const options = document.querySelectorAll(`.filter-options[data-for='${filterKey}'] button`);

  options?.forEach((option) => {
    if (option.dataset.value === value) {
      option.classList.add("active");
    } else {
      option.classList.remove("active");
    }
  });

  filterButton.dataset.value = value;
  filterButton.innerText = value;
  filterButton.classList.add("active");
};

filterToggleButtons?.forEach((button) => {
  button.dataset.category && button.classList.add("!hidden");
  button.dataset.value && onValueChange(button);

  button.addEventListener("click", (e) => {
    if (currentFilterShow === e.target.dataset.for) {
      hideOptions();
    } else {
      currentFilterShow = e.target.dataset.for;
      showOptions();
    }
  });
});

optionsButton?.forEach((button) => {
  button.addEventListener("click", (e) => onValueChange(e.target));
});

document.addEventListener("click", (e) => {
  const filterSection = document.querySelector("#filter-section");
  if (e.target && !filterSection.contains(e.target) && currentFilterShow) {
    hideOptions();
  }
});
