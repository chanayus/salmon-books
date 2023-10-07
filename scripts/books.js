import { infiniteScroll } from "./modules/infiniteScroll.js";
import { getSelectedData } from "./modules/menuFilter.js";

infiniteScroll("#product-content", { showPerItem: 12, totalItem: document.querySelectorAll("#product-content .product-card").length });
