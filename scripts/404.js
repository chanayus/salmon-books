gsap
  .timeline()
  .fromTo("#main-content h2 span", { yPercent: 105 }, { yPercent: 0, stagger: 0.125, duration: 1.5, ease: "expo.inOut" }, "-=0.25")
  .fromTo(["#main-content p", "#main-content a"], { autoAlpha: 0 }, { autoAlpha: 1, duration: 1.5, ease: "expo" }, "-=0.35");
