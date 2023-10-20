const currentImg = document.querySelector("#current-img-preview");

const zoomPopup = document.querySelector("#img-zoom-preview");
const zoomPopupImage = document.querySelector("#img-zoom-preview #img-preview");
const closePopupButton = document.querySelector("#img-zoom-preview #close-img-zoom-preview");
const zoomToggleButton = document.querySelector("#img-zoomin-toggle");

const productImages = document.querySelectorAll(".btn-img-preview img");
const zoomImgPreview = document.querySelector("#zoom-img-preview-list");

let isZoomIn = false;
let isDragging = false;

const zoomIn = (positionY = "0%", positionX = "0%") => {
  gsap.to(zoomPopupImage, { scale: 2, y: positionY, x: positionX, duration: 0.2 });
  isZoomIn = true;
  zoomToggleButton.innerHTML = `<svg stroke="#FFF" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>`;
};

const zoomOut = () => {
  gsap.to(zoomPopupImage, { scale: 1, y: 0, x: 0, duration: 0.2 });
  isZoomIn = false;
  zoomToggleButton.innerHTML = `<svg stroke="#FFF" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>`;
};

const activeImageSelected = () => {
  zoomImgPreview?.querySelectorAll("img")?.forEach((ele) => {
    if (ele.src !== zoomPopupImage.src) {
      ele.classList.add("opacity-40");
    } else {
      ele.classList.remove("opacity-40");
    }
  });
};

zoomPopupImage?.addEventListener("click", (e) => {
  zoomPopupImage.classList.toggle("cursor-zoom-in");
  zoomPopupImage.classList.toggle("cursor-zoom-out");

  if (!isZoomIn) {
    const positionYPercent = Math.floor((e.offsetY / e.target.offsetHeight) * 100);
    const positionXPercent = Math.floor((e.offsetX / e.target.offsetWidth) * 100);
    const positionYToZoom = positionYPercent <= 20 ? "50%" : positionYPercent > 20 && positionYPercent <= 80 ? "0%" : "-50%";
    const positionXToZoom = positionXPercent <= 20 ? "50%" : positionXPercent > 20 && positionXPercent <= 80 ? "0%" : "-50%";

    zoomIn(positionYToZoom, positionXToZoom);
  } else {
    zoomOut();
  }
});

closePopupButton?.addEventListener("click", () => {
  zoomOut();
  gsap.to(zoomPopup, { autoAlpha: 0, duration: 0.2 });
});

currentImg?.addEventListener("click", () => {
  gsap.to(zoomPopup, { autoAlpha: 1, duration: 0.2 });
  zoomPopupImage.src = currentImg.src;
  activeImageSelected();
});

productImages?.forEach((image) => {
  const button = document.createElement("button");
  const img = document.createElement("img");
  button.className = "max-w-[clamp(4rem,5vw,4.5rem)] w-full shrink-0 aspect-[0.75]";
  img.className = "object-contain w-full h-full max-h-full";
  img.src = image.src;
  button.appendChild(img);

  button.addEventListener("click", (e) => {
    zoomPopupImage.src = e.target.src;
    activeImageSelected();
    zoomOut();
  });

  zoomImgPreview.appendChild(button);
});

zoomToggleButton?.addEventListener("click", (e) => {
  e.stopPropagation();
  isZoomIn ? zoomOut() : zoomIn();
});

zoomPopup?.addEventListener("click", (e) => {
  if (zoomPopupImage && zoomImgPreview && zoomToggleButton && e.target && !zoomPopupImage.contains(e.target) && !zoomImgPreview.contains(e.target) && !zoomToggleButton.contains(e.target)) {
    zoomOut();
    gsap.to(zoomPopup, { autoAlpha: 0, duration: 0.2 });
  }
});

activeImageSelected();
