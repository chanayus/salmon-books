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

    
    <header id="search-popup" class="fixed z-40 w-full h-full opacity-0 invisible bg-black/40 backdrop-blur-sm">
      <section id="search-popup-content" class="w-full h-[85%] bg-body-white pb-4">
        <div class="space-y-6 h-full main-container pt-[3.5vh] flex flex-col ">
          <section class="flex gap-x-4 items-center w-full">
            <div class="py-3 border-b border-black/20 flex gap-x-2 flex-1">
              <img src="../icons/search-orange.svg" alt="" width="22" />
              <input type="text" name="search-text" placeholder="Type Anything..." class="bg-transparent w-full font-medium" />
            </div>
            <button id="close-search-popup" class="w-10 h-10 flex justify-center items-center bg-white rounded-full">
              <img src="../icons/close-black.svg" alt="" />
            </button>
          </section>

          <section id="search-popup-result" class="w-full sm-scrollbar uppercase flex-1 flex overflow-y-auto flex-col gap-y-2.5">
            <a href="" >Books</a>
            <a href="" >Authors</a>
            <a href="" >Articles</a>
            <a href="" >media</a>
            <a href="" >Books</a>
            <a href="" >Authors</a>
            <a href="" >Articles</a>
            <a href="" >media</a>
            <a href="" >Books</a>
            <a href="" >Authors</a>
            <a href="" >Articles</a>
            <a href="" >media</a>
            <a href="" >Books</a>
            <a href="" >Authors</a>
            <a href="" >Articles</a>
            <a href="" >media</a>
          </section>

          <section class="w-full flex-[2.5] overflow-y-auto sm-scrollbar flex gap-y-6 max-lg:flex-col">
            <div id="search-popup-suggestion" class="flex-1 lg:sticky top-0 space-y-3">
              <h5 class="text-orange">SUGGESTED</h5>
              <div class="flex flex-col gap-y-2.5">
                <a href="" class="uppercase">Books</a>
                <a href="" class="uppercase">Authors</a>
                <a href="" class="uppercase">Articles</a>
                <a href="" class="uppercase">media</a>
              </div>
            </div>
            <div id="search-popup-products"  class="flex-[2.5]">
              <h5 class="text-orange sticky top-0 bg-body-white pb-1">PRODUCTS</h5>

              <div class="flex gap-4 flex-wrap max-lg:justify-center">
                <a href="" class="w-40 text-center space-y-1.5">
                  <img class="aspect-[0.9] w-full object-cover" src="https://s3-alpha-sig.figma.com/img/7ad2/8d97/8f01d6b550d3bf89bf233658b252feef?Expires=1698624000&Signature=FDJ~qB1UZz6HKtF6hJF1dNukEUOFz4EEoi3Tdh8dLDQmDZM-15kzcXuIexOrlTR6Ei4ayzsqkbZeyCFwr8mzne4Bs8-9me6a~M2PLqumJDml8TKmrecatdqQIO~u30kQl4bGqNhRX3bzMD9372yyenLOSze3saCOX37S8CLygh5~WYSH8JmRaDYKviFSYKJlFMP2sKpEq3IKDMzfmWd7I8Ps7~jh9dWk2ch7yiGDDzQ58RCeAlMxh5j-evkZPj-7cQgCw8e2sj~8al5Id7fckAWhs1DbX8Gh1CeDFQrBOmpxiiY-tHCzarQRv9lqYeloz98IlwSHOa8vmcwSg7itEg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                  <b class="text-sm line-clamp-2">กลับหลังหัน ๒</b>
                  <p class="text-xs uppercase">Art Jeeno</p>
                </a>
                <a href="" class="w-40 text-center space-y-1.5">
                  <img class="aspect-[0.9] w-full object-cover" src="https://s3-alpha-sig.figma.com/img/5eb4/5358/170a2d2a261ede2d36321cc53e159cb4?Expires=1698624000&Signature=gzGcOrk6c93aXPNxB5VECkN~FzHhCJvuAPW00I7nRrBlDdSM8GYvnftF7aDWuL3BzlGoezIpy4Yae67S2m8bUBVL17u~Wod0-cKWKzuYZv6naHFb1pFny7ozCOo5Q-07woi~WKQoIm41v4P~L78SpbFscC0rVmB3d~hWFrs-TQ19Sju5zK6hwuyeTm0n~9tFlxHZjiS3z3YVTGyYKbal5J1Bp7hu3acMKkTANsEIp85vjQnyQtPx6wwZm30pFsVgwcfsWICXM~n~9jZMQT23mL-W6qFM-cHFbRkQDU3jM0HBy8dZfNncLU9NYVFM9i3Q9Qj9X8XybTRi3mGwBN6xmw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                  <b class="text-sm line-clamp-2">HORMONES THE SERIES ฉบับ ACT-ART</b>
                  <p class="text-xs uppercase">Art Jeeno</p>
                </a>
                <a href="" class="w-40 text-center space-y-1.5">
                  <img class="aspect-[0.9] w-full object-cover" src="https://s3-alpha-sig.figma.com/img/9b2b/5346/d81aeb0254d872c2005fc19f18b2559d?Expires=1698624000&Signature=ljf0DJp2czo7uyZBsW6udz9Sm3CpNHofQbS7ul6bJ4JHOZ6-Sn7leIDC36wDjPg0b6WI1WQMIyZzNsSCNPvKFNVVBNZ9ICTSrZ673eZgddB5aybVsfbdmjLT-FtyfrPJKz4H6O0zyhdofb04lkiM6BtWiXNSafWnHVbKqVOYQvn4OXnL3pwOUfMQCGvnHhkQkYI7CgM0yqwid-9zcHt3gX1A1VH52stwMtRIurlKwT5jwMjCOJ4gR~c4JuIxOuWD06dj-uAIfuaxoJ9fG2oKie5kcFTJwhieTZqosBLRHb3Nshuu4bJ8QhWjRYxQ~iGFTaBkBJVWT9Hak6yJ61J2Bg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                    <b class="text-sm line-clamp-2">D DAY</b>
                    <p class="text-xs uppercase">Art Jeeno</p>
                </a>
                <a href="" class="w-40 text-center space-y-1.5">
                  <img class="aspect-[0.9] w-full object-cover" src="https://s3-alpha-sig.figma.com/img/805d/00de/dcd1e113ebc3bb9614c680a769c4e3f5?Expires=1698624000&Signature=OD~ZiFv9-mvak5ss7iPQ-xjN3JhuTCaONEqI1OJB06IsI1HDvyqz53x63NiGgYuzoYQ7ev5BpN~12xYfkEdQyyXZH1fg~0eim3k8UyirDxeQZSlLvHEqfPFxnZkzPmGZlYyRydG5hr-5ejblo4XdFAG~EXNTgjx9xluWDoHsNpR7z-jMqAOXqI-Iv6BEs~aeNctWRIK~jCvyU6eGqakVHAJIW~EPBsY6FMRYt5u5Xv~DrR4gxQAu3JjC86FZiMblyvLUSQ1fT5AaQ5q5kiI0wJ4RmHCgGlQsDCzOADqhf3Wi~hhXuWw0vE1h4i9W~S1CQBewcS2YgbOJ~GL8PtuRtw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                  <b class="text-sm line-clamp-2">HORMONES THE SERIES ฉบับ ACT-ART</b>
                  <p class="text-xs uppercase">Art Jeeno</p>
                </a>

                <a href="" class="w-40 text-center space-y-1.5">
                  <img class="aspect-[0.9] w-full object-cover" src="https://s3-alpha-sig.figma.com/img/7ad2/8d97/8f01d6b550d3bf89bf233658b252feef?Expires=1698624000&Signature=FDJ~qB1UZz6HKtF6hJF1dNukEUOFz4EEoi3Tdh8dLDQmDZM-15kzcXuIexOrlTR6Ei4ayzsqkbZeyCFwr8mzne4Bs8-9me6a~M2PLqumJDml8TKmrecatdqQIO~u30kQl4bGqNhRX3bzMD9372yyenLOSze3saCOX37S8CLygh5~WYSH8JmRaDYKviFSYKJlFMP2sKpEq3IKDMzfmWd7I8Ps7~jh9dWk2ch7yiGDDzQ58RCeAlMxh5j-evkZPj-7cQgCw8e2sj~8al5Id7fckAWhs1DbX8Gh1CeDFQrBOmpxiiY-tHCzarQRv9lqYeloz98IlwSHOa8vmcwSg7itEg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                  <b class="text-sm line-clamp-2">กลับหลังหัน ๒</b>
                  <p class="text-xs uppercase">Art Jeeno</p>
                </a>
                <a href="" class="w-40 text-center space-y-1.5">
                  <img class="aspect-[0.9] w-full object-cover" src="https://s3-alpha-sig.figma.com/img/5eb4/5358/170a2d2a261ede2d36321cc53e159cb4?Expires=1698624000&Signature=gzGcOrk6c93aXPNxB5VECkN~FzHhCJvuAPW00I7nRrBlDdSM8GYvnftF7aDWuL3BzlGoezIpy4Yae67S2m8bUBVL17u~Wod0-cKWKzuYZv6naHFb1pFny7ozCOo5Q-07woi~WKQoIm41v4P~L78SpbFscC0rVmB3d~hWFrs-TQ19Sju5zK6hwuyeTm0n~9tFlxHZjiS3z3YVTGyYKbal5J1Bp7hu3acMKkTANsEIp85vjQnyQtPx6wwZm30pFsVgwcfsWICXM~n~9jZMQT23mL-W6qFM-cHFbRkQDU3jM0HBy8dZfNncLU9NYVFM9i3Q9Qj9X8XybTRi3mGwBN6xmw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                  <b class="text-sm line-clamp-2">HORMONES THE SERIES ฉบับ ACT-ART</b>
                  <p class="text-xs uppercase">Art Jeeno</p>
                </a>
                <a href="" class="w-40 text-center space-y-1.5">
                  <img class="aspect-[0.9] w-full object-cover" src="https://s3-alpha-sig.figma.com/img/9b2b/5346/d81aeb0254d872c2005fc19f18b2559d?Expires=1698624000&Signature=ljf0DJp2czo7uyZBsW6udz9Sm3CpNHofQbS7ul6bJ4JHOZ6-Sn7leIDC36wDjPg0b6WI1WQMIyZzNsSCNPvKFNVVBNZ9ICTSrZ673eZgddB5aybVsfbdmjLT-FtyfrPJKz4H6O0zyhdofb04lkiM6BtWiXNSafWnHVbKqVOYQvn4OXnL3pwOUfMQCGvnHhkQkYI7CgM0yqwid-9zcHt3gX1A1VH52stwMtRIurlKwT5jwMjCOJ4gR~c4JuIxOuWD06dj-uAIfuaxoJ9fG2oKie5kcFTJwhieTZqosBLRHb3Nshuu4bJ8QhWjRYxQ~iGFTaBkBJVWT9Hak6yJ61J2Bg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                    <b class="text-sm line-clamp-2">D DAY</b>
                    <p class="text-xs uppercase">Art Jeeno</p>
                </a>
                <a href="" class="w-40 text-center space-y-1.5">
                  <img class="aspect-[0.9] w-full object-cover" src="https://s3-alpha-sig.figma.com/img/805d/00de/dcd1e113ebc3bb9614c680a769c4e3f5?Expires=1698624000&Signature=OD~ZiFv9-mvak5ss7iPQ-xjN3JhuTCaONEqI1OJB06IsI1HDvyqz53x63NiGgYuzoYQ7ev5BpN~12xYfkEdQyyXZH1fg~0eim3k8UyirDxeQZSlLvHEqfPFxnZkzPmGZlYyRydG5hr-5ejblo4XdFAG~EXNTgjx9xluWDoHsNpR7z-jMqAOXqI-Iv6BEs~aeNctWRIK~jCvyU6eGqakVHAJIW~EPBsY6FMRYt5u5Xv~DrR4gxQAu3JjC86FZiMblyvLUSQ1fT5AaQ5q5kiI0wJ4RmHCgGlQsDCzOADqhf3Wi~hhXuWw0vE1h4i9W~S1CQBewcS2YgbOJ~GL8PtuRtw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                  <b class="text-sm line-clamp-2">HORMONES THE SERIES ฉบับ ACT-ART</b>
                  <p class="text-xs uppercase">Art Jeeno</p>
                </a>
              </div>
            </div>
          </section>
        </div>
      </section>
    </header>
    `;
  }
}

customElements.define("navbar-component", Navbar);
