class Cart extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
      <section id="cart-aside" class="widget woocommerce widget_shopping_cart fixed top-0  opacity-0 invisible overflow-hidden left-0 z-40 flex w-full h-full bg-black/50">
        <div id="cart-aside-backdrop" class="flex-1 h-full"></div>
        <aside id="cart-aside-content" class="widget_shopping_cart_content flex-[0.5] flex flex-col max-w-[40rem] min-w-[32rem] max-md:min-w-[90vw] h-full bg-white p-6">
          <section class="flex items-center justify-between pb-4 border-b">
            <h4 class="text-3xl font-bold">Cart</h4>
            <button id="close-cart-aside">
              <img src="./icons/close-black.svg" alt="" />
            </button>
          </section>

          <ul class="pl-0 woocommerce-mini-cart cart_list product_list_widget flex-[1_1_0] overflow-y-scroll [&>div:not(:last-of-type)]:border-b sm-scrollbar">
            <li class="woocommerce-mini-cart-item mini_cart_item flex items-center py-4 gap-x-4">
              <a href="https://shop.websitecafe.info/product/bha-liquid-exfoliant/"
                ><img
                  width="300"
                  height="300"
                  src="https://salmonbooks.deeboon.live/wp-content/uploads/2023/09/MNM_ONEARTH-04.jpg"
                  class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail object-contain w-16 mt-0 sm:w-20 aspect-square bg-body-white"
                  alt=""
                  decoding="async"
                  srcset=""
              /></a>
              <div class="product-meta flex items-center justify-end flex-1  gap-x-10 gap-y-2">
                <div class="product-details max-sm:text-sm line-clamp-3 font-bold flex-1">
                  <a href="https://shop.websitecafe.info/product/bha-liquid-exfoliant/">BHA Liquid Exfoliant</a>
                </div>
                <span class="quantity flex max-md:flex-col-reverse md:items-center gap-4">
                  <span class="modify">  
                    <div class="product-increment !text-base !px-4 !h-10">
                      <button class="decrease">-</button>
                      <input type="number" id="input-value" value="1" />
                      <button class="increase">+</button>
                    </div>
                  </span>
                  <span class="product-price">
                  <span class="woocommerce-Price-amount amount flex flex-col items-end justify-end ">
                    <bdi><span class="woocommerce-Price-currencySymbol ">$</span>50.00</bdi>
                    </span>
                    <a
                      href=""
                      class="remove remove_from_cart_button with_text text-right w-full block mt-1"
                      aria-label="Remove BHA Liquid Exfoliant from cart"
                      data-product_id="1475"
                      data-cart_item_key="571d3a9420bfd9219f65b643d0003bf4"
                      data-product_sku=""
                      >Remove</a
                    ></span
                  ></span
                >
              </div>
            </li>

          
          </ul>

          <section class="pt-4 space-y-6 border-t">
            <div class="woocommerce-mini-cart__total total flex justify-between text-lg">
              <p>Subtotal:</p>
              <span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">$</span>110.00</bdi></span>
            </div>

            <div class="woocommerce-mini-cart__buttons buttons flex gap-4">
              <a href="https://shop.websitecafe.info/cart/" class="btn-orange button wc-forward">View cart</a>
              <a href="https://shop.websitecafe.info/checkout/" class="btn-orange button checkout wc-forward">Checkout</a>
            </div>

          </section>
        </aside>
      </section>
    `;
  }
}

customElements.define("cart-aside-component", Cart);
