const header = document.querySelector("header");
const header_inner = document.querySelector(".header_inner");
const nav = document.querySelector("header nav");
const headerBg = document.querySelector(".header_bg");

nav.addEventListener("mouseover", () => {
  headerBg.style = "transform: translateY(0%);";
  header_inner.classList.add("on");
});
nav.addEventListener("mouseleave", () => {
  headerBg.style = "transform: translateY(-100%);";
  header_inner.classList.remove("on");
});

window.addEventListener("scroll", function (event) {
  let scorllY = this.window.scrollY;
  if (this.scrollY > 150) {
    header.style = "display: none;";
  } else {
    header.style = "display: flex;";
  }
});
