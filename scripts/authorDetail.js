import { gravityHover } from "./modules/gravityHover.js";
import { infiniteScroll } from "./modules/infiniteScroll.js";

gsap
  .timeline()
  .fromTo(
    "header",
    {
      autoAlpha: 0,
    },
    {
      autoAlpha: 1,
    },
    "-=0.1"
  )
  .fromTo("#author-image", { autoAlpha: 0, scale: 0.9 }, { autoAlpha: 1, scale: 1, ease: "expo", duration: 1 })
  .fromTo("#author-image img", { scale: 1.35 }, { scale: 1, ease: "expo", duration: 1 }, "<")
  .fromTo("#author-name", { autoAlpha: 0, y: 15 }, { autoAlpha: 1, y: 0, ease: "expo" }, "-=0.7")
  .fromTo("ul li", { autoAlpha: 0, y: 17 }, { autoAlpha: 1, y: 0, stagger: 0.08, ease: "expo" }, "-=0.2")
  .fromTo("#author-social a", { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, stagger: 0.035, ease: "expo" }, "-=0.35")
  .fromTo(".author-books", { autoAlpha: 0 }, { autoAlpha: 1 }, "-=0.25");

gravityHover(".product-card");
infiniteScroll("#author-books-grid", { showPerItem: 6, totalItem: document.querySelectorAll(".product-card").length });
