const header = document.querySelector("header");
const nav = document.querySelector("header nav");
const headerBg = document.querySelector(".header_bg");

nav.addEventListener("mouseover", () => {
  headerBg.style = "transform: translateY(0%);";
  header.classList.add("on");
});
nav.addEventListener("mouseleave", () => {
  headerBg.style = "transform: translateY(-100%);";
  header.classList.remove("on");
});
