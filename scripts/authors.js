import { gravityHover } from "./modules/gravityHover.js";
import { infiniteScroll } from "./modules/infiniteScroll.js";
import "./modules/menuFilter.js";

const authorInput = document.querySelector("#author-name-input");
const authorResult = document.querySelector(".filter-options-content");
const authorsList = authorResult?.children;

authorInput?.addEventListener("input", (e) => {
  [...authorsList]?.forEach((author) => {
    if (author.dataset.value.toLowerCase().includes(e.target.value.toLowerCase())) {
      author.classList.remove("hidden");
    } else {
      author.classList.add("hidden");
    }
  });
});

gsap.fromTo(".author-card", { autoAlpha: 0, scale: 0.75 }, { autoAlpha: 1, scale: 1, stagger: 0.05, duration: 1, ease: "expo" });

gravityHover(".author-card");

infiniteScroll("#author-card-container", { showPerItem: 20, totalItem: document.querySelectorAll(".author-card").length });
