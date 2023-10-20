const scrollProgress = document.querySelector("#scroll-progress");

if (scrollProgress) {
  const updateScrollProgress = () => {
    const currentScroll = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (currentScroll / scrollHeight) * 100;

    scrollProgress.style.width = `${progress}%`;
    requestAnimationFrame(updateScrollProgress);
  };

  document.addEventListener("scroll", updateScrollProgress);
}
