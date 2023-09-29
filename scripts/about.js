gsap
  .timeline()
  .fromTo(".heading-text ", { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.1, duration: 1, ease: "expo.inOut" })
  .fromTo("p", { autoAlpha: 0 }, { autoAlpha: 1, stagger: 0.1, duration: 1, ease: "expo.inOut" }, "-=0.5")
  .fromTo(["#salmon-text-orange", "#salmon-text-yellow"], { autoAlpha: 0 }, { autoAlpha: 1, duration: 1, ease: "expo.inOut" }, "-=1")
  .fromTo(".gallery-col", { autoAlpha: 0 }, { autoAlpha: 1, duration: 1, ease: "expo.inOut" }, "-=1.25");

gsap.fromTo(
  "#salmon-text-orange",
  { xPercent: -25 },
  {
    xPercent: 0,
    scrollTrigger: {
      trigger: "body",
      scrub: 1,
      start: "22% center",
      end: "75% center",
      ease: "expo",
    },
  }
);

gsap.fromTo(
  "#salmon-text-yellow",
  { xPercent: 0 },
  {
    xPercent: -25,
    scrollTrigger: {
      trigger: "body",
      scrub: 1,
      start: "22% center",
      end: "75% center",
      ease: "expo",
    },
  }
);

const initGallery = () => {
  const galleryColumns = document.querySelectorAll(".gallery-col");

  galleryColumns?.forEach((col) => {
    const childElement = col.firstElementChild;
    if (childElement) {
      const duplicatedElement = childElement.cloneNode(true);
      col.appendChild(duplicatedElement);
    }
  });

  gsap.fromTo(
    ".img-col-odd",
    { yPercent: -100 },
    {
      yPercent: 0,
      repeat: -1,
      duration: 30,
      ease: "linear",
    }
  );

  gsap.fromTo(
    ".img-col-even",
    { yPercent: 0 },
    {
      yPercent: -100,
      repeat: -1,
      duration: 30,
      ease: "linear",
    }
  );
};

initGallery();
