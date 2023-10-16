class Cart extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
        <section id="cart-aside" class="fixed top-0  opacity-0 invisible overflow-hidden left-0 z-40 flex w-full h-full bg-black/50">
          <div id="cart-aside-backdrop" class="flex-1 h-full"></div>
          <aside id="cart-aside-content" class="flex-[0.5] flex flex-col max-w-[40rem] min-w-[32rem] max-md:min-w-[90vw] h-full bg-white p-6">
            <section class="flex items-center justify-between pb-4 border-b">
              <h4 class="text-3xl font-bold">Cart</h4>
              <button id="close-cart-aside">
                <img src="./icons/close-black.svg" alt="" />
              </button>
            </section>
  
            <section class="flex-[1_1_0] overflow-y-scroll pr-3 [&>div:not(:last-of-type)]:border-b sm-scrollbar">
              <div class="flex items-center py-4 sm:gap-x-8 gap-x-4">
                <a href="" class="flex items-center gap-x-4">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/c6f8/61fd/115a6a30c2aad4d08221a43ab9cd4c58?Expires=1698019200&Signature=S8uVotx8vQ0Oh~owpYqWg2UCFrhogP453DB9byNUHev5WcCgRmbzjjQpFGcyt-wn1X-kgAXqmQVQ3KAINWche1HlHwW62bAGJo~kBBKaxcmQti6yDBrjdRkTuleE2dMSIN7cAbsneSg~Pn414cSTekgLqEESGRzyVC2hSrnW8k-pqZj5tD~r-UCDTl-JEhMSO1uaP0Ce13XETCGzwTjtoLeBKCUzjW219muh03kDP7a8euC1p74lwYioV2upL8V5JSm~nC2gtfRSzN0FK0u9-SlRS4wj~Amex~sM8JkANxmPg4Xc92KP8si~PnXrHwBPlu0zehCu137McdWn1Sg1YA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""
                    width="300"
                    height="300"
                    class="object-contain w-16 mt-0 sm:w-20 aspect-square bg-body-white"
                  />
  
                  <p class="max-w-[25ch] max-sm:text-sm line-clamp-3 font-bold">ON EARTH WE'RE BRIEFLY GORGEOUS เราต่างงดงามแล้วจางหาย</p>
                </a>
                <div class="flex justify-end flex-1 max-lg:items-end max-lg:flex-col-reverse gap-x-10 gap-y-2">
                  <div class="product-increment !text-base !px-4 !h-10">
                    <button class="decrease">-</button>
                    <input type="number" id="input-value" value="1" />
                    <button class="increase">+</button>
                  </div>
  
                  <div class="text-right">
                    <b>฿150.00</b>
                    <button class="text-sm">Remove</button>
                  </div>
                </div>
              </div>
  
  
            </section>
  
            <section class="pt-4 space-y-6 border-t">
              <div class="flex justify-between text-lg">
                <p>Subtotal:</p>
                <p>฿150.00</p>
              </div>
              <div class="flex gap-4">
                <a href="../cart.html" class="btn-orange">View Cart</a>
                <a href="" class="btn-orange">Checkout</a>
              </div>
            </section>
          </aside>
        </section>
      `;
  }
}

customElements.define("cart-aside-component", Cart);
