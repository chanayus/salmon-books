const passwordInputs = document.querySelectorAll(".input-password");

passwordInputs?.forEach((input) => {
  const showPasswordButton = input.querySelector(".show-password-button");
  const inputElement = input.querySelector("input");

  showPasswordButton.addEventListener("click", () => {
    inputElement.type = inputElement.type === "password" ? "text" : "password"
  });
});
