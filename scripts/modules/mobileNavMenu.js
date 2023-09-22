let menuVisible = false;
const mobileNavMenu = document.querySelector("#mobile-nav-menu");
const toggleButton = document.querySelector("#mobile-nav-menu-button");

const toggleMobileNavMenu = (type) => {
  document.body.style.overflow = type === "open" ? "hidden" : "unset";
  if (type === "open" && mobileNavMenu) {
    gsap.fromTo(mobileNavMenu, { autoAlpha: 0 }, { autoAlpha: 1, duration: 1, ease: "expo" });
    menuVisible = true;
  } else if (type === "close" && mobileNavMenu) {
    gsap.to(mobileNavMenu, { autoAlpha: 0, duration: 1, ease: "expo" });
    menuVisible = false;
  }
  toggleButton?.classList.toggle("active")
};

toggleButton?.addEventListener("click", () => toggleMobileNavMenu(menuVisible ? "close" : "open"));

toggleMobileNavMenu("close");
