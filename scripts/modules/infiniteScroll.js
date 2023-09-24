let loading = false;

export const infiniteScroll = (selector, callback) => {
  const container = document.querySelector(selector);

  const addLoader = () => {
    const loader = document.createElement("div");
    loader.className = "loader";
    container.append(loader);
  };

  const removeLoader = () => {
    const loader = container?.querySelector(".loader");
    loader?.remove();
  };

  if (container) {
    window?.addEventListener("scroll", (e) => {
      const currentScroll = window.scrollY + window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight;

      if (scrollHeight - currentScroll <= 0) {
        console.log(scrollHeight);
        if (callback && !loading) {
          addLoader();
          setTimeout(() => {
            callback();
          }, 1000);

          loading = true;

          setTimeout(() => {
            loading = false;
            removeLoader();
          }, 1000);
        }
      }
    });
  }
};
