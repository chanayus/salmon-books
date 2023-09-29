const productIncrement = document.querySelectorAll(".product-increment");

productIncrement?.forEach((ele) => {
  const increaseBtn = ele?.querySelector(".increase");
  const decreaseBtn = ele?.querySelector(".decrease");
  const inputValue = ele?.querySelector("#input-value");

  const maximumValue = Number(ele.dataset.max);

  decreaseBtn.disabled = Number(inputValue.value) === 1;

  increaseBtn?.addEventListener("click", () => {
    inputValue.value = `${Number(inputValue.value) + 1}`;

    if (decreaseBtn.disabled) {
      decreaseBtn.disabled = false;
    }
    if (Number(inputValue.value) >= maximumValue) {
      increaseBtn.disabled = true;
    }
  });

  decreaseBtn?.addEventListener("click", () => {
    inputValue.value = `${Number(inputValue.value) - 1}`;

    if (Number(inputValue.value) === 1) {
      decreaseBtn.disabled = Number(inputValue.value) === 1;
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
    }
  });
});
