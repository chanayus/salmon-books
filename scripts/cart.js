import "./modules/product/productIncrement.js";

const increaseBtn = document.querySelectorAll(".product-increment .increase");
const decreaseBtn = document.querySelectorAll(".product-increment .decrease");

const updateCartBtn = document.querySelector("#update-cart-button");

[...increaseBtn, ...decreaseBtn]?.forEach((btn) => {
  btn?.addEventListener("click", () => {
    if (updateCartBtn) {
      updateCartBtn.disabled = false;
    }
  });
});
