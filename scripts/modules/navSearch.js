let currentSearchVisible = false;

const navSearchButton = document.querySelector("#nav-search-button");
const closeSearchButton = document.querySelector("#close-search-popup");

const searchPopup = document.querySelector("#search-popup");
const searchPopupContent = document.querySelector("#search-popup-content");

const input = searchPopup?.querySelector("input");

const productSection = searchPopup?.querySelector("#search-popup-products");
const suggestionSection = searchPopup?.querySelector("#search-popup-suggestion");
const searchResultSection = searchPopup?.querySelector("#search-popup-result");

const toggleSearchPopup = (type) => {
  document.body.style.overflow = type === "open" ? "hidden" : "unset";

  if (type === "open" && searchPopup !== null) {
    gsap
      .timeline()
      .fromTo(searchPopup, { autoAlpha: 0 }, { autoAlpha: 1, duration: 1, ease: "expo" })
      .fromTo(searchPopupContent, { yPercent: -100 }, { yPercent: 0, duration: 0.9, ease: "expo.inOut" }, "<");

    setTimeout(() => {
      input.focus();
    }, 250);

    currentSearchVisible = true;
  } else if (type === "close" && searchPopup) {
    gsap.timeline().to(searchPopupContent, { yPercent: -100, duration: 0.75, ease: "expo.inOut" }).to(searchPopup, { autoAlpha: 0, duration: 0.75, ease: "expo" }, "-=0.35");
    currentSearchVisible = false;
  }
};

navSearchButton?.addEventListener("click", () => toggleSearchPopup("open"));
closeSearchButton?.addEventListener("click", () => toggleSearchPopup("close"));

input?.addEventListener("input", (e) => {
  const { value } = e.target;
});

toggleSearchPopup("close");
