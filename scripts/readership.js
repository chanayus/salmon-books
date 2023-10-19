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
loginForm?.addEventListener("submit", submitHandle);

const readershipCards1 = document.querySelectorAll("#readership-card-1 img");
const readershipCards2 = document.querySelectorAll("#readership-card-2 img");

readershipCards1?.forEach((card, index) => card.classList.add(`z-[${readershipCards1.length - index}]`));
readershipCards2?.forEach((card, index) => card.classList.add(`z-[${readershipCards2.length - index}]`));

gsap.set(["#readership-card-2 img:not(:first-of-type)", "#readership-card-1 img:not(:first-of-type)"], { x: 90, autoAlpha: 0 });

const flipCardAnimate = (elements, delay) => {
  let index = 0;

  const flipCards = (currentEle, nextEle) => {
    const tl = gsap
      .timeline({
        onComplete: () => {
          if (index >= elements.length - 1) {
            index = 0;
            tl.kill();
            flipCards(elements[0], elements[1]);
          } else {
            index += 1;
            tl.kill();
            flipCards(elements[index], elements[index + 1] ?? elements[0]);
          }
        },
      })
      .to(currentEle, { x: -40, autoAlpha: 0 }, `+=${delay}`)
      .fromTo(nextEle, { x: 40, autoAlpha: 0 }, { x: 0, autoAlpha: 1 }, "+=0.1");
  };

  gsap.timeline().add(flipCards(elements[index], elements[index + 1]), `+=${delay}`);
};

flipCardAnimate(readershipCards1, 5);
flipCardAnimate(readershipCards2, 3.25);

gsap.fromTo(["#readership-card-2", "#readership-card-1"], { autoAlpha: 0, x: 50 }, { autoAlpha: 1, x: 0, stagger: 0.1, delay: 0.5, duration: 1, ease: "expo" });

gsap
  .timeline()
  .fromTo("header", { autoAlpha: 0 }, { autoAlpha: 1, ease: "expo", duration: 1 })
  .fromTo("#login-form", { y: 50, rotateY: 45, autoAlpha: 0 }, { y: 0, rotateY: 0, autoAlpha: 1, ease: "expo", duration: 1 }, "-=0.7");
