export const gravityHover = (selector) => {
  const cards = document.querySelectorAll(selector);

  cards?.forEach((card) => {
    card.addEventListener("mouseenter", (e) => {
      if (!card.classList.contains("gravity-hover")) {
        const x = e.layerX < 50 ? 7 : -7;
        const y = e.layerY < 50 ? 7 : -7;

        // Set unique animation values for each card
        card.style.setProperty("--gravity-x", `${x}px`);
        card.style.setProperty("--gravity-y", `${y}px`);

        card.classList.add("gravity-hover");
      }
    });

    card.addEventListener("animationend", (e) => {
      card.classList.remove("gravity-hover");
    });
  });
};
