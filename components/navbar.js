class Navbar extends HTMLElement {
  pathname = window.location.pathname ?? "";
  activeStyle = "text-yellow font-semibold";
  activeStyleMobile = "text-orange font-semibold";

  getLinkStyle(path) {
    return this.pathname === path ? this.activeStyle : "";
  }

  getLinkStyleMobile(path) {
    return this.pathname === path ? this.activeStyleMobile : "";
  }

  connectedCallback() {
    this.innerHTML = /*html*/ `
    <nav class="fixed top-0 z-40 flex items-center w-full lg:h-24 h-20 text-white bg-orange">
      <div class="flex items-center justify-between w-full main-container">
        <button id="mobile-nav-menu-button" class="block lg:hidden active">
          <span></span>
        </button>
        <div class="flex items-center gap-x-10">
          <a href="">
            <img src="./images/text-logo.svg" alt="" width="100" />
          </a>
          <div class="hidden space-x-6 lg:block">
            <a href="" class="hover-text-yellow ${this.getLinkStyle("")}">BOOKS</a>
            <a href="../authors.html" class="hover-text-yellow ${this.getLinkStyle("/authors.html")}">AUTHORS</a>
            <a href="" class="hover-text-yellow ${this.getLinkStyle("")}">ARTICLES</a>
            <a href="../shop.html" class="hover-text-yellow ${this.getLinkStyle("/shop.html")}">SHOP</a>
            <a href="../readership.html" class="hover-text-yellow ${this.getLinkStyle("/readership.html")}">READERSHIP</a>
          </div>
        </div>

        <button id="nav-search-button" class="w-8 h-8 bg-white rounded-full">
          <img src="./icons/search-orange.svg" width="16" height="16" class="mx-auto" alt="" />
        </button>
      </div>
    </nav>

    <section id="mobile-nav-menu" class="fixed top-0 z-30 block w-full h-full opacity-0 lg:hidden bg-body-white">
      <div class="flex flex-col pt-32 space-y-6 text-xl uppercase main-container">
        <a href="" class="hover-text-orange ${this.getLinkStyleMobile("")}">Books</a>
        <a href="../authors.html" class="hover-text-orange ${this.getLinkStyleMobile("/authors.html")}">Authors</a>
        <a href="" class="hover-text-orange ${this.getLinkStyleMobile("")}">Articles</a>
        <a href="../shop.html" class="hover-text-orange ${this.getLinkStyleMobile("/shop.html")}">Shop</a>
        <a href="../readership.html" class="hover-text-orange ${this.getLinkStyleMobile("/readership.html")}">Readership</a>
      </div>
    </section>

    <section id="search-popup" class="fixed z-30 w-full h-full opacity-0 bg-body-white">
      <div class="space-y-14 main-container pt-44">
        <input type="text" name="search-text" placeholder="Type Anything..." class="bg-transparent py-4 border-b-2 border-black/30 w-full text-[clamp(2rem,10vw,5.5rem)]" />

        <div class="nav-search-category flex text-xl gap-x-4 gap-y-8 flex-wrap">
          <button data-category="all" >All</button>
          <button data-category="authors" >Authors</button>
          <button data-category="articles" >Articles</button>
          <button data-category="shop" >Shop</button>
        </div>
      </div>
    </section>
    `;
  }
}

customElements.define("navbar-component", Navbar);
