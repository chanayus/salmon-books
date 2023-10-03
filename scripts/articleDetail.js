const scrollProgress = document.querySelector("#scroll-progress");

document?.addEventListener("scroll", (e) => {
  const currentScroll = window.scrollY;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

  scrollProgress.style.width = `${(currentScroll / scrollHeight) * 100}%`;
});
