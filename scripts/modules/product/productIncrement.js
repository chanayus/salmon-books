const productQuantity = document.querySelectorAll(".product-increment");

productQuantity?.forEach((element) => {
  const increaseBtn = element.querySelector(".increase");
  const decreaseBtn = element.querySelector(".decrease");
  const inputValue = element.querySelector("input");

  const maximumValue = Number(inputValue.max) || undefined;

  decreaseBtn.disabled = Number(inputValue.value) === 1;

  increaseBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    inputValue.value = `${Number(inputValue.value) + 1}`;

    if (decreaseBtn.disabled) {
      decreaseBtn.disabled = false;
    }
    if (Number(inputValue.value) >= maximumValue) {
      increaseBtn.disabled = true;
    }
  });

  decreaseBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    inputValue.value = `${Number(inputValue.value) - 1}`;

    if (Number(inputValue.value) <= 1) {
      decreaseBtn.disabled = true;
    }
    if (Number(inputValue.value) < maximumValue) {
      increaseBtn.disabled = false;
    }
  });

  inputValue?.addEventListener("focusout", () => {
    if (!inputValue.value) {
      inputValue.value = 1;
    }
  });

  inputValue?.addEventListener("input", (e) => {
    if (Number(e.target.value) >= maximumValue) {
      e.target.value = maximumValue;
      increaseBtn.disabled = true;
      decreaseBtn.disabled = false;
    }
    if (Number(e.target.value) <= 1) {
      e.target.value = 1;
      decreaseBtn.disabled = true;
      increaseBtn.disabled = false;
    }
  });
});
