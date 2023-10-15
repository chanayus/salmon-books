const cart = document.querySelector("#cart-aside");
const backdrop = document.querySelector("#cart-aside-backdrop");
const content = document.querySelector("#cart-aside-content");
const closeButton = document.querySelector("#close-cart-aside");

let menuVisible = false;

export const openCartAside = () => {
  if (!menuVisible) {
    gsap
      .timeline({ onComplete: () => (menuVisible = true) })
      .set(cart, { PointerEvent: "auto" })
      .fromTo(cart, { autoAlpha: 0 }, { autoAlpha: 1, ease: "expo" })
      .fromTo(content, { xPercent: 100 }, { xPercent: 0, duration: 1, ease: "expo.inOut" }, "-=0.75");
  }
};

const closeCartAside = () => {
  if (menuVisible) {
    menuVisible = false;
    gsap.timeline().set(cart, { PointerEvent: "none" }).fromTo(content, { xPercent: 0 }, { xPercent: 100, duration: 1, ease: "expo" }).fromTo(cart, { autoAlpha: 1 }, { autoAlpha: 0 }, "-=1");
  }
};

backdrop.addEventListener("click", () => closeCartAside());
closeButton.addEventListener("click", () => closeCartAside());
