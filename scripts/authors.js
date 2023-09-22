let authorSelectorVisible = false;

const selectorToggle = document.querySelector("#author-select-button");
const authorSelector = document.querySelector("#author-select");
const icon = selectorToggle?.querySelector("svg path");

selectorToggle?.addEventListener("click", () => {
  gsap.to(authorSelector, { autoAlpha: authorSelectorVisible ? 0 : 1, duration: 0.25 });
  authorSelectorVisible = !authorSelectorVisible;

  selectorToggle?.classList.toggle("text-orange");
  icon?.classList.toggle("rotate-180");

  icon?.setAttribute("fill", authorSelectorVisible ? "#fc744a" : "#000");
});

gsap.set(authorSelector, { autoAlpha: 0 });
