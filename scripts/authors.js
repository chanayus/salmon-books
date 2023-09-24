const authors = [
  "A GIRL LIKE YOU",
  "Art Jeeno",
  "Banana Blah Blah",
  "Banana Yoshimoto",
  "Beth O'Leary",
  "C.S.",
  "IANNNNN",
  "juli baker and summer",
  "LADYS",
  "MALIMALI",
  "Michelle Zauner",
  "Miranda July",
  "MISTER TOMPKIN",
  "Ocean Vuong",
  "PLARIEX",
  "PPONG",
  "SAHRED TOY",
  "Sally Rooney",
  "Team Salmon",
  "TOMA",
  "TUNA DUNN",
  "uninspired by current events",
  "wrongdesign",
  "กรุณพร เชษฐพยัคฆ",
  "กฤดิกร วงศ์สว่างพานิช",
  "กิตติพล สรัคคานนท",
  "ขวัญชาย ดำรงค์ขวัญ",
  "คงเดช จาตุรันต์รัศมี",
  "คันฉัตร รังษีกาญจน์ส่อง",
  "คัมภีร์ สรวมศิริ",
  "ฆนาธร ขาวสนิท",
  "จักรพันธุ์ ขวัญมงคล",
  "จัง",
  "จิดานันท์ เหลืองเพียรสมุท",
  "จิรัฏฐ์ ประเสริฐทรัพย",
  "จิราภรณ์ วิหวา",
];

let authorSelectorVisible = false;

const selectorToggle = document.querySelector("#author-select-button");
const authorSelector = document.querySelector(".filter-options");
const icon = selectorToggle?.querySelector("svg path");
const authorInput = document.querySelector("#author-name-input");
const authorResult = document.querySelector("#author-result");

const addAuthorsResult = (data) => {
  authorResult.innerHTML = ``;
  if (data.length > 0) {
    data.forEach((value) => {
      authorResult.innerHTML += `<a href="">${value}</a>`;
    });
  } else {
    authorResult.innerHTML = `<p class="absolute top-2 z-10 w-full border !text-center text-black opacity-50">ไม่พบข้อมูล</p>`;
  }
};

selectorToggle?.addEventListener("click", () => {
  gsap.to(authorSelector, { autoAlpha: authorSelectorVisible ? 0 : 1, duration: 0.25 });
  authorSelectorVisible = !authorSelectorVisible;

  selectorToggle.classList.toggle("active")
});

authorInput?.addEventListener("input", (e) => {
  const result = authors.filter((author) => author.includes(e.target.value));
  addAuthorsResult(result);
});

addAuthorsResult([...authors, ...authors]);

gsap.set(authorSelector, { autoAlpha: 0 });
