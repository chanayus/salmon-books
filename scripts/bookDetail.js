import "./modules/product/imgPreview.js";
import "./modules/product/productIncrement.js";
import { gravityHover } from "./modules/gravityHover.js";
import { openCartAside } from "./modules/product/cartAside.js";

const addToCartButton = document.querySelector("#add-to-cart-button");

addToCartButton?.addEventListener("click", () => openCartAside());
gravityHover(".product-card");
