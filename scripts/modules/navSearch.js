let currentSearchVisible = false;
let currentCategory = "all";

const toggleSearchPopup = (type) => {
  const searchPopup = document.querySelector("#search-popup");
  const categories = document.querySelectorAll("#search-popup button");

  document.body.style.overflow = type === "open" ? "hidden" : "unset";

  if (type === "open" && searchPopup) {
    gsap
      .timeline()
      .fromTo(searchPopup, { autoAlpha: 0, scale: 0.9, filter: "blur(7px)" }, { autoAlpha: 1, scale: 1, filter: "blur(0px)", duration: 1, ease: "expo" }, "+=0.1")
      .fromTo(categories, { autoAlpha: 0, y: 25 }, { autoAlpha: 1, y: 0, stagger: 0.075, ease: "expo" }, 0.5);
    currentSearchVisible = true;
  } else if (type === "close" && searchPopup) {
    gsap.to(searchPopup, { autoAlpha: 0, scale: 0.975, filter: "blur(7px)", duration: 1, ease: "expo" });
    currentSearchVisible = false;
  }
};

const changeCategory = (category) => {
  currentCategory = category;

  categoryButtons?.forEach((button) => {
    const buttonCategory = button.dataset.category;
    if (buttonCategory === currentCategory) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
};

const categoryButtons = document.querySelectorAll("#search-popup button");
const navSearchButton = document.querySelector("#nav-search-button");

navSearchButton?.addEventListener("click", () => toggleSearchPopup(currentSearchVisible ? "close" : "open"));
categoryButtons?.forEach((button) => {
  const category = button.dataset.category;

  if (category === currentCategory) {
    button.classList.add("active");
  } else {
    button.classList.remove("active");
  }

  button.addEventListener("click", () => changeCategory(category));
});

toggleSearchPopup("close");
