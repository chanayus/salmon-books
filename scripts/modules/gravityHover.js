const randomNumber = () => {
  const num = Math.ceil(Math.random() * 24 - 12);
  return num < 6 && num > -6 ? 6 : num;
};

export const gravityHover = (selector) => {
  const cards = document.querySelectorAll(selector);

  cards?.forEach((card) => {
    card.addEventListener("mouseenter", (e) => {
      if (!card.classList.contains("gravity-hover")) {
        const x = randomNumber();
        const y = randomNumber();

        // Set unique animation values for each card
        card.style.setProperty("--gravity-x", `${x}px`);
        card.style.setProperty("--gravity-y", `${y}px`);
        console.log(x, y);
        card.classList.add("gravity-hover");
      }
    });

    card.addEventListener("animationend", (e) => {
      card.classList.remove("gravity-hover");
    });
  });
};
