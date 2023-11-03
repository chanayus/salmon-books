import "./modules/inputPassword.js";
const couponForm = document.querySelector("#coupon-form");
const loginForm = document.querySelector("#login-form");

const loginToggle = document.querySelector("#login-form-toggle");
const couponToggle = document.querySelector("#coupon-toggle");

loginToggle?.addEventListener("click", () => {
  loginForm?.classList.toggle("grid-rows-[0fr]");
  loginForm?.classList.toggle("grid-rows-[1fr]");
  loginForm?.classList.toggle("py-3");
});
couponToggle?.addEventListener("click", () => {
  couponForm?.classList.toggle("grid-rows-[0fr]");
  couponForm?.classList.toggle("grid-rows-[1fr]");
  couponForm?.classList.toggle("py-3");
});
