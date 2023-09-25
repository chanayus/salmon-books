export const gravityHover = (selector) => {
  const cards = document.querySelectorAll(selector);

  cards?.forEach((card) => {
    let isPlaying = false;
    card.addEventListener("mouseover", (e) => {
      if (!isPlaying) {
        const x = e.layerX < 50 ? 5 : -5;
        const y = e.layerY < 50 ? 5 : -5;
        gsap
          .timeline({
            onComplete: () => (isPlaying = false),
          })
          .to(card, { x: x, y: y })
          .to(card, { x: -x, y: -y }, "-=0.35")
          .to(card, { x: 0, y: 0 });
      }
      isPlaying = true;
    });
  });
};
