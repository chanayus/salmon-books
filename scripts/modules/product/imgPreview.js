const btnImgPreview = document.querySelectorAll(".btn-img-preview");
const currentImgPreview = document.querySelector("#current-img-preview");

btnImgPreview?.forEach((btn) => {
  if (btn.children[0].src !== currentImgPreview.src) {
    btn.classList.add("opacity-40");
  }

  btn.addEventListener("click", (e) => {
    currentImgPreview.src = e.target.src;

    btnImgPreview?.forEach((btn) => {
      if (btn.children[0].src !== currentImgPreview.src) {
        btn.classList.add("opacity-40");
      } else {
        btn.classList.remove("opacity-40");
      }
    });
  });
});
