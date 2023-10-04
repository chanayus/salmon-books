gsap
  .timeline()
  .fromTo(".heading-text ", { y: 25, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.1, duration: 1, ease: "expo" }, "+=0.2")
  .fromTo("p", { autoAlpha: 0, y: 25 }, { autoAlpha: 1, y: 0, stagger: 0.25, duration: 1, ease: "expo" }, "-=0.5")
  .fromTo(["#salmon-text-orange", "#salmon-text-yellow"], { autoAlpha: 0 }, { autoAlpha: 1, duration: 1, stagger: 0.1, ease: "expo" }, "-=0.75")
  .fromTo(".gallery-col", { autoAlpha: 0 }, { autoAlpha: 1, duration: 1, ease: "expo" }, "-=1.25");

gsap.fromTo(
  "#salmon-text-orange",
  { xPercent: -50 },
  {
    xPercent: 0,
    scrollTrigger: {
      trigger: "body",
      scrub: 1,
      start: "22% center",
      end: "72.5% center",
      ease: "none",
    },
  }
);

gsap.fromTo(
  "#salmon-text-yellow",
  { xPercent: 0 },
  {
    xPercent: -50,
    scrollTrigger: {
      trigger: "body",
      scrub: 1,
      start: "22% center",
      end: "72.5% center",
      ease: "none",
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
