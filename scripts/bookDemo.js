// Navbar Sticky

let prevScrollY = window.scrollY;

const navbar = document.querySelector("#navbar");
const topReaderMenu = document.querySelector("#reader-top-menu");

const showNavbar = () => {
  navbar.style.pointerEvents = "auto";
  topReaderMenu.classList.add("lg:top-[6rem]", "top-[5rem]");
  topReaderMenu.classList.remove("top-0");
  gsap.to(navbar, { y: 0, duration: 0.075, ease: "none" });
};

const hideNavbar = () => {
  navbar.style.pointerEvents = "none";
  topReaderMenu.classList.remove("lg:top-[6rem]", "top-[5rem]");
  topReaderMenu.classList.add("top-0");
  gsap.to(navbar, { y: "-100%", duration: 0.075, ease: "none" });
};

window.addEventListener("scroll", () => {
  if (window.scrollY < prevScrollY || window.scrollY <= 0) {
    showNavbar();
  } else {
    hideNavbar();
  }
  prevScrollY = window.scrollY;
});

// Dark Mode
let darkMode = localStorage.getItem("readerTheme") === "dark";

const darkModeButton = document.querySelector("#darkmode-toggle");
const mainContainer = document.querySelector("#main-content");
const footer = document.querySelector("footer");
const readerMenu = document.querySelectorAll(".reader-menu");

const darkModeToggle = () => {
  mainContainer.classList.toggle("dark-mode");
};

darkModeButton?.addEventListener("click", () => {
  darkMode = !darkMode;
  darkModeToggle();
  localStorage.setItem("readerTheme", darkMode ? "dark" : "light");
});

darkMode && darkModeToggle();

// Text Adjust Menu
let textAdjustMenuVisible = false;

const textAdjustButton = document.querySelector("#text-adjust-button");
const textAdjustMenu = document.querySelector("#text-adjust");

textAdjustButton?.addEventListener("click", () => {
  textAdjustMenuVisible = !textAdjustMenuVisible;
  gsap.to(textAdjustMenu, { autoAlpha: textAdjustMenuVisible ? 1 : 0, duration: 0.2 });

  document.addEventListener(
    "click",
    (e) => {
      if (e.target && !textAdjustMenu.contains(e.target) && textAdjustMenuVisible && !textAdjustButton.contains(e.target)) {
        gsap.to(textAdjustMenu, { autoAlpha: 0, duration: 0.2 });
        textAdjustMenuVisible = false;
      }
    },
    { capture: true }
  );
});
