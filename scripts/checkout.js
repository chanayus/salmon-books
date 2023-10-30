import "./modules/inputPassword.js";

const couponForm = document.querySelector("#coupon-form");
const couponToggle = document.querySelector("#coupon-toggle");

couponToggle?.addEventListener("click", () => {
  couponForm?.classList.toggle("grid-rows-[0fr]");
  couponForm?.classList.toggle("grid-rows-[1fr]");
  couponForm?.classList.toggle("py-3");
});
