class Footer extends HTMLElement {
  pathname = window.location.pathname ?? "";
  connectedCallback() {
    this.innerHTML = /*html*/ `
    <footer class="py-12">
        <div class="flex flex-col items-center justify-between gap-y-8 lg:flex-row main-container">
          <img src="./images/salmon-logo.svg" alt="" width="140" height="50" />
          <div class="space-x-5">
            <a href="../about.html">ABOUT US</a>
            <a href="../contact.html">CONTACT</a>
          </div>
          <div class="flex items-center gap-x-5">
            <a href="">
              <img src="./icons/facebook-orange.svg" alt="" />
            </a>
            <a href="">
              <img src="./icons/instagram-orange.svg" alt="" />
            </a>
            <a href="">
              <img src="./icons/x-orange.svg" alt="" />
            </a>
            <a href="">
              <img src="./icons/tiktok-orange.svg" alt="" />
            </a>
            <a href="">
              <img src="./icons/youtube-orange.svg" alt="" />
            </a>
          </div>
        </div>
    </footer>`;
  }
}


customElements.define("footer-component", Footer);
