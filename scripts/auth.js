import "./modules/inputPassword.js";

let currentTab = "login-form";

const loginTab = document.querySelector("button[data-tab='login-form']");
const registerTab = document.querySelector("button[data-tab='register-form']");
const registerForm = document.querySelector("#register-form");
const loginForm = document.querySelector("#login-form");

[loginTab, registerTab]?.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.tab === "register-form" && currentTab !== "register-form") {
      currentTab = "register-form";
      loginTab.classList.remove("active")
      registerTab.classList.add("active")
      gsap
        .timeline()
        .fromTo(loginForm, { autoAlpha: 1 }, { autoAlpha: 0, duration: 0.25 })
        .set(loginForm, { display: "none", autoAlpha: 0, duration: 0.25 })
        .set(registerForm, { display: "block" })
        .fromTo(registerForm, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.25 });
    } else if (button.dataset.tab === "login-form" && currentTab !== "login-form") {
      currentTab = "login-form";
      registerTab.classList.remove("active")
      loginTab.classList.add("active")
      gsap
        .timeline()
        .fromTo(registerForm, { autoAlpha: 1 }, { autoAlpha: 0, duration: 0.25 })
        .set(registerForm, { display: "none", autoAlpha: 0, duration: 0.25 })
        .set(loginForm, { display: "block" })
        .fromTo(loginForm, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.25 });
    }
  });
});
