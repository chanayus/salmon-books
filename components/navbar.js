class Navbar extends HTMLElement {
  pathname = window.location.pathname ?? "";
  activeStyle = "text-yellow font-semibold";

  getLinkStyle(path) {
    return this.pathname === path ? this.activeStyle : "";
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
        <a href="">Books</a>
        <a href="">Authors</a>
        <a href="">Articles</a>
        <a href="">Shop</a>
        <a href="">Readership</a>
      </div>
    </section>

    <section id="search-popup" class="fixed z-30 w-full h-full opacity-0 bg-body-white">
      <div class="space-y-14 main-container pt-44">
        <input type="text" name="search-text" placeholder="Type Anything..." class="bg-transparent py-4 border-b-2 border-black/30 w-full text-[clamp(2rem,10vw,5.5rem)]" />

        <div class="flex text-xl gap-x-4">
          <button data-category="all" class="flex items-center justify-center py-2 text-white rounded-full px-9 bg-orange gap-x-2">All</button>
          <button data-category="authors" class="py-2 text-black bg-transparent rounded-full px-9">Authors</button>
          <button data-category="articles" class="py-2 text-black bg-transparent rounded-full px-9">Articles</button>
          <button data-category="shop" class="py-2 text-black bg-transparent rounded-full px-9">Shop</button>
        </div>
      </div>
    </section>
    `;
  }
}

customElements.define("navbar-component", Navbar);
