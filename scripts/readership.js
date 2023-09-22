const memberIdInput = document.querySelector("#member-id");
const phoneInput = document.querySelector("#phone-number");
const emailInput = document.querySelector("#email");
const loginForm = document.querySelector("#login-form");

const numberOnlyHandle = (e) => {
  const value = e.target.value;
  if (isNaN(Number(value)) || value[value.length - 1] === " ") {
    e.target.value = value.slice(0, value.length - 1);
  }
};

const submitHandle = (e) => {
  const inputValues = [emailInput.value, phoneInput.value, memberIdInput.value];
  const emptyValueInput = inputValues.filter((value) => !value).length;

  if (emptyValueInput >= 2) {
  }
};

phoneInput?.addEventListener("input", numberOnlyHandle);
// memberIdInput?.addEventListener("input", numberOnlyHandle);
loginForm?.addEventListener("submit", submitHandle);
