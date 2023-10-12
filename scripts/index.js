import { gravityHover } from "./modules/gravityHover.js";

let currentSlidePage = 0;
let paginationDot;
let slideInterval;

const imageSlide = document.querySelectorAll(".hero-slide-image");
const textSlide = document.querySelectorAll(".hero-slide-text");
const paginationContainer = document.querySelector("#hero-slide-pagination");

const updatePagination = () => {
  paginationDot.forEach((dot, index) => {
    dot.className = `${index === currentSlidePage ? "active" : ""} pagination-dot`;
  });
};

const activeDotStyle = () => {
  const activeDot = paginationContainer.querySelector(`.pagination-dot.active`);
  const dots = paginationContainer.querySelectorAll(`.pagination-dot`);
  const div = document.createElement("div");
  div.className = "active-interval";

  dots.forEach((dot) => (dot.innerHTML = ""));
  activeDot.appendChild(div);

  gsap.fromTo(div, { width: "0%" }, { width: "100%", duration: 5, ease: "linear" });
};

const playSlideAnimation = (currentIndex, nextIndex) => {
  gsap
    .timeline()
    .to(imageSlide[currentIndex], { autoAlpha: 0, duration: 0.5 }, 0)
    .to(textSlide[currentIndex], { autoAlpha: 0, duration: 0.5 }, 0)
    .set([textSlide[currentIndex], imageSlide[currentIndex]], { display: "none" })
    .set([textSlide[nextIndex], imageSlide[nextIndex]], { display: "block", autoAlpha: 1 })
    .fromTo(imageSlide[nextIndex], { autoAlpha: 0, scale: 1.1 }, { autoAlpha: 1, scale: 1, ease: "expo", duration: 1.25 })
    .fromTo(textSlide[nextIndex].children, { autoAlpha: 0, x: -40 }, { autoAlpha: 1, x: 0, ease: "expo", stagger: 0.15, duration: 1.25 }, "-=1");

  currentSlidePage = nextIndex;
  updatePagination();
  activeDotStyle();
};

const initSlide = () => {
  textSlide?.forEach((element, index) => {
    if (index !== currentSlidePage) {
      gsap.set(element, { display: "none", autoAlpha: 0 });
      if (textSlide[index]) {
        gsap.set(imageSlide[index], { display: "none", autoAlpha: 0 });
      }
    }
    paginationContainer.innerHTML += `
        <button class="${index === currentSlidePage ? "active" : ""} pagination-dot"></button>
      `;
  });

  paginationDot = document.querySelectorAll("#hero-slide-pagination button");

  paginationDot?.forEach((button, index) => {
    button.addEventListener("click", () => {
      if (currentSlidePage !== index) {
        clearInterval(slideInterval);
        playSlideAnimation(currentSlidePage, index);
        slideInterval = setInterval(() => playSlideAnimation(currentSlidePage, currentSlidePage + 1 > textSlide.length - 1 ? 0 : currentSlidePage + 1), 5000);
      }
    });
  });
};

if (textSlide.length > 0) {
  initSlide();
  if (textSlide.length <= 1) {
    paginationContainer.classList.add("!hidden");
  } else if (textSlide.length > 1) {
    activeDotStyle();
    slideInterval = setInterval(() => playSlideAnimation(currentSlidePage, currentSlidePage + 1 > textSlide.length - 1 ? 0 : currentSlidePage + 1), 5000);
  }
}

if (imageSlide[0] && textSlide[0]) {
  gsap
    .timeline()
    .fromTo("#hero-section", { autoAlpha: 0 }, { autoAlpha: 1, ease: "expo", duration: 0.25 })
    .fromTo(imageSlide[0], { autoAlpha: 0, scale: 1.1 }, { autoAlpha: 1, scale: 1, ease: "expo", duration: 1.25 }, "+=0.25")
    .fromTo(textSlide[0].children, { autoAlpha: 0, x: -40 }, { autoAlpha: 1, x: 0, ease: "expo", stagger: 0.15, duration: 1.25 }, "-=1");
}

// Marquee Text Animate

gsap.fromTo(
  "#salmon-text-blue",
  { xPercent: -50 },
  {
    xPercent: 0,
    scrollTrigger: {
      trigger: "body",
      scrub: 1,
      start: "22% center",
      end: "72.5% center",
      ease: "none",
    },
  }
);

gsap.fromTo(
  "#salmon-text-yellow",
  { xPercent: 0 },
  {
    xPercent: -50,
    scrollTrigger: {
      trigger: "body",
      scrub: 1,
      start: "22% center",
      end: "72.5% center",
      ease: "none",
    },
  }
);

//  handle article and new release section

const articleSection = document.querySelector("#article-section");
const newReleaseSection = document.querySelector("#new-release-section");

const newReleaseItems = document.querySelectorAll("#new-release-list-container .product-card");
const articleItems = articleSection.querySelectorAll(".article-card");

if (articleItems.length <= 0) {
  articleSection.classList.add("!hidden");
}
if (newReleaseItems.length <= 0) {
  newReleaseSection.classList.add("!hidden");
}

gravityHover(".article-card");
