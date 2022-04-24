export default home;

const next = document.querySelector(".nextBtn");
const prev = document.querySelector(".prevBtn");
const slide = document.querySelector(".slide");

const items = document.querySelectorAll(".item");
const maxIndex = items.length;

const firstChild = document.querySelector(".item:first-child");
const lastChild = document.querySelector(".item:last-child");
const firstClone = firstChild.cloneNode(true);
const lastClone = lastChild.cloneNode(true);
const TRANSITION = "transition: all linear 0.3s;";

console.log(lastClone);
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
}
