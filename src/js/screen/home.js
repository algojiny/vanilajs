const banner = document.querySelector(".banner");
const slide = document.querySelector(".slide");
const items = document.querySelectorAll(".item");
const bgColor = [
  "tomato",
  "skyblue",
  "darkseagreen",
  "pink",
  "darkslategrey",
  "slateblue",
  "gainsboro",
  "darkcyan",
  "goldenrod",
  "lightcoral",
  "khaki",
  "gray",
  "mediumpurple",
  "#222",
  "saddlebrown",
  "mediumvioletred",
  "steelblue",
];
const next = document.querySelector(".nextBtn");
const prev = document.querySelector(".prevBtn");
const maxIndex = items.length;

const firstChild = document.querySelector(".item:first-child");
const lastChild = document.querySelector(".item:last-child");
const firstClone = firstChild.cloneNode(true);
const lastClone = lastChild.cloneNode(true);
const TRANSITION = "transition: all linear 0.2s;";

slide.append(firstClone);
slide.prepend(lastClone);

slide.style = `transform: translateX(-100vw);`;

let index = 0;

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

function nextSlide() {
  if (index < maxIndex - 1) {
    slide.style = `transform: translateX(-${
      (index + 2) * 100
    }vw); ${TRANSITION}`;
    index = index + 1;
  } else {
    slide.style = `transform: translateX(-${
      (index + 2) * 100
    }vw); ${TRANSITION}`;
    setTimeout(() => {
      slide.style = `transform: translateX(-${100}vw);`;
    }, 300);
    index = 0;
  }
  banner.style = `background-color: ${
    bgColor[Math.round(Math.random() * bgColor.length)]
  }`;
  items.forEach((item) => item.classList.remove("on"));
  items[index].classList.add("on");
}
function prevSlide() {
  if (index !== 0) {
    slide.style = `transform: translateX(-${index * 100}vw); ${TRANSITION}`;
    index = index - 1;
  } else {
    slide.style = `transform: translateX(-${index * 100}vw); ${TRANSITION}`;
    setTimeout(() => {
      slide.style = `transform: translateX(-${
        maxIndex * 100
      }vw); transition: all linear 0s`;
    }, 300);
    index = maxIndex - 1;
  }
  banner.style = `background-color: ${
    bgColor[Math.round(Math.random() * bgColor.length)]
  }`;
  items.forEach((item) => item.classList.remove("on"));
  items[index].classList.add("on");
}

export default home;
