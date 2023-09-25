import { gravityHover } from "./modules/gravityHover.js";
import { getSelectedData } from "./modules/menuFilter.js";

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

const authorInput = document.querySelector("#author-name-input");
const authorResult = document.querySelector(".filter-options-content");

const addAuthorsResult = (data) => {
  authorResult.innerHTML = ``;
  if (data.length > 0) {
    data.forEach((value) => {
      authorResult.innerHTML += `<a href="">${value}</a>`;
    });
  } else {
    authorResult.innerHTML = `<p class="absolute top-2 z-10 w-full !text-center text-black opacity-50">ไม่พบข้อมูล</p>`;
  }
};

authorInput?.addEventListener("input", (e) => {
  const result = authors.filter((author) => author.toLowerCase().includes(e.target.value.toLowerCase()));
  addAuthorsResult(result);
});

addAuthorsResult(authors);

gsap.fromTo(".author-card", { autoAlpha: 0, scale: 0.75 }, { autoAlpha: 1, scale: 1, stagger: 0.05, duration: 1, ease: "expo" });

gravityHover(".author-card");
