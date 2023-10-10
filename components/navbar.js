class Navbar extends HTMLElement {
  pathname = window.location.pathname ?? "";
  activeStyle = "text-yellow font-semibold";
  activeStyleMobile = "text-orange font-semibold";

  getLinkStyle(path) {
    return path.includes(this.pathname) ? this.activeStyle : "";
  }

  getLinkStyleMobile(path) {
    return path.includes(this.pathname) ? this.activeStyleMobile : "";
  }

  connectedCallback() {
    this.innerHTML = /*html*/ `
    <nav id="navbar" class="fixed top-0 z-40 flex items-center w-full lg:h-24 h-20 text-white bg-orange">
      <div class="flex items-center justify-between w-full main-container">
        <button id="mobile-nav-menu-button" class="block lg:hidden active">
          <span></span>
        </button>
        <div class="flex items-center gap-x-10">
          <a href="../index.html">
            <img src="./images/text-logo.svg" alt="" width="100" />
          </a>
          <div class="hidden space-x-6 lg:block">
            <a href="../books.html" class="hover-text-yellow ${this.getLinkStyle(["/books.html"])}">BOOKS</a>
            <a href="../authors.html" class="hover-text-yellow ${this.getLinkStyle(["/authors.html", "/author-detail.html"])}">AUTHORS</a>
            <a href="../articles.html" class="hover-text-yellow ${this.getLinkStyle(["/articles.html", "/article-detail.html"])}">ARTICLES</a>
            <a href="../media.html" class="hover-text-yellow ${this.getLinkStyle(["/media.html"])}">MEDIA</a>
            <a href="../shop.html" class="hover-text-yellow ${this.getLinkStyle(["/shop.html", "/book-detail.html"])}">SHOP</a>
            <a href="../readership.html" class="hover-text-yellow ${this.getLinkStyle(["/readership.html"])}">READERSHIP</a>
          </div>
        </div>

        <button id="nav-search-button" class="w-8 h-8 bg-white rounded-full">
          <img src="./icons/search-orange.svg" width="16" height="16" class="mx-auto" alt="" />
        </button>
      </div>
    </nav>

    <section id="mobile-nav-menu" class="fixed top-0 z-30 block w-full h-full opacity-0 lg:hidden bg-body-white">
      <div class="flex flex-col pt-32 space-y-6 text-xl uppercase main-container">
        <a href="../books.html" class="hover-text-orange ${this.getLinkStyleMobile(["/books.html"])}">Books</a>
        <a href="../authors.html" class="hover-text-orange ${this.getLinkStyleMobile(["/authors.html"])}">Authors</a>
        <a href="../articles.html" class="hover-text-orange ${this.getLinkStyleMobile(["/articles.html", "/article-detail.html"])}">Articles</a>
        <a href="../media.html" class="hover-text-orange ${this.getLinkStyleMobile(["/media.html"])}">Media</a>
        <a href="../shop.html" class="hover-text-orange ${this.getLinkStyleMobile(["/shop.html"])}">Shop</a>
        <a href="../readership.html" class="hover-text-orange ${this.getLinkStyleMobile(["/readership.html"])}">Readership</a>
      </div>
    </section>

    <section id="search-popup" class="fixed z-30 w-full h-full opacity-0 bg-body-white">
      <div class="space-y-14 main-container sm:pt-44 pt-36">
        <input type="text" name="search-text" placeholder="Type Anything..." class="bg-transparent py-4 border-b-2 border-black/30 w-full text-[clamp(2rem,10vw,5.5rem)]" />

        <div class="nav-search-category flex lg:text-xl text-lg gap-x-4 gap-y-8 flex-wrap">
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
