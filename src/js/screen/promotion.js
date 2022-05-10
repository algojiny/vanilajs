const show2 = document.querySelector(".show_2");
const show3 = document.querySelector(".show_3");

window.addEventListener("scroll", scrolling);

function scrolling(event) {
  console.log(window.screenY);
  if (window.scrollY > 200) {
    show2.classList.add("on");
  }
  if (window.scrollY > 800) {
    show3.classList.add("on");
  }
}

console.log(show3.getBoundingClientRect());
